import REGIONOPTIONS from "../../constants/regionOptions.js";

const RegionFilter = () => {

  const isRegionActive = () => {
    //TODO: write later
    return true;
  };

  const handleClick = (region, isRegionActive) => {
    //TODO: write later
    console.log("clicked on filter");
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
