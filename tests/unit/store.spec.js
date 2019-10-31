import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { cloneDeep } from 'lodash';
import storeConfig from './storeConfig';
import items from './items';

const item = items[0];
const item2 = items[1];

/** ADD TO CART */
test('Add first item to cart', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store(cloneDeep(storeConfig));
  store.state.items = [item];
  expect(store.state.cart.length).toBe(0);
  store.commit('ADD_TO_CART', item);
  expect(store.state.cart.length).toBe(1);
});

test('Add second same item to cart', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store(cloneDeep(storeConfig));
  store.state.items = [item];
  expect(store.state.cart.length).toBe(0);
  store.commit('ADD_TO_CART', item);
  store.commit('ADD_TO_CART', item);
  expect(store.state.cart.length).toBe(1);
  expect(store.state.cart[0].quantity).toBe(2);
});

test('Add second different item to cart', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store(cloneDeep(storeConfig));
  store.state.items = [item];
  expect(store.state.cart.length).toBe(0);
  store.commit('ADD_TO_CART', item);
  store.commit('ADD_TO_CART', item2);
  expect(store.state.cart.length).toBe(2);
});

/** REMOVE FROM CART */
test('Remove only item from cart', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store(cloneDeep(storeConfig));
  store.commit('ADD_TO_CART', item);
  expect(store.state.cart.length).toBe(1);
  const cartItem = store.getters.getCartItems()[0];
  store.commit('REMOVE_FROM_CART', cartItem);
  expect(store.state.cart.length).toBe(0);
});

test('Remove 1 item from cart with 2 same items', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store(cloneDeep(storeConfig));
  store.commit('ADD_TO_CART', item);
  store.commit('ADD_TO_CART', item);
  expect(store.state.cart.length).toBe(1);
  const cartItem = store.getters.getCartItems()[0];
  store.commit('REMOVE_FROM_CART', cartItem);
  expect(store.state.cart.length).toBe(0);
});

test('Remove 1 item from cart with 2 different items', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store(cloneDeep(storeConfig));
  store.commit('ADD_TO_CART', item);
  store.commit('ADD_TO_CART', item2);
  const cartItem = store.getters.getCartItems()[0];
  expect(store.state.cart.length).toBe(2);
  store.commit('REMOVE_FROM_CART', cartItem);
  expect(store.state.cart.length).toBe(1);
});

/** GET ITEM BY ID */
test('Get product by id', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store(cloneDeep(storeConfig));
  const fetchedItem = store.getters.getProductById(item.id);
  expect(fetchedItem.name).toBe(item.name);
});

/** GET TOTAL PRICE */
test('Get cart total price of 1 item', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store(cloneDeep(storeConfig));
  store.state.cart.push(item);
  expect(store.getters.getCartTotal()).toBe(item.price);
});

test('Get cart total price of 2 same items)', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store(cloneDeep(storeConfig));
  store.commit('ADD_TO_CART', item);
  store.commit('ADD_TO_CART', item);
  expect(store.getters.getCartTotal()).toBe(item.price * 2);
});

test('Get cart total price of 2 different items)', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store(cloneDeep(storeConfig));
  store.commit('ADD_TO_CART', item);
  store.commit('ADD_TO_CART', item2);
  expect(store.getters.getCartTotal()).toBe(item.price + item2.price);
});
