import { ToastProgrammatic as Toast } from "buefy";
import utils from "../utils/calculator";

const localStorageCartName = "cart";

export default {
  getProducts: (state) => async () => {
    return await fetch("/.netlify/functions/products")
      .then(async (response) => {
        const data = await response.json();

        data.forEach((product) => {
          product.banner = require(`../assets/${product.banner}`);
        });

        return data;
      })
      .catch((err) => {
        console.error(err);

        Toast.open({
          message: "Oops! Could not load products. Try again later.",
          type: "is-danger",
        });
        return;
      });
  },
  getProductById: (state) => (id) => {
    if (!state.products.length) return null;

    const product = state.products.find((p) => p._id == id);
    if (!product) return null;

    if (!product.inCache) {
      for (let i = 0; i < product.pics.length; i++) {
        product.pics[i] = require(`../assets/${product.pics[i]}`);
      }
      product.inCache = true;
    }

    product.canAddToCart = product.stock;

    if (state.cart.length) {
      const productInCart = state.cart.find((p) => p._id == product._id);

      if (productInCart) {
        product.canAddToCart = product.stock - productInCart.quantity > 0;
      }
    }

    return product;
  },
  getCartProducts: (state) => (products) => {
    let cartJson = localStorage.getItem(localStorageCartName);
    if (!cartJson) return [];

    try {
      const cart = JSON.parse(cartJson);

      cart.forEach((cartProduct) => {
        const productInCatalog = products.find((p) => p._id == cartProduct._id);
        if (!productInCatalog) throw "Cart contains products that are no longer in the catalog";

        const stockAfterPurchase = productInCatalog.stock - cartProduct.quantity;
        if (stockAfterPurchase < 0) throw "Cart contains product with higher quantity than in stock";
      });

      return cart;
    } catch (err) {
      console.error(err);
      localStorage.removeItem(localStorageCartName);
      return [];
    }
  },
  getCartTotal: (state) => () => utils.getCartTotal(state.cart).total,
};
