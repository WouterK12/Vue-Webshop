import { SHIPPING_COSTS } from "../../config.json";

const localStorageCartName = "cart";

export default {
  getProductById: (state) => (id) => state.items.find((item) => item.id === Number(id)),
  getPageInfoByName: (state) => (name) => state.links.find((link) => link.name === name),
  getCartItems: (state) => () => {
    let cart = localStorage.getItem(localStorageCartName);

    if (!cart) return [];

    if (cart) {
      try {
        return JSON.parse(cart);
      } catch (err) {
        localStorage.removeItem(localStorageCartName);
        return [];
      }
    }
  },
  getCartTotal: (state) => () => {
    if (state.cart.length === 0) return 0;

    // TODO: put functionality in shared function (Netlify serverless function uses this too)
    const temp = state.cart.reduce((a, b) => a + (b.totalPrice || 0), 0);
    const subTotal = Math.round(temp * 100) / 100;
    return Math.round((subTotal + SHIPPING_COSTS) * 100) / 100;
  },
};
