import { BASE_URL } from "../configuration/Env";
import { cookie } from "../configuration/Cookies";
import type { SignInForm, SignUpForm } from "../types/Auth.type";

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

    cookie.set("token", data.data.token);
  } catch {
    throw Error("Bad Request");
    // no handle
  }
};
