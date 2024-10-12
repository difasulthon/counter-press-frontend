import { getCurrency } from "../../utils/Formatter.util";
import type { Cart } from "../../types/Cart.type";

export const mapOrderSummary = (carts: Cart[]) => {
  const topSection = carts.map((item) => ({
    label: item.product.name,
    value: getCurrency(item.quantity * item.product.price),
  }));
  const subTotal = carts
    .map((item) => ({
      label: item.product.name,
      value: item.quantity * item.product.price,
    }))
    .reduce((total, item) => total + item.value, 0);
  const bottomSection = [
    {
      label: "Sub Total",
      value: getCurrency(subTotal),
    },
    {
      label: "Shipping",
      value: "-",
    },
  ];

  return {
    topSection,
    subTotal,
    bottomSection,
  };
};
