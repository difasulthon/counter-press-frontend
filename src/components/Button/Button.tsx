import React, { ButtonHTMLAttributes } from "react";

import { getHoverStyle } from "../../utils/Style.util";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type Props = ButtonProps & {
  text: string;
  border?: boolean;
  onPress?: () => void;
  size?: string;
  fullWidth?: boolean;
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
  const { text, border = false, onPress, size = "", fullWidth } = props;

  const textSize = getTextSize(size);
  const heightSize = getHeightSize(size);
  const widthClass = fullWidth ? "w-full" : undefined;

  if (border) {
    return (
      <button
        onClick={onPress}
        className={`items-center justify-center bg-white rounded-full pl-4 pr-4 border-2 border-primary ${heightSize} ${getHoverStyle(
          true
        )} ${widthClass}`}
        type={props.type}
      >
        <p className={`font-semibold text-primary ${textSize}`}>{text}</p>
      </button>
    );
  }

  return (
    <button
      onClick={onPress}
      className={`items-center justify-center bg-primary rounded-full pl-4 pr-4 ${heightSize} ${getHoverStyle(
        true
      )} ${widthClass}`}
      type={props.type}
    >
      <p className={`font-semibold text-white ${textSize}`}>{text}</p>
    </button>
  );
};

export default Button;
