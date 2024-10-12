import { addToCart } from "../../services/Cart.services";

export const handleAddToCart = async (productId: string) => {
  try {
    await addToCart(productId);
  } catch {
    // no handle
  }
};
