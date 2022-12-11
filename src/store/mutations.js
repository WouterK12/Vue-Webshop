import { ToastProgrammatic as Toast } from "buefy";

export default {
  ADD_TO_CART(state, payload) {
    const item = state.cart.find(
      (el) => el.id === payload.id && el.color === payload.color && el.size === payload.size
    );
    if (item) {
      item.quantity += 1;
      item.price = payload.price;
      item.totalPrice = payload.price * item.quantity;
    } else {
      payload.totalPrice = payload.price;
      state.cart.push({ ...payload, quantity: 1, cart_id: Math.floor(Math.random() * 10000) });
    }

    Toast.open({
      message: "Item added successfully!",
      type: "is-success",
    });
  },
  REMOVE_FROM_CART(state, payload) {
    state.cart = state.cart.filter((el) => el.cart_id !== payload.cart_id);
    Toast.open({
      message: "Item removed successfully!",
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

    let approvalUrl;

    await fetch("/.netlify/functions/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state.cart),
    })
      .then(async (response) => {
        if (response.status != 201) {
          throw response;
        }

        approvalUrl = await response.text();

        if (!approvalUrl) {
          throw "Could not get approval url from response.";
        }
      })
      .catch((err) => {
        console.log(err);
        Toast.open({
          message: "Oops! Something went wrong! Try again later.",
          type: "is-danger",
        });
      });

    Toast.open({
      message: "Redirecting to PayPal...",
      type: "is-success",
    });

    window.open(approvalUrl, "_blank");
  },
};
