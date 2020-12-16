import React, { useReducer } from "react";
import coronaReducer from "./coronaReducer";
import coronaContext from "./coronaContext";
import axios from "axios";
import {
  GLOBAL_CASES,
  COUNTRY_CASES,
  SEARCH_COUNTRY,
  COUNTRY_INFO,
  COUNTRY_HISTORY,
  PROVINCE_DATA,
} from "../types";

const url = "https://corona.lmao.ninja/v3/covid-19";

const CoronaState = (props) => {
  const initialState = {
    data: [],
    search: "",
    globalData: {},
    countryData: {},
    history: {},
    provinceData: {},
  };

  const [state, dispatch] = useReducer(coronaReducer, initialState);

  const getGlobalCases = async () => {
    try {
      const { data } = await axios.get(`${url}/all`);
      dispatch({ type: GLOBAL_CASES, payload: data });
    } catch (error) {
      console.log(error);
      console.log("error");
    }
  };

  const getEveryCountry = async () => {
    try {
      const { data } = await axios.get(`${url}/countries`);
      dispatch({ type: COUNTRY_CASES, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const getCountry = async (country) => {
    try {
      const { data } = await axios.get(`${url}/countries/${country}`);
      dispatch({ type: COUNTRY_INFO, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const getHistory = async (country) => {
    try {
      const { data } = await axios.get(
        `${url}/historical/${country}?lastdays=150`
      );
      dispatch({ type: COUNTRY_HISTORY, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const searchCountry = (e) => {
    e.preventDefault();
    dispatch({ type: SEARCH_COUNTRY, payload: e.target.value });
  };

  const getProvinceData = async () => {
    try {
      const { data } = await axios.get(
        `https://disease.sh/v3/covid-19/jhucsse`
      );
      dispatch({ type: PROVINCE_DATA, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <coronaContext.Provider
      value={{
        data: state.data,
        globalData: state.globalData,
        search: state.search,
        countryData: state.countryData,
        provinceData: state.provinceData,
        history: state.history,
        getEveryCountry,
        searchCountry,
        getGlobalCases,
        getCountry,
        getHistory,
        getProvinceData,
      }}
    >
      {props.children}
    </coronaContext.Provider>
  );
};

export default CoronaState;
