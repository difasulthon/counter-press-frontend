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
};

const NavBar = (props: Props): React.ReactElement => {
  const { items } = props;

  const [menuActive, setMenuActive] = useState("");

  return (
    <div className="flex flex-row items-center justify-between h-20 px-10 pl-20 pr-20">
      <div className="mr-20">
        <LogoText onPress={() => {}} />
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
            onPress={() => setMenuActive("home")}
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
              onPress={() => setMenuActive(item.slug)}
            />
          ))}
        </div>
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
