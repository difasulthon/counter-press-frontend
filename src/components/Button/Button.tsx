import React from "react";
import { getHoverStyle } from "../../utils/Style.util";

type Props = {
  text: string;
  border?: boolean;
  onPress: () => void;
};

const Button = (props: Props): React.ReactElement => {
  const { text, border = false, onPress } = props;

  if (border) {
    return (
      <div
        onClick={onPress}
        className={`flex flex-col items-center justify-center bg-white rounded-full h-9 w-20 border-2 border-primary ${getHoverStyle(
          true
        )}`}
      >
        <p className="font-bold text-sm text-primary">{text}</p>
      </div>
    );
  }

  return (
    <div
      onClick={onPress}
      className={`flex flex-col items-center justify-center bg-primary rounded-full h-9 w-20 ${getHoverStyle(
        true
      )}`}
    >
      <p className="font-bold text-sm text-white">{text}</p>
    </div>
  );
};

export default Button;
