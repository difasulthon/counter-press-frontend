import React from "react";

import Minus from "../../assets/icons/minus.svg";
import Add from "../../assets/icons/add.svg";
import Delete from "../../assets/icons/delete.svg";
import { GeneralTextConstants } from "../../constants";
import { Product } from "../../types/Product.type";
import { getCurrency } from "../../utils/Formatter.util";

import GeneralText from "../GeneralText";

type Props = {
  product: Product;
  quantity: number;
  isSelected?: boolean;
  onAddClick?: () => void;
  onMinClick?: () => void;
  onDeleteClick?: () => void;
};

const { VARIANT } = GeneralTextConstants;

const CartItem = (props: Props): React.ReactElement => {
  const { product, quantity, onAddClick, onMinClick, onDeleteClick } = props;

  return (
    <div className="flex flex-row items-center justify-between py-6 border-b-2 border-graySecondary">
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <img
            src={product.image}
            alt={product.slug}
            className="h-24 w-24 border-2 border-graySecondary rounded-md"
          />
        </div>
        <div className="flex flex-col gap-3 ml-12">
          <GeneralText text={product.name} variant={VARIANT.CART_ITEM_TITLE} />
          <GeneralText
            text={getCurrency(product.price)}
            variant={VARIANT.PRODUCT_PRICE_SECONDARY}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row gap-4">
          <img
            src={Minus}
            alt="Minus"
            className={`w-6 h-6 rounded-full hover:cursor-pointer hover:opacity-50`}
            onClick={onMinClick}
          />
          <div className="h-7 w-7 flex justify-center items-center  bg-graySecondary rounded-sm">
            <GeneralText text={`${quantity}`} />
          </div>
          <img
            src={Add}
            alt="Add"
            className={`w-6 h-6 rounded-full hover:cursor-pointer hover:opacity-50`}
            onClick={onAddClick}
          />
        </div>
        <div className="flex flex-row-reverse mt-4">
          <img
            src={Delete}
            alt="Delete"
            className={`w-6 h-6 hover:cursor-pointer hover:opacity-50`}
            onClick={onDeleteClick}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
