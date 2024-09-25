import React from "react";

import { GeneralTextConstants } from "../../constants";

import GeneralText from "../GeneralText";

type Props = {
  titleItalic: string;
  titleNormal: string;
};

const { VARIANT } = GeneralTextConstants;

const CategoryHeader = (props: Props): React.ReactElement => {
  const { titleItalic, titleNormal } = props;

  return (
    <div className="bg-graySecondary h-20 w-full flex items-center justify-center rounded-full">
      <div className="flex flex-row gap-2">
        <GeneralText
          text={titleItalic}
          variant={VARIANT.CATEGORY_HEADER}
          italic
        />
        <GeneralText text={titleNormal} variant={VARIANT.CATEGORY_HEADER} />
      </div>
    </div>
  );
};

export default CategoryHeader;
