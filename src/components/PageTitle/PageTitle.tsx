import React from "react";

import { GeneralTextConstants } from "../../constants";

import GeneralText from "../GeneralText";

type Props = {
  text: string;
};

const { VARIANT } = GeneralTextConstants;

const PageTitle = (props: Props): React.ReactElement => {
  const { text } = props;

  return (
    <div className="pb-12 pt-12 border-b-2 border-graySecondary">
      <GeneralText text={text} variant={VARIANT.PAGE_TITLE} />
    </div>
  );
};

export default PageTitle;
