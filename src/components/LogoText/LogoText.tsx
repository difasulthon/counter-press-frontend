import * as React from "react";
import { getHoverStyle } from "../../utils/Style.util";

type Props = {
  onPress?: () => void;
};

const LogoText = (props: Props): React.ReactElement => {
  const { onPress } = props;

  return (
    <p
      onClick={onPress}
      className={`font-normal text-primary font-logoText text-2xl ${getHoverStyle(
        !!onPress
      )}`}
    >
      CounterPress
    </p>
  );
};

export default LogoText;
