import { toast } from "react-toastify";

import { getCurrency } from "../../utils/Formatter.util";
import { addOrMinItem, deleteItem } from "../../services/Cart.services";
import type { Cart } from "../../types/Cart.type";

const getTopSection = (carts: Cart[]) =>
  carts.map((item) => ({
    label: item.product.name,
    value: getCurrency(item.quantity * item.product.price),
  }));

const getSubTotal = (carts: Cart[]) =>
  carts
    .map((item) => ({
      label: item.product.name,
      value: item.quantity * item.product.price,
    }))
    .reduce((total, item) => total + item.value, 0);

const getBottomSection = (subTotal: number) => [
  {
    label: "Sub Total",
    value: getCurrency(subTotal),
  },
  {
    label: "Shipping",
    value: "-",
  },
];

export const mapOrderSummary = (carts: Cart[]) => {
  const topSection = getTopSection(carts);
  const subTotal = getSubTotal(carts);
  const bottomSection = getBottomSection(subTotal);

  return {
    topSection,
    subTotal,
    bottomSection,
  };
};

export const handleAddItem = async (
  itemId: string,
  existingQuantity: number,
  token: string
) => {
  try {
    const quantity = existingQuantity + 1;
    await addOrMinItem(itemId, quantity, token);
  } catch {
    // no handle
  }
};

export const handleMinItem = async (
  itemId: string,
  existingQuantity: number,
  token: string
) => {
  try {
    const quantity = existingQuantity > 0 ? existingQuantity - 1 : 0;

    if (quantity === 0) {
      await deleteItem(itemId, token);

      toast("Successfully delete product", { type: "error" });
    }

    await addOrMinItem(itemId, quantity, token);
  } catch {
    // no handle
  }
};

export const handleDeleteItem = async (itemId: string, token: string) => {
  try {
    await deleteItem(itemId, token);
  } catch {
    // no handle
  }
};
