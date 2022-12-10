export default {
  getProductById: (state) => (id) => state.items.find((item) => item.id === Number(id)),
  getPageInfoByName: (state) => (name) => state.links.find((link) => link.name === name),
  getCartItems: (state) => () => state.cart,
  getCartTotal: (state) => () => {
    if (state.cart.length === 0) return 0;

    const temp = state.cart.reduce((a, b) => a + (b.price || 0), 0);
    return Math.round(temp * 100) / 100;
  },
};
