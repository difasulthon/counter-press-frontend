import React from "react";

import { GeneralTextConstants } from "../../constants";
import { getHoverStyle } from "../../utils/Style.util";

type Props = {
  text: string;
  variant?: (typeof GeneralTextConstants.VARIANT)[keyof typeof GeneralTextConstants.VARIANT];
  onPress?: () => void;
  italic?: boolean;
};

const { VARIANT } = GeneralTextConstants;

const getFontStyle = (variant?: string) => {
  switch (variant) {
    case VARIANT.NAVBAR_MENU: {
      return "font-medium text-base text-grayPrimary";
    }
    case VARIANT.NAVBAR_MENU_ACTIVE: {
      return "font-bold text-base text-primary";
    }
    case VARIANT.JUMBOTRON: {
      return "font-normal text-5xl text-primary text-yellowPrimary";
    }
    case VARIANT.JUMBOTRON_BOLD: {
      return "font-bold text-5xl text-primary text-yellowPrimary";
    }
    case VARIANT.FOOTER: {
      return "font-normal text-sm text-white";
    }
    case VARIANT.CATEGORY_HEADER: {
      return "font-semibold text-2xl text-primary";
    }
    case VARIANT.PRODUCT_TITLE: {
      return "font-semibold text-base text-black";
    }
    case VARIANT.PRODUCT_PRICE: {
      return "font-normal text-sm text-black";
    }
    case VARIANT.PRODUCT_PRICE_SECONDARY: {
      return "font-semibold text-sm text-primary";
    }
    case VARIANT.BREADCRUMB: {
      return "font-semibold text-sm text-grayPrimary";
    }
    case VARIANT.BREADCRUMB_ACTIVE: {
      return "font-semibold text-sm text-primary";
    }
    case VARIANT.PRODUCT_TITLE_BIG: {
      return "font-semibold text-5xl text-black";
    }
    case VARIANT.PRICE: {
      return "font-normal text-4xl text-primary";
    }
    case VARIANT.SIZE: {
      return "font-normal text-base text-grayPrimary";
    }
    case VARIANT.PAGE_TITLE: {
      return "font-normal text-3xl text-black";
    }
    case VARIANT.INPUT_LABEL: {
      return "font-semibold text-sm text-primary";
    }
    case VARIANT.INPUT_LABEL_ERROR: {
      return "font-semibold text-sm text-red-500";
    }
    case VARIANT.CART_ITEM_TITLE: {
      return "font-medium text-lg text-black";
    }
    case VARIANT.ORDER_PRICE_ITEM: {
      return "font-medium text-sm text-primary";
    }
    case VARIANT.ORDER_PRICE_TOTAL: {
      return "font-medium text-md text-primary";
    }
    case VARIANT.CART_COUNT: {
      return "font-normal text-sm text-white";
    }
    default: {
      return "font-normal text-base text-black";
    }
  }
};

const GeneralText = (props: Props): React.ReactElement => {
  const { text, variant, onPress, italic } = props;

  return (
    <p
      onClick={onPress}
      className={`whitespace-pre-line ${getFontStyle(variant)} ${getHoverStyle(
        !!onPress
      )} ${italic ? "italic" : undefined}`}
    >
      {text}
    </p>
  );
};

export default GeneralText;
