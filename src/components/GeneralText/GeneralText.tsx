import React from "react";

import { GeneralTextConstants } from "../../constants";
import { getHoverStyle } from "../../utils/Style.util";

type Props = {
  text: string;
  variant?: string;
  onPress?: () => void;
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
      return "font-normal text-5xl text-primary text-orange";
    }
    case VARIANT.JUMBOTRON_BOLD: {
      return "font-bold text-5xl text-primary text-orange";
    }
    default: {
      return "font-normal text-base text-black";
    }
  }
};

const GeneralText = (props: Props): React.ReactElement => {
  const { text, variant, onPress } = props;
  console.log("onPress", onPress);

  return (
    <p
      onClick={onPress}
      className={`${getFontStyle(variant)} ${getHoverStyle(!!onPress)}`}
    >
      {text}
    </p>
  );
};

export default GeneralText;
