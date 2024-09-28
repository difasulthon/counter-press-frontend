import { createBrowserRouter, LoaderFunction } from "react-router-dom";

import Home from "../pages/Home";
import { homeLoader } from "../pages/Home/Home";

import Root from "./Root";
import Product from "../pages/Product";
import { productLoader } from "../pages/Product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
    ],
  },
]);

export default router;
