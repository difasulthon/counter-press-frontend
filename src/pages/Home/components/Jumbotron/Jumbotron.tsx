import React from "react";

import BackgroundJumbotron from "../../../../assets/images/bg-jumbotron.png";
import NikeTiempoLegend from "../../../../assets/images/nike-tiempo-legend-10.png";
import LogoText from "../../../../components/LogoText";
import GeneralText from "../../../../components/GeneralText";
import { GeneralTextConstants } from "../../../../constants";
import Button from "../../../../components/Button";

const {
  VARIANT: { JUMBOTRON, JUMBOTRON_BOLD },
} = GeneralTextConstants;

const Jumbotron = (): React.ReactElement => {
  return (
    <div className="relative w-full">
      <img src={BackgroundJumbotron} alt="bg-new-arrival" className="w-full" />
      <div className="absolute top-0 w-full h-full">
        <div className="flex flex-col justify-center items-center h-full">
          <LogoText fontSize="text-6xl" />
          <div className="flex flex-row gap-3 mt-3">
            <GeneralText text="NIKE" variant={JUMBOTRON_BOLD} />
            <GeneralText text="TIEMPO LEGEND 10" variant={JUMBOTRON} />
          </div>
          <img src={NikeTiempoLegend} alt="bg-new-arrival" className="mt-4" />
          <div className="mt-6">
            <Button text="Shop Now" onPress={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
