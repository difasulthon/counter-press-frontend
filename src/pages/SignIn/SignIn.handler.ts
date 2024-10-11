import { SignInForm } from "../../types/Auth.type";

export const getSignInFormValues = (formData: FormData): SignInForm => {
  const formValues = {
    userName: formData.get("userName"),
    password: formData.get("password"),
  };

  return formValues;
};
