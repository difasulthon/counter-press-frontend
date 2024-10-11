import { Cookies } from "react-cookie";

import { BASE_URL } from "../configuration/env";
import type { SignInForm, SignUpForm } from "../types/Auth.type";

const authCookie = new Cookies(null, { path: "/" });

export const signUp = async (formValues: SignUpForm) =>
  await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    body: JSON.stringify(formValues),
    headers: { "Content-Type": "application/json" },
  });

export const signIn = async (formValues: SignInForm) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    authCookie.set("token", data.data.token);
  } catch {
    // no handle
  }
};
