import { BASE_URL } from "../configuration/Env";

export const getBrands = async () => {
  const res = await fetch(`${BASE_URL}/brands`);
  const data = await res.json();

  return data;
};

export const getProductsHome = async () => {
  const res = await fetch(
    `${BASE_URL}/products?sort=desc&sortBy=createdAt&page=1&size=4`
  );
  const data = await res.json();

  return data;
};

export const getProducts = async (
  query?: string | undefined | null,
  brand?: string
) => {
  const getProductsUrl = query
    ? `${BASE_URL}/products?name=${query}&brandName=${brand}&page=1&size=10`
    : `${BASE_URL}/products?brandName=${brand}&page=1&size=10`;

  const res = await fetch(getProductsUrl);
  const data = await res.json();

  return data;
};
