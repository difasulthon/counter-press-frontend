import React from "react";

import { GeneralTextConstants } from "../../constants";

import GeneralText from "../GeneralText";
import { PriceItem } from "../../types/Order.type";
import { getCurrency } from "../../utils/Formatter.util";

type Props = {
  topSection: PriceItem[];
  bottomSection: PriceItem[];
  total: number;
};

const { VARIANT } = GeneralTextConstants;

const priceItem = (item: PriceItem, index: number) => (
  <div key={index} className="flex flex-row justify-between px-3 mb-2">
    <GeneralText text={item.label} variant={VARIANT.ORDER_PRICE_ITEM} />
    <GeneralText text={item.value} variant={VARIANT.ORDER_PRICE_ITEM} />
  </div>
);

const OrderSummary = (props: Props): React.ReactElement => {
  const { topSection, bottomSection, total } = props;

  return (
    <div className="flex flex-col px-10 py-10 border-2 border-graySecondary rounded-md mb-10">
      <GeneralText text="Order Summary" variant={VARIANT.CART_ITEM_TITLE} />
      <div className="mt-4">
        {topSection.map((item, index) => priceItem(item, index))}
      </div>
      <div className="border border-graySecondary my-5"></div>
      <div className="mt-4">
        {bottomSection.map((item, index) => priceItem(item, index))}
      </div>
      <div className="flex flex-row justify-between px-3 mt-3">
        <GeneralText text="Total" variant={VARIANT.ORDER_PRICE_TOTAL} />
        <GeneralText
          text={getCurrency(total)}
          variant={VARIANT.ORDER_PRICE_TOTAL}
        />
      </div>
      <button className="bg-primary rounded-md h-10 text-white font-medium mt-6">
        Check Out
      </button>
    </div>
  );
};

export default OrderSummary;
