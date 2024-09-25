import * as React from "react";
import { getHoverStyle } from "../../utils/Style.util";

type Props = {
  onPress?: () => void;
  fontSize?: string;
};

const LogoText = (props: Props): React.ReactElement => {
  const { onPress, fontSize = "text-2xl" } = props;

  return (
    <p
      onClick={onPress}
      className={`font-normal text-primary font-logoText ${fontSize} ${getHoverStyle(
        !!onPress
      )}`}
    >
      CounterPress
    </p>
  );
};

export default LogoText;
