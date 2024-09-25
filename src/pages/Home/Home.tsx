import React, { useState } from "react";

import Search from "../../assets/icons/search.svg";
import InputSearch from "../../components/InputSearch";
import CategoryHeader from "../../components/CategoryHeader";

import Jumbotron from "./components/Jumbotron";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import type { Product } from "../../types/Product.type";

export const homeLoader = async (): Promise<LoaderFunctionArgs<never>> => {
  try {
    console.log("loader");
    const res = await fetch("http://localhost:80/api/products", {
      method: "GET",
      // mode: "no-cors",
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      // },
    });
    const data = await res.json();

    return { products: data.data };
  } catch (e) {
    console.error("Error fetching data:", e);
    return { products: null };
  }
};

const Home = (): React.ReactElement => {
  const { products } = useLoaderData() as { products: Product[] };
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
      <div className="flex w-full mt-10">
        <Jumbotron />
      </div>
      <div className="flex flex-col mt-20 pl-32 pr-32">
        <CategoryHeader titleItalic="New" titleNormal="Arrival" />
        <div className="mt-10 mb-10">
          {products.length > 0 &&
            products.map((product: Product) => (
              <ProductItem key={product.id} item={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
