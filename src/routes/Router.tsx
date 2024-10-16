import {
  createBrowserRouter,
  LoaderFunction,
  Navigate,
} from "react-router-dom";

import Home from "../pages/Home";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import { homeLoader } from "../pages/Home/Home";
import { productLoader } from "../pages/Product/Product";
import { productsLoader } from "../pages/Products/Products";
import { profileAction, profileLoader } from "../pages/Profile/Profile";
import { cartLoader } from "../pages/Cart/Cart";
import { signInAction } from "../pages/SignIn/SignIn";
import { signUpAction } from "../pages/SignUp/SignUp";

import Root from "./Root";
import { rootLoader } from "./Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader satisfies LoaderFunction,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader satisfies LoaderFunction,
      },
      {
        element: <Product />,
        path: "/product/:slug",
        loader: productLoader satisfies LoaderFunction,
        errorElement: <NotFound />,
      },
      {
        element: <Products />,
        path: "/products/:brandName",
        loader: productsLoader satisfies LoaderFunction,
        errorElement: <NotFound />,
      },
      {
        element: <Cart />,
        path: "/cart",
        loader: cartLoader,
      },
      {
        element: <SignIn />,
        path: "/sign-in",
        action: signInAction,
      },
      {
        element: <SignUp />,
        path: "/sign-up",
        action: signUpAction,
      },
      {
        element: <Profile />,
        path: "/profile",
        loader: profileLoader,
        action: profileAction,
      },
      {
        element: <NotFound />,
        path: "/not-found",
      },
      {
        element: <Navigate to={"/not-found"} replace />,
        path: "*",
      },
    ],
  },
]);

export default router;
