import { useQuery } from "@tanstack/react-query";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { initialState, stateReducer } from "./stateReducer";

const CountriesContext = createContext(null);

const useCountriesSource = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const { data: countries, isPending } = useQuery({
    queryKey: ["countries"],
    queryFn: async function fetchCountries() {
      const response = await fetch("./all.json");
      const result = await response.json();
      return result;
    },
  });
  console.log(countries)

  const setSearch = useCallback((keyword) => {
    dispatch({ type: "setSearchKeyword", payload: keyword });
  }, []);

  const filteredCountries = useMemo(() => {
    if (isPending || !countries) return []

    return countries.filter(
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
    isPending,
    countries,
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

  return {
    state,
    isPending, 
    countries, 
    countriesList: sortedCountries,
    dispatch,
    setSearch,
  };
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
