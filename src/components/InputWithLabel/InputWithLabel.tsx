import React, { HTMLInputTypeAttribute } from "react";

import { GeneralTextConstants } from "../../constants";

import GeneralText from "../GeneralText";
import Input from "../Input/Input";

type Props = {
  label: string;
  placeholder: string;
  required?: boolean;
  name: string;
  type?: HTMLInputTypeAttribute;
  disabled?: boolean;
  value?: string;
};

const { VARIANT } = GeneralTextConstants;

const InputWithLabel = (props: Props): React.ReactElement => {
  const { label, placeholder, required, name, type, disabled, value } = props;

  return (
    <div className="">
      <div className="flex flex-row gap-2 mb-4 items-center">
        <GeneralText text={label} variant={VARIANT.INPUT_LABEL} />
        {required && (
          <GeneralText text="*" variant={VARIANT.INPUT_LABEL_ERROR} />
        )}
      </div>
      <Input
        placeholder={placeholder}
        type={type || "text"}
        required={required}
        name={name}
        disabled={disabled}
        value={value}
      />
    </div>
  );
};

export default InputWithLabel;
