import React, { useContext, useEffect } from "react";
import GlobalStats from "../WorldStats/WorldStats";
import EveryCountry from "../EveryCountry.js/EveryCountry";
import SearchBar from "../Layout/SearchBar";
import CoronaContext from "../Context/CoronaContext/coronaContext";

const Home = () => {
  const coronaContext = useContext(CoronaContext);
  useEffect(() => {
    coronaContext.getGlobalCases();
    coronaContext.getEveryCountry();
    coronaContext.getProvinceData();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <GlobalStats />
      <SearchBar />
      <EveryCountry />
    </div>
  );
};

export default Home;
