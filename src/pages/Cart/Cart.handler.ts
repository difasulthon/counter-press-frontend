import { toast } from "react-toastify";

import { getCurrency } from "../../utils/Formatter.util";
import { addOrMinItem, deleteItem } from "../../services/Cart.services";
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

export const handleAddItem = async (
  itemId: string,
  existingQuantity: number
) => {
  try {
    const quantity = existingQuantity + 1;
    await addOrMinItem(itemId, quantity);
  } catch {
    // no handle
  }
};

export const handleMinItem = async (
  itemId: string,
  existingQuantity: number
) => {
  try {
    const quantity = existingQuantity > 0 ? existingQuantity - 1 : 0;

    if (quantity === 0) {
      await deleteItem(itemId);

      toast("Successfully delete product", { type: "error" });
    }

    await addOrMinItem(itemId, quantity);
  } catch {
    // no handle
  }
};

export const handleDeleteItem = async (itemId: string) => {
  try {
    await deleteItem(itemId);
  } catch {
    // no handle
  }
};
