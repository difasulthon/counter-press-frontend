import React from "react";

import { getHoverStyle } from "../../utils/Style.util";

type Props = {
  text: string;
  border?: boolean;
  onPress: () => void;
  size?: string;
};

const getTextSize = (size: string) => {
  switch (size) {
    case "xs": {
      return "text-xs";
    }
    case "sm": {
      return "text-sm";
    }
    case "md": {
      return "text-md";
    }
    case "lg": {
      return "text-lg";
    }
    default: {
      return "text-sm";
    }
  }
};

const getHeightSize = (size: string) => {
  switch (size) {
    case "xs": {
      return "h-7";
    }
    case "sm": {
      return "h-9";
    }
    default: {
      return "h-9";
    }
  }
};

const Button = (props: Props): React.ReactElement => {
  const { text, border = false, onPress, size = "" } = props;

  const textSize = getTextSize(size);
  const heightSize = getHeightSize(size);

  if (border) {
    return (
      <div
        onClick={onPress}
        className={`flex flex-col items-center justify-center bg-white rounded-full pl-4 pr-4 border-2 border-primary ${heightSize} ${getHoverStyle(
          true
        )}`}
      >
        <p className={`font-bold text-primary ${textSize}`}>{text}</p>
      </div>
    );
  }

  return (
    <div
      onClick={onPress}
      className={`flex flex-col items-center justify-center bg-primary rounded-full pl-4 pr-4 ${heightSize} ${getHoverStyle(
        true
      )}`}
    >
      <p className={`font-bold text-white ${textSize}`}>{text}</p>
    </div>
  );
};

export default Button;
