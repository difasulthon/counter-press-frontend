import React from "react";
import {
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import InputSearch from "../../components/InputSearch";
import { BASE_URL } from "../../configuration/env";
import type { Product } from "../../types/Product.type";
import { Brand } from "../../types/Brand.type";
import ProductItem from "../../components/ProductItem";
import GeneralText from "../../components/GeneralText";
import { GeneralTextConstants } from "../../constants";

type ProductsPayload = {
  products: Product[];
  page: number;
  size: number;
  total: number;
  brand?: string;
};

export const productsLoader = async ({
  params,
  request,
}: LoaderFunctionArgs): Promise<ProductsPayload> => {
  try {
    const { brandName } = params;
    const url = new URL(request.url);
    const q = url.searchParams.get("q");

    const brandsRes = await fetch(`${BASE_URL}/brands`);
    const brandsData = await brandsRes.json();

    const brands = brandsData.data.map((item: Brand) =>
      item.name.toLowerCase()
    );
    const brandValue = brands.includes(brandName) ? brandName : "";

    const getProductsUrl = q
      ? `${BASE_URL}/products?name=${q}&brandName=${brandValue}&page=1&size=10`
      : `${BASE_URL}/products?brandName=${brandValue}&page=1&size=10`;

    const res = await fetch(getProductsUrl);
    const data = await res.json();

    return {
      brand: brandValue,
      products: data.data.products,
      page: data.page,
      size: data.size,
      total: data.total,
    };
  } catch {
    return {
      brand: "",
      products: [],
      page: 1,
      size: 10,
      total: 0,
    };
  }
};

const Products = (): React.ReactElement => {
  const { products, brand } = useLoaderData() as ProductsPayload;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || brand;

  return (
    <div className="flex flex-col">
      <div className="flex flex-grow justify-center mt-6">
        <InputSearch type="text" placeholder="Search..." menu={brand} />
      </div>
      {products.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-10 mb-10 ml-24">
          {products.length > 0 &&
            products.map((product: Product) => (
              <ProductItem
                key={product.id}
                item={product}
                onPress={(item) => navigate(`/product/${item.slug}`)}
              />
            ))}
        </div>
      ) : (
        <div className="flex w-full justify-center mt-36">
          <GeneralText
            text={`There are no "${query}" products available`}
            variant={GeneralTextConstants.VARIANT.CATEGORY_HEADER}
          />
        </div>
      )}
    </div>
  );
};

export default Products;
