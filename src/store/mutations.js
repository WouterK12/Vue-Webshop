import { ToastProgrammatic as Toast } from 'buefy';

export default {
  ADD_TO_CART(state, payload) {
    const item = state.cart.find(
      el => el.id === payload.id && el.color === payload.color && el.size === payload.size
    );
    if (item) {
      item.quantity += 1;
      item.price = payload.price * item.quantity;
    } else {
      state.cart.push({ ...payload, quantity: 1, cart_id: Math.floor(Math.random() * 10000) });
    }

    Toast.open({
      message: 'Item added successfully!',
      type: 'is-success'
    });
  },
  REMOVE_FROM_CART(state, payload) {
    state.cart = state.cart.filter(el => el.cart_id !== payload.cart_id);
    Toast.open({
      message: 'Item removed successfully!',
      type: 'is-success'
    });
  },
  CHECK_OUT(state) {
    Toast.open({
      message: "This feature isn't implemented yet",
      type: 'is-danger'
    });
  }
};
