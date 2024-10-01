import React, { useState } from "react";

import { GeneralTextConstants } from "../../constants";
import Cart from "../../assets/icons/cart.svg";
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
};

const NavBar = (props: Props): React.ReactElement => {
  const {
    items,
    onPressMenu,
    onPressCart,
    onPressSignIn,
    onPressSignUp,
    onPressLogo,
  } = props;

  const [menuActive, setMenuActive] = useState("");

  const handleOnPressMenu = (brand: string) => {
    setMenuActive(brand);
    onPressMenu(brand);
  };

  const handleOnPressCart = () => {
    onPressCart();
  };

  const handleOnPressSignIn = () => {
    onPressSignIn();
  };

  const handleOnPressSignUp = () => {
    onPressSignUp();
  };

  const handleOnPressLogo = () => {
    onPressLogo();
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
        <img
          src={Cart}
          alt="Cart"
          className={`w-5 h-5 mr-10 ${getHoverStyle(true)}`}
          onClick={() => handleOnPressCart()}
        />
        <div className="flex flex-row gap-3">
          <Button text="Sign Up" onPress={() => handleOnPressSignUp()} />
          <Button text="Sign In" border onPress={() => handleOnPressSignIn()} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
