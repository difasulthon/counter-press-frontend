import React from "react";

import { GeneralTextConstants } from "../../constants";
import type { Product } from "../../types/Product.type";

import GeneralText from "../GeneralText";

type Props = {
  item: Product;
};

const { VARIANT } = GeneralTextConstants;

const ProductItem = (props: Props): React.ReactElement => {
  const { item } = props;

  return (
    <div className="flex flex-col pl-3 pr-3 pt-3 pb-3 rounded-md border-2 border-graySecondary w-64">
      <img src={item.image} alt={item.slug} className="h-60 w-60" />
      <div className="mt-2">
        <GeneralText text={item.name} variant={VARIANT.PRODUCT_TITLE} />
      </div>
      <div className="mt-2">
        <GeneralText
          text={Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(item.price)}
          variant={VARIANT.PRODUCT_PRICE}
        />
      </div>
    </div>
  );
};

export default ProductItem;
