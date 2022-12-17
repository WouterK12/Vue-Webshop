import { ToastProgrammatic as Toast } from "buefy";

const localStorageCartName = "cart";

export default {
  INITIALIZE(state, { products, cart }) {
    state.products = products;
    state.cart = cart;
  },
  ADD_TO_CART(state, payload) {
    const itemInCart = state.cart.find((el) => el._id === payload._id);

    if (itemInCart) {
      itemInCart.quantity += 1;
      itemInCart.price = payload.price;
      itemInCart.totalPrice = payload.price * itemInCart.quantity;
    } else {
      payload.totalPrice = payload.price;
      state.cart.push({ ...payload, quantity: 1 });
    }

    localStorage.setItem(localStorageCartName, JSON.stringify(state.cart));

    Toast.open({
      message: "Item added to cart!",
      type: "is-success",
    });
  },
  REMOVE_FROM_CART(state, payload) {
    state.cart = state.cart.filter((el) => el._id !== payload._id);

    localStorage.setItem(localStorageCartName, JSON.stringify(state.cart));

    Toast.open({
      message: "Item removed from cart!",
      type: "is-success",
    });
  },
  async CHECK_OUT(state) {
    if (!state.cart.length) {
      Toast.open({
        message: "Your shopping cart is empty.",
        type: "is-danger",
      });

      return;
    }

    Toast.open({
      message: "Contacting PayPal...",
      type: "is-success",
    });

    await fetch("/.netlify/functions/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state.cart),
    })
      .then(async (response) => {
        const data = await response.text();

        if (response.status != 201) {
          throw data;
        }

        if (!data) {
          throw "Could not get approval url from response.";
        }

        Toast.open({
          message: "Redirecting to PayPal...",
          type: "is-success",
        });

        window.open(data, "_blank");
      })
      .catch((err) => {
        console.error(err);

        Toast.open({
          message: "Oops! Something went wrong! Try again later.",
          type: "is-danger",
        });
        return;
      });
  },
};
