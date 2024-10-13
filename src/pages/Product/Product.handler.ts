import { cookie } from "../../configuration/Cookies";
import { addToCart } from "../../services/Cart.services";

export const handleAddToCart = async (productId: string) => {
  try {
    const token = cookie.get("token");

    await addToCart(productId, token);
  } catch {
    // no handle
  }
};
