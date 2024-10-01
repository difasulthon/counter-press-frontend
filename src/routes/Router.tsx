import { createBrowserRouter, LoaderFunction } from "react-router-dom";

import Home from "../pages/Home";
import { homeLoader } from "../pages/Home/Home";
import Product from "../pages/Product";
import { productLoader } from "../pages/Product/Product";

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
    ],
  },
]);

export default router;
