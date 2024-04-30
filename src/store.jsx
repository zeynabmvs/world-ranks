import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { initialState, stateReducer } from "./stateReducer";

const CountriesContext = createContext(null);

const useCountriesSource = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  async function fetchCountries() {
    const response = await fetch("./all.json");
    if (response.ok) {
      const result = await response.json();
      dispatch({ type: "setCountries", payload: result });
    } else {
      dispatch({ type: "setCountries", payload: [] });
    }
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  const setSearch = useCallback((keyword) => {
    dispatch({ type: "setSearchKeyword", payload: keyword });
  }, []);

  const filteredCountries = useMemo(() => {
    return state.countries.filter(
      (item) =>
        (state.searchKeyword !== ""
          ? item.name.common.toLowerCase().includes(state.searchKeyword)
          : true) &&
        (state.regions.length === 0 ||
          state.regions.some((x) => item.region.toLowerCase() === x)) &&
        item.independent === state.independent &&
        item.unMember === state.unMember
    );
  }, [
    state.countries,
    state.searchKeyword,
    state.regions,
    state.independent,
    state.unMember,
  ]);

  const sortedCountries = useMemo(() => {
    function getKey(obj, keyPath) {
      return keyPath.split(".").reduce((acc, curr) => {
        if (acc && acc[curr]) {
          return acc[curr];
        } else {
          return null;
        }
      }, obj);
    }

    return filteredCountries.sort(function (a, b) {
      const valueA = getKey(a, state.sortBy);
      const valueB = getKey(b, state.sortBy);

      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });
  }, [filteredCountries, state.sortBy]);

  console.log("filteredCountries", filteredCountries);
  console.log("sortedCountries", sortedCountries);

  return { state, countriesList: sortedCountries, dispatch, setSearch };
};

export const CountriesContextProvider = ({ children }) => {
  return (
    <CountriesContext.Provider value={useCountriesSource()}>
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountries = () => {
  return useContext(CountriesContext);
};
