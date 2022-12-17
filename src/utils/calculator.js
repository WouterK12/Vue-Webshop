import { shipping_costs } from "../../config.json";

export default {
  getCartTotal: (cart) => {
    let subTotal = 0;
    let total = 0;

    if (!cart.length) return { subTotal, total };

    const temp = cart.reduce((a, b) => a + (b.totalPrice || 0), 0);
    subTotal = Math.round(temp * 100) / 100;
    total = Math.round((subTotal + shipping_costs) * 100) / 100;

    return { subTotal, total };
  },
};
