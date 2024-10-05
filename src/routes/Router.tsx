import { createBrowserRouter, LoaderFunction } from "react-router-dom";

import Home from "../pages/Home";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import SignIn from "../pages/SignIn";
import SignUp, { signUpAction } from "../pages/SignUp/SignUp";
import { homeLoader } from "../pages/Home/Home";
import { productLoader } from "../pages/Product/Product";
import { productsLoader } from "../pages/Products/Products";

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
      },
      {
        element: <Products />,
        path: "/products/:brandName",
        loader: productsLoader satisfies LoaderFunction,
      },
      {
        element: <Cart />,
        path: "/cart",
      },
      {
        element: <SignIn />,
        path: "/sign-in",
      },
      {
        element: <SignUp />,
        path: "/sign-up",
        action: signUpAction,
      },
    ],
  },
]);

export default router;
