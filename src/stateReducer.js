export const initialState = {
  countries: [],
  sortBy: "area",
  searchKeyword: "",
  regions: [],
  independent: true,
  unMember: false,
};

export const stateReducer = (state, action) => {
  console.log("reducer called: ", action.type);

  switch (action.type) {
    case "setCountries":
      return { ...state, countries: action.payload };
    case "changeSort":
      return { ...state, sortBy: action.payload };
    case "setSearchKeyword":
      return { ...state, searchKeyword: action.payload };
    case "addRegion":
      if (!state.regions.includes(action.payload)) {
        return {
          ...state,
          regions: [...state.regions, action.payload],
        };
      }
      return state;
    case "removeRegion": {
      return {
        ...state,
        regions: state.regions.filter((region) => region !== action.payload),
      };
    }
    case "changeDependant":
      return {
        ...state,
        independent: action.payload,
      };

    case "changeUnMember":
      return {
        ...state,
        unMember: action.payload,
      };

    // case "setFilteredCountries":
    //   return { ...state, filteredCountries: action.payload };

    // case "doSort":
    //   return { ...state, filteredCountries: action.payload };

    default:
      return state;
  }
};
