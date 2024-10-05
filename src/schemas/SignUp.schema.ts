import * as yup from "yup";

const signUpSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(
      /^\+?[0-9]+$/,
      "Phone number must contain only numbers and optional +"
    )
    .required("Phone number is required"),
  city: yup.string().required("City is required"),
  address: yup.string().required("Address is required"),
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
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  userName: yup
    .string()
    .required("User Name is required")
    .matches(/^\S+$/, "User Name cannot contain spaces"),
  fullName: yup.string().required("Full Name is required"),
});

export default signUpSchema;
