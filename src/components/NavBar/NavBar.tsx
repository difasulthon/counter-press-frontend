import React, { useState } from "react";

import Cart from "../../assets/icons/cart.svg";
import User from "../../assets/icons/user.svg";
import { GeneralTextConstants } from "../../constants";
import { getHoverStyle } from "../../utils/Style.util";
import type { Brand } from "../../types/Brand.type";

import LogoText from "../LogoText";
import GeneralText from "../GeneralText";
import Button from "../Button";

const { VARIANT } = GeneralTextConstants;

type Props = {
  items: Brand[];
  onPressMenu: (param: string) => void;
  onPressCart: () => void;
  onPressSignIn: () => void;
  onPressSignUp: () => void;
  onPressLogo: () => void;
  onPressProfile: () => void;
  name: string;
  totalItem?: number;
};

const NavBar = (props: Props): React.ReactElement => {
  const {
    items,
    onPressMenu,
    onPressCart,
    onPressSignIn,
    onPressSignUp,
    onPressLogo,
    onPressProfile,
    name,
    totalItem,
  } = props;

  const [menuActive, setMenuActive] = useState("");

  const handleOnPressMenu = (brand: string) => {
    setMenuActive(brand);
    onPressMenu(brand);
  };

  const handleOnPressCart = () => {
    onPressCart();
    setMenuActive("");
  };

  const handleOnPressSignIn = () => {
    onPressSignIn();
    setMenuActive("");
  };

  const handleOnPressSignUp = () => {
    onPressSignUp();
    setMenuActive("");
  };

  const handleOnPressLogo = () => {
    onPressLogo();
    setMenuActive("");
  };

  const handleOnPressProfile = () => {
    onPressProfile();
    setMenuActive("");
  };

  return (
    <div className="flex flex-row items-center justify-between h-20 px-10 pl-20 pr-20">
      <div className="mr-20">
        <LogoText onPress={() => handleOnPressLogo()} />
      </div>
      <div className="flex flex-grow justify-center">
        <div className="flex flex-row gap-12">
          <GeneralText
            text={"Home"}
            variant={
              menuActive === "home"
                ? VARIANT.NAVBAR_MENU_ACTIVE
                : VARIANT.NAVBAR_MENU
            }
            onPress={() => handleOnPressMenu("home")}
          />
          {items.map((item: Brand) => (
            <GeneralText
              key={item.id}
              text={item.name}
              variant={
                item.slug === menuActive
                  ? VARIANT.NAVBAR_MENU_ACTIVE
                  : VARIANT.NAVBAR_MENU
              }
              onPress={() => handleOnPressMenu(item.slug)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="relative h-10 flex items-center w-8 mr-5">
          {totalItem && totalItem > 0 ? (
            <div className="absolute flex top-0 right-0 w-5 justify-center items-center rounded-full bg-yellowPrimary">
              <GeneralText text={`${totalItem}`} variant={VARIANT.CART_COUNT} />
            </div>
          ) : undefined}
          <img
            src={Cart}
            alt="Cart"
            className={`w-5 h-5 ${getHoverStyle(true)}`}
            onClick={() => handleOnPressCart()}
          />
        </div>
        {name ? (
          <div className="flex flex-row gap-3">
            <img
              src={User}
              alt="User"
              className={`w-6 h-6 ${getHoverStyle(true)}`}
              onClick={() => handleOnPressProfile()}
            />
            <GeneralText text={`Hello, ${name}`} />
          </div>
        ) : (
          <div className="flex flex-row gap-3">
            <Button text="Sign Up" onPress={() => handleOnPressSignUp()} />
            <Button
              text="Sign In"
              border
              onPress={() => handleOnPressSignIn()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
