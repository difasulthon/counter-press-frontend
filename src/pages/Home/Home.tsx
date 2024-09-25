import React, { useState } from "react";

import Search from "../../assets/icons/search.svg";
import InputSearch from "../../components/InputSearch";
import Jumbotron from "./components/Jumbotron";

const Home = (): React.ReactElement => {
  const [keyWord, setKeyWord] = useState("");

  const handleSearchChange = (value: string) => {
    setKeyWord(value);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-grow justify-center mt-6">
        <InputSearch
          onChange={(e) => handleSearchChange(e.target.value)}
          value={keyWord}
          type="text"
          placeholder="Search..."
          isFullRounded
          rightIcon={<img src={Search} alt="Search" className="w-4 h-4" />}
        />
      </div>
      <div className="flex flex-grow w-full mt-10">
        <Jumbotron />
      </div>
    </div>
  );
};

export default Home;
