import React from "react";
import {
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import InputSearch from "../../components/InputSearch";
import type { Product } from "../../types/Product.type";
import ProductItem from "../../components/ProductItem";
import GeneralText from "../../components/GeneralText";
import { GeneralTextConstants } from "../../constants";
import { getBrands, getProducts } from "../../services/Product.services";
import { getQuery } from "../../utils/QueryParam.utils";
import { getDocumentTitle, getListBrand } from "./Product.handler";

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
    const q = getQuery(request);

    const brandsData = await getBrands();

    const brands = getListBrand(brandsData);

    const brandValue = brandName && brands.includes(brandName) ? brandName : "";
    document.title = getDocumentTitle(brandValue);

    const productsData = await getProducts(q, brandValue);

    return {
      brand: brandValue,
      products: productsData.data.products,
      page: productsData.page,
      size: productsData.size,
      total: productsData.total,
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
        <div className="flex w-full justify-center items-center h-96">
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
