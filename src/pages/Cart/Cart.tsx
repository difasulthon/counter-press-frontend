import React from "react";
import { Cookies } from "react-cookie";
import {
  NavigateFunction,
  redirect,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { toast } from "react-toastify";

import PageTitle from "../../components/PageTitle";
import CartItem from "../../components/CartItem";
import OrderSummary from "../../components/OrderSummary";
import { getCarts } from "../../services/Cart.services";
import GeneralText from "../../components/GeneralText";
import { GeneralTextConstants } from "../../constants";
import type { Cart } from "../../types/Cart.type";

import {
  handleAddItem,
  handleDeleteItem,
  handleMinItem,
  mapOrderSummary,
} from "./Cart.handler";

const authCookie = new Cookies(null, { path: "/" });

export const cartLoader = async () => {
  try {
    const token: string = authCookie.get("token");

    if (!token) {
      return redirect("/sign-in");
    }

    const data = await getCarts(token);

    return {
      carts: data.data.items,
    };
  } catch {
    return {
      carts: [],
    };
  }
};

const onAddItem =
  (itemId: string, existingQuantity: number, navigate: NavigateFunction) =>
  async () => {
    try {
      await handleAddItem(itemId, existingQuantity);

      navigate("/cart");
    } catch {
      toast("Failed add item", { type: "error" });
    }
  };

const onMinItem =
  (itemId: string, existingQuantity: number, navigate: NavigateFunction) =>
  async () => {
    try {
      await handleMinItem(itemId, existingQuantity);

      navigate("/cart");
    } catch {
      toast("Failed minus item", { type: "error" });
    }
  };

const onDeleteItem =
  (itemId: string, navigate: NavigateFunction) => async () => {
    try {
      await handleDeleteItem(itemId);

      navigate("/cart");
    } catch {
      toast("Failed delete item", { type: "error" });
    }
  };

const Cart = (): React.ReactElement => {
  const { carts } = useLoaderData() as { carts: Cart[] };
  const { topSection, subTotal, bottomSection } = mapOrderSummary(carts);
  const navigate = useNavigate();

  return (
    <div className="pl-20 pr-20">
      <PageTitle text="Shopping Cart" />
      {carts.length > 0 ? (
        <div className="flex flex-row">
          <div className="w-2/3">
            {carts.map((item) => (
              <CartItem
                key={item.id}
                product={item.product}
                quantity={item.quantity}
                onAddClick={onAddItem(item.id, item.quantity, navigate)}
                onMinClick={onMinItem(item.id, item.quantity, navigate)}
                onDeleteClick={onDeleteItem(item.id, navigate)}
              />
            ))}
          </div>
          <div className="w-1/3 ml-4 mt-8">
            <OrderSummary
              topSection={topSection}
              bottomSection={bottomSection}
              total={subTotal}
            />
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-center mt-36">
          <GeneralText
            text={`There are no carts available`}
            variant={GeneralTextConstants.VARIANT.CATEGORY_HEADER}
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
