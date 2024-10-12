import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import InputSearch from "../../components/InputSearch";
import CategoryHeader from "../../components/CategoryHeader";
import ProductItem from "../../components/ProductItem";
import type { Product } from "../../types/Product.type";

import Jumbotron from "./components/Jumbotron";
import { getProductsHome } from "../../services/Product.services";

export const homeLoader = async (): Promise<{ products: Product[] | null }> => {
  try {
    document.title = "Home";
    const data = await getProductsHome();

    return {
      products: data.data.products,
    };
  } catch {
    return { products: null };
  }
};

const Home = (): React.ReactElement => {
  const { products } = useLoaderData() as { products: Product[] };
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="flex flex-grow justify-center mt-6">
        <InputSearch type="text" placeholder="Search..." menu="home" />
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
