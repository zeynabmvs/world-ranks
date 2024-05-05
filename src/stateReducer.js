export const initialState = {
  sortBy: "population",
  searchKeyword: "",
  regions: [],
  independent: true,
  unMember: true,
};

export const stateReducer = (state, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};
