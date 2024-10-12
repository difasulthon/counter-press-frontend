import { Cookies } from "react-cookie";

import { BASE_URL } from "../configuration/env";

const authCookie = new Cookies(null, { path: "/" });

export const getProfile = async () => {
  const token: string = authCookie.get("token");

  const res = await fetch(`${BASE_URL}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  return data;
};
