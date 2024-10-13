import { BASE_URL } from "../configuration/Env";

export const addToCart = async (productId: string, token: string) => {
  const request = { productId };
  const body = JSON.stringify(request);

  await fetch(`${BASE_URL}/cart/items`, {
    method: "POST",
    body,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const getCarts = async (token: string) => {
  const res = await fetch(`${BASE_URL}/cart`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = res.json();

  return data;
};

export const addOrMinItem = async (
  itemId: string,
  quantity: number,
  token: string
) => {
  const request = { quantity };
  const body = JSON.stringify(request);

  await fetch(`${BASE_URL}/cart/items/${itemId}`, {
    method: "PUT",
    body,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const deleteItem = async (itemId: string, token: string) => {
  await fetch(`${BASE_URL}/cart/items/${itemId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};
