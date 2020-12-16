import React, { useContext } from "react";
import CoronaContext from "../Context/CoronaContext/coronaContext";

const SearchBar = () => {
  const coronaContext = useContext(CoronaContext);

  return (
    <div className="md-form active-purple-2 mb-3 search-bar">
      <input
        className="form-control"
        type="text"
        placeholder="Search the Country"
        aria-label="Search"
        onChange={coronaContext.searchCountry}
      />
    </div>
  );
};

export default SearchBar;
