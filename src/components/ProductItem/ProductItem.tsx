import React, { useState } from "react";

import { GeneralTextConstants } from "../../constants";
import type { Product } from "../../types/Product.type";

import GeneralText from "../GeneralText";
import Button from "../Button";

type Props = {
  item: Product;
  onPress: (item: Product) => void;
};

const { VARIANT } = GeneralTextConstants;

const ProductItem = (props: Props): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false);

  const { item, onPress } = props;

  return (
    <div
      className={`flex flex-col pl-3 pr-3 pt-3 pb-3 mb-6 rounded-md border-2 border-graySecondary w-64 ${
        isHovered ? "bg-graySecondary" : "bg-white"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={item.image} alt={item.slug} className="h-60 w-64" />
      <div className="mt-2">
        <GeneralText text={item.name} variant={VARIANT.PRODUCT_TITLE} />
      </div>
      <div className="flex flex-row justify-between items-center mt-2">
        <GeneralText
          text={Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(item.price)}
          variant={VARIANT.PRODUCT_PRICE}
        />
        {isHovered && (
          <Button text="Shop Now" onPress={() => onPress(item)} size="xs" />
        )}
      </div>
    </div>
  );
};

export default ProductItem;
