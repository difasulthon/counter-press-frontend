import React from "react";

import { GeneralTextConstants } from "../../constants";

import GeneralText from "../GeneralText";

const { VARIANT } = GeneralTextConstants;

const Footer = (): React.ReactElement => {
  return (
    <div className="flex justify-center items-center w-full bg-primary h-10">
      <GeneralText
        text="Difa Sulthon | Copyright 2024. All Right Reserverd"
        variant={VARIANT.FOOTER}
      />
    </div>
  );
};

export default Footer;
