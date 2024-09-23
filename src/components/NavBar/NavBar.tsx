import React, { useState } from "react";

import { GeneralTextConstants } from "../../constants";
import Cart from "../../assets/icons/cart.svg";
import { getHoverStyle } from "../../utils/Style.util";

import LogoText from "../LogoText";
import GeneralText from "../GeneralText";
import Button from "../Button";

import { menu } from "./NavBar.config";

const { VARIANT } = GeneralTextConstants;

const NavBar = (): React.ReactElement => {
  const [menuActive, setMenuActive] = useState("");

  return (
    <div className="flex flex-row items-center justify-between h-20 pl-24 pr-24">
      <LogoText onPress={() => {}} />
      <div className="flex flex-row gap-12">
        {menu.map((item) => (
          <GeneralText
            key={item}
            text={item}
            variant={
              item === menuActive
                ? VARIANT.NAVBAR_MENU_ACTIVE
                : VARIANT.NAVBAR_MENU
            }
            onPress={() => setMenuActive(item)}
          />
        ))}
      </div>
      <div className="flex flex-row items-center">
        <img
          src={Cart}
          alt="Cart"
          className={`w-5 h-5 mr-10 ${getHoverStyle(true)}`}
          onClick={() => {}}
        />
        <div className="flex flex-row gap-3">
          <Button text="Sign Up" onPress={() => {}} />
          <Button text="Sign In" border onPress={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
