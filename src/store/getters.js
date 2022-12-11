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

    const temp = state.cart.reduce((a, b) => a + (b.totalPrice || 0), 0);
    return Math.round(temp * 100) / 100;
  },
};
