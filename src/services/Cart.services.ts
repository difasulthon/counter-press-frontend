import { Cookies } from "react-cookie";
import { redirect } from "react-router-dom";

import { BASE_URL } from "../configuration/env";

const authCookie = new Cookies(null, { path: "/" });

export const addToCart = async (productId: string) => {
  const token: string = authCookie.get("token");

  if (!token) {
    redirect("/sign-in");
  }

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

export const addOrMinItem = async (itemId: string, quantity: number) => {
  const token: string = authCookie.get("token");

  if (!token) {
    redirect("/sign-in");
  }

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

export const deleteItem = async (itemId: string) => {
  const token: string = authCookie.get("token");

  if (!token) {
    redirect("/sign-in");
  }

  await fetch(`${BASE_URL}/cart/items/${itemId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};
