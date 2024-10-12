import React from "react";
import { useNavigate } from "react-router-dom";

import GeneralText from "../../components/GeneralText";
import Button from "../../components/Button";
import GeneralTextConstant from "../../constants/GeneralText.constant";

const { VARIANT } = GeneralTextConstant;

const NotFound = (): React.ReactElement => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-96 ">
      <div className="mb-5">
        <GeneralText text="OFFSIDE!" variant={VARIANT.PRODUCT_TITLE_BIG} />
      </div>
      <div className="mb-10">
        <GeneralText text="The page you are looking for, cannot be found." />
      </div>
      <Button text="Back to home page" onPress={() => navigate("/")} />
    </div>
  );
};

export default NotFound;
