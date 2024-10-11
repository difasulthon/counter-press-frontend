import { SignUpForm } from "../../types/Auth.type";

export const getSignUpFormValues = (formData: FormData): SignUpForm => {
  const formValues = {
    fullName: formData.get("fullName"),
    userName: formData.get("userName"),
    email: formData.get("email"),
    password: formData.get("password"),
    address: formData.get("address"),
    city: formData.get("city"),
    phoneNumber: formData.get("phoneNumber"),
  };

  return formValues;
};
