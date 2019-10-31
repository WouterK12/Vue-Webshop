import mutations from './mutations';

test('Add item to cart', () => {
  const state = {
    cart: []
  };
  const cart = [{ id: 1, price: 5.99 }];
  mutations.ADD_TO_CART(state, { cart });
  expect(state.cart).toBe(cart);
});
