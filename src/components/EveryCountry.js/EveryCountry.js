import React, { useContext } from "react";
import Format from "./Format";
import CoronaContext from "../Context/CoronaContext/coronaContext";

const EveryCountry = () => {
  const coronaContext = useContext(CoronaContext);

  const filtered = coronaContext.data.filter((item) => {
    return item.country
      .toLowerCase()
      .includes(coronaContext.search.toLowerCase());
  });
  filtered.sort((a, b) =>
    a.cases < b.cases
      ? 1
      : a.cases === b.cases
      ? a.cases > b.cases
        ? 1
        : -1
      : -1
  );
  return (
    <div>
      {filtered.map((country, id) => (
        <Format country={country} key={id} />
      ))}
    </div>
  );
};

export default EveryCountry;
