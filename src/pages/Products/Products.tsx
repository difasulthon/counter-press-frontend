import React, { useState } from "react";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import Search from "../../assets/icons/search.svg";
import InputSearch from "../../components/InputSearch";
import { BASE_URL } from "../../configuration/env";
import type { Product } from "../../types/Product.type";

type ProductsPayload = {
  products: Product[];
  page: number;
  size: number;
  total: number;
};

export const productsLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<ProductsPayload> => {
  try {
    const { brandName } = params;

    const res = await fetch(
      `${BASE_URL}/products?brandName=${brandName}&page=1&size=10`
    );
    const data = await res.json();

    return {
      products: data.data.products,
      page: data.page,
      size: data.size,
      total: data.total,
    };
  } catch (e) {
    console.log("e", e);
    return {
      products: [],
      page: 1,
      size: 10,
      total: 0,
    };
  }
};

const Products = (): React.ReactElement => {
  const { products } = useLoaderData() as ProductsPayload;
  console.log("products", products);

  const [keyWord, setKeyWord] = useState("");

  const handleSearchChange = (value: string) => {
    setKeyWord(value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-grow justify-center mt-6">
        <InputSearch
          onChange={(e) => handleSearchChange(e.target.value)}
          value={keyWord}
          type="text"
          placeholder="Search..."
          isFullRounded
          rightIcon={<img src={Search} alt="Search" className="w-4 h-4" />}
        />
      </div>
    </div>
  );
};

export default Products;
