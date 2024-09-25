import { createBrowserRouter, LoaderFunction } from "react-router-dom";

import Home from "../pages/Home";
import { homeLoader } from "../pages/Home/Home";

import Root from "./Root";

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
    ],
  },
]);

export default router;
