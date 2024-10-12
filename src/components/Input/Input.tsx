import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";

export type Props = {
  type: HTMLInputTypeAttribute;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value?: string;
  placeholder: string;
  isArea?: boolean;
  required?: boolean;
  rightIcon?: React.ReactNode;
  onClickRightIcon?: () => void;
  isFullRounded?: boolean;
  name?: string;
  defaultValue?: string;
  disabled?: boolean;
};

const Input = (props: Props): React.JSX.Element => {
  const {
    type,
    onChange,
    value,
    placeholder,
    isArea,
    required,
    rightIcon,
    onClickRightIcon,
    isFullRounded,
    name,
    defaultValue,
    disabled = false,
  } = props;

  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const onBlurHandler = () => {
    setIsFocused(false);
  };

  if (isArea) {
    return (
      <textarea
        value={value}
        onChange={onChange}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        className={`bg-white border rounded-lg py-2 pl-2 w-80 font-normal text-sm h-24
        ${isFocused ? "border-custom-primary" : "border-black"}
      `}
        placeholder={placeholder}
        required={required}
      />
    );
  }

  return (
    <div className="relative">
      <input
        type={type}
        // value={value || ""}
        onChange={onChange}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        className={`bg-graySecondary py-2 pl-6 pr-10 w-96 font-normal text-sm 
        ${isFullRounded ? "rounded-full" : "rounded-lg"}
      `}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
        disabled={disabled}
        value={value}
      />
      <div className="absolute right-6 top-2" onClick={onClickRightIcon}>
        {rightIcon}
      </div>
    </div>
  );
};

export default Input;
