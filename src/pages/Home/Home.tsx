import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import Search from "../../assets/icons/search.svg";
import InputSearch from "../../components/InputSearch";
import CategoryHeader from "../../components/CategoryHeader";
import ProductItem from "../../components/ProductItem";
import { BASE_URL } from "../../configuration/env";
import type { Product } from "../../types/Product.type";

import Jumbotron from "./components/Jumbotron";

export const homeLoader = async (): Promise<{ products: Product[] | null }> => {
  try {
    const res = await fetch(
      `${BASE_URL}/products?sort=desc&sortBy=createdAt&page=1&size=4`,
      {
        method: "GET",
      }
    );
    const data = await res.json();

    return {
      products: data.data.products,
    };
  } catch (e) {
    console.error("Error fetching data:", e);
    return { products: null };
  }
};

const Home = (): React.ReactElement => {
  const { products } = useLoaderData() as { products: Product[] };
  const navigate = useNavigate();

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
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-10 mb-10">
          {products.length > 0 &&
            products.map((product: Product) => (
              <ProductItem
                key={product.id}
                item={product}
                onPress={(item) => navigate(`/product/${item.slug}`)}
              />
            ))}
        </div>
      </div>
      <div className="flex flex-col pl-32 pr-32">
        <CategoryHeader titleItalic="Best" titleNormal="Seller" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-10 mb-10">
          {products.length > 0 &&
            products.map((product: Product) => (
              <ProductItem
                key={product.id}
                item={product}
                onPress={(item) => navigate(`/product/${item.slug}`)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
