import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer";
import { getBrands } from "../../services/Product.services";
import { getProfile } from "../../services/Profile.services";
import type { Brand } from "../../types/Brand.type";

import "./Root.css";

const authCookie = new Cookies(null, { path: "/" });

export const rootLoader = async (): Promise<{
  brands: Brand[];
  profileName: string;
}> => {
  try {
    let profileRes;
    const brandsRes = await getBrands();

    const token: string = authCookie.get("token");

    if (token) {
      profileRes = await getProfile(token);
    }

    return {
      brands: brandsRes.data,
      profileName: profileRes ? profileRes.data.fullName : "",
    };
  } catch {
    return { brands: [], profileName: "" };
  }
};

function Root() {
  const { brands, profileName } = useLoaderData() as {
    brands: Brand[];
    profileName: string;
  };
  const navigate = useNavigate();

  const handleOnPressMenu = (brand: string) => {
    if (brand === "home") {
      navigate("/");
    } else {
      navigate(`/products/${brand}`);
    }
  };

  const handleNavigateCart = () => {
    navigate("/cart");
  };

  const handleNavigateSignIn = () => {
    navigate("/sign-in");
  };

  const handleNavigateSignUp = () => {
    navigate("/sign-up");
  };

  const handleOnPressProfile = () => {
    navigate("profile");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar
        items={brands}
        onPressMenu={(brand) => handleOnPressMenu(brand)}
        onPressCart={() => handleNavigateCart()}
        onPressSignIn={() => handleNavigateSignIn()}
        onPressSignUp={() => handleNavigateSignUp()}
        onPressLogo={() => handleOnPressMenu("home")}
        onPressProfile={() => handleOnPressProfile()}
        name={profileName}
      />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
