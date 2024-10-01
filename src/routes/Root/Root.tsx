import { Outlet, useLoaderData } from "react-router-dom";

import { BASE_URL } from "../../configuration/env";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer";
import type { Brand } from "../../types/Brand.type";

import "./Root.css";

export const rootLoader = async (): Promise<{ brands: Brand[] }> => {
  try {
    const res = await fetch(`${BASE_URL}/brands`);
    const data = await res.json();

    const brands = data.data;

    return {
      brands,
    };
  } catch (e) {
    console.error("Error fetching data:", e);
    return { brands: [] };
  }
};

function Root() {
  const { brands } = useLoaderData() as { brands: Brand[] };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar items={brands} />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
