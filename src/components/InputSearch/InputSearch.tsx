import React, { HTMLInputTypeAttribute } from "react";
import { Form, useSearchParams } from "react-router-dom";

import Search from "../../assets/icons/search.svg";

import Input from "../Input/Input";

type Props = {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  menu?: string;
};

const InputSearch = (props: Props): React.ReactElement => {
  const { type, placeholder, menu = "" } = props;

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <Form id="search-products" method="get" action={`/products/${menu}`}>
      <Input
        type={type}
        placeholder={placeholder}
        isFullRounded
        rightIcon={<img src={Search} alt="Search" className="w-4 h-4" />}
        name="q"
        defaultValue={query ?? undefined}
      />
    </Form>
  );
};

export default InputSearch;
