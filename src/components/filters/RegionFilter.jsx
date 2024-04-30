import { REGIONOPTIONS } from "../../constants/regionOptions.js";
import { useCountries } from "../../store.jsx";

const RegionFilter = () => {
  const { state, dispatch } = useCountries();

  const isRegionActive = (key) => {
    return state.regions.includes(key) ? true : false;
  };

  const handleClick = (region, isRegionActive) => {
    isRegionActive
      ? dispatch({ type: "removeRegion", payload: region.key })
      : dispatch({ type: "addRegion", payload: region.key });
  };
  return (
    <div>
      <label
        htmlFor="regionFilter"
        className="text-sm text-slate-200 block mb-2"
      >
        Region
      </label>
      <div className="flex flex-wrap gap-3">
        {REGIONOPTIONS.map((region) => (
          <button
            id="regionFilter"
            key={region.key}
            value={region.key}
            className={`text-base py-2 px-3 rounded-xl ${
              isRegionActive(region.key)
                ? "active bg-slate-300 text-slate-100"
                : "text-slate-200 bg-none"
            } `}
            onClick={() => handleClick(region, isRegionActive(region.key))}
          >
            {region.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RegionFilter;
