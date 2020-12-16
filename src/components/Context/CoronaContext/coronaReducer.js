import {
  GLOBAL_CASES,
  COUNTRY_CASES,
  SEARCH_COUNTRY,
  COUNTRY_INFO,
  PROVINCE_DATA,
  COUNTRY_HISTORY,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case COUNTRY_CASES:
      return {
        ...state,
        data: action.payload,
      };

    case GLOBAL_CASES:
      return {
        ...state,
        globalData: action.payload,
      };
    case COUNTRY_INFO:
      return {
        ...state,
        countryData: action.payload,
      };
    case PROVINCE_DATA:
      return {
        ...state,
        provinceData: action.payload,
      };
    case COUNTRY_HISTORY:
      return {
        ...state,
        history: action.payload,
      };

    case SEARCH_COUNTRY:
      return { ...state, search: action.payload };

    default:
      return state;
  }
};
