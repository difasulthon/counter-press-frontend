import * as yup from "yup";

const signInSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    ),
  userName: yup
    .string()
    .required("User Name is required")
    .matches(/^\S+$/, "User Name cannot contain spaces"),
});

export default signInSchema;
