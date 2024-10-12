import React from "react";
import {
  LoaderFunctionArgs,
  NavigateFunction,
  useLoaderData,
  useNavigate,
  useRevalidator,
} from "react-router-dom";
import { toast } from "react-toastify";

import ChevronRight from "../../assets/icons/chevron-right-grey.svg";
import Button from "../../components/Button";
import GeneralText from "../../components/GeneralText";
import CategoryHeader from "../../components/CategoryHeader";
import SizeItem from "../../components/SizeItem";
import { BASE_URL } from "../../configuration/env";
import { GeneralTextConstants } from "../../constants";
import { getCapitalizeEachWord, getCurrency } from "../../utils/Formatter.util";
import type { Product } from "../../types/Product.type";

import config from "./Product.config";
import { handleAddToCart } from "./Product.handler";

const { VARIANT } = GeneralTextConstants;

export const productLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<{ product: Product | null }> => {
  try {
    const { slug } = params;

    const res = await fetch(`${BASE_URL}/product/${slug}`);
    const data = await res.json();

    return {
      product: data.data,
    };
  } catch {
    return { product: null };
  }
};

const onAddToCart =
  (productId: string, navigate: NavigateFunction, revalidate: () => void) =>
  async () => {
    try {
      await handleAddToCart(productId);

      navigate("/cart");

      revalidate();
    } catch {
      toast("Failed add to cart", { type: "error" });
    }
  };

const Product = (): React.ReactElement => {
  const { product } = useLoaderData() as { product: Product };
  const { name, brandName, image, slug, price, id } = product;

  const navigate = useNavigate();
  const { revalidate } = useRevalidator();

  return (
    <div className="pt-6 pl-20 pr-20">
      <div className="flex flex-row gap-2">
        <GeneralText text={brandName} variant={VARIANT.BREADCRUMB} />
        <img src={ChevronRight} alt="chevron-right" />
        <GeneralText
          text={getCapitalizeEachWord(name)}
          variant={VARIANT.BREADCRUMB_ACTIVE}
        />
      </div>
      <div className="flex flex-row gap-6 mt-10">
        <img
          src={image}
          alt={slug}
          className="border-2 border-graySecondary rounded-md h-2/5 w-2/5"
        />
        <div className="flex flex-col justify-between pt-6 pb-6 w-2/6">
          <div>
            <div className="mb-10">
              <GeneralText text={name} variant={VARIANT.PRODUCT_TITLE_BIG} />
            </div>
            <div className="mb-10">
              <GeneralText text={getCurrency(price)} variant={VARIANT.PRICE} />
            </div>
            <GeneralText text="Select a size" />
            <div className="flex flex-row gap-2 mt-3">
              {config.sizeList.map((item) => (
                <SizeItem key={item.value} text={item.label} />
              ))}
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Button
              text="Add to Cart"
              border
              onPress={onAddToCart(id, navigate, revalidate)}
            />
            <Button text="Buy Now" onPress={() => {}} />
          </div>
        </div>
        <div className="w-2/6 pt-6 pb-6">
          <CategoryHeader titleItalic="" titleNormal="Detail" />
          <div className="mt-6 pl-4 max-h-96 overflow-auto">
            <GeneralText text={config.textDescription} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
