import { useQuery } from "@tanstack/react-query";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";
import { initialState, stateReducer } from "./stateReducer";
const CountriesContext = createContext(null);

const useCountriesSource = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, SetPostsPerPage] = useState(25);

  function handlePagination(currentPage) {
    setCurrentPage(currentPage);
  }

  const { data: countries, isPending } = useQuery({
    queryKey: ["countries"],
    queryFn: async function fetchCountries() {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const result = await response.json();
      return result;
    },
  });

  const setSearch = useCallback((keyword) => {
    dispatch({ type: "setSearchKeyword", payload: keyword });
  }, []);

  const filteredCountries = useMemo(() => {
    if (isPending || !countries) return [];

    const keyword = state.searchKeyword.toLowerCase();

    let filtered = countries.filter(
      (item) =>
        (state.searchKeyword !== ""
          ? item.name.common.toLowerCase().includes(keyword) ||
            item.region.toLowerCase().includes(keyword) ||
            item?.subregion?.toLowerCase().includes(keyword)
          : true) &&
        (state.regions.length === 0 ||
          state.regions.some((x) => item.region.toLowerCase() === x))
    );

    if (state.independent) {
      filtered = filtered.filter((item) => item.independent);
    }

    if (state.unMember) {
      filtered = filtered.filter((item) => item.unMember);
    }

    return filtered;
  }, [
    isPending,
    countries,
    state.searchKeyword,
    state.regions,
    state.independent,
    state.unMember
  ]);

  const sortedCountries = useMemo(() => {
    // sort the filteredCountries array
    function getKey(obj, keyPath) {
      return keyPath.split(".").reduce((acc, curr) => {
        if (acc && acc[curr]) {
          return acc[curr];
        } else {
          return null;
        }
      }, obj);
    }

    return [...filteredCountries].sort(function (a, b) {
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

  const pagedCountries = useMemo( () => {
    const indexOfLastPost = currentPage * postsPerPage;

    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return sortedCountries?.slice(indexOfFirstPost, indexOfLastPost);
  }, [postsPerPage, currentPage, sortedCountries] );


  return {
    state,
    isPending,
    countries: countries || [],
    // countriesList: sortedCountries,
    currentPage,
    postsPerPage,
    handlePagination,
    dispatch,
    setSearch,
    pagedCountries,
    filteredCountries,
    // sortedCountries
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
