import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";

import Input from "../Input/Input";

type Props = {
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  isFullRounded?: boolean;
  rightIcon?: React.ReactNode;
};

const InputSearch = (props: Props): React.ReactElement => {
  const { onChange, value, type, placeholder, isFullRounded, rightIcon } =
    props;

  return (
    <Input
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      isFullRounded={isFullRounded}
      rightIcon={rightIcon}
    />
  );
};

export default InputSearch;
