import React from "react";

import { GeneralTextConstants } from "../../constants";

import GeneralText from "../GeneralText";

type Props = {
  text: string;
};

const { VARIANT } = GeneralTextConstants;

const SizeItem = (props: Props): React.ReactElement => {
  const { text } = props;

  return (
    <div className="flex justify-center items-center border border-grayPrimary rounded-sm h-9 w-9">
      <GeneralText text={text} variant={VARIANT.SIZE} />
    </div>
  );
};

export default SizeItem;
