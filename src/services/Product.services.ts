import { BASE_URL } from "../configuration/env";

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
