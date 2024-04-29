import { useState } from "react";
import { details } from "../data/details.js";
import Neighbours from "./Neighbours.jsx";

const CountryDetails = () => {
  const [countryData, setCountryData] = useState(details[0]);

  return countryData ? (
    <div className="bg-black border text-slate-100 border-slate-300 md:rounded-xl w-full md:w-[70%] lg:w-1/2 mx-auto flex items-center h-full flex-col mb-20 -m-12">
      <img
        src={countryData?.flags?.svg}
        className="w-[260px] -m-12 rounded-xl mb-8"
      />
      <div className="mb-8 text-center">
        <h1 className="text-display">{countryData?.name?.common}</h1>
        <h2 className="text-lg">{countryData?.name?.official}</h2>
      </div>
      <div className="mb-x flex gap-6 md:gap-11 mb-8">
        <div className="text-base bg-slate-300 rounded-xl p-4 flex gap-3 items-center">
          Population <span className="bg-black h-9 w-[1px]"></span>
          {countryData?.population}
        </div>
        <div className="text-base bg-slate-300 rounded-xl p-4 flex gap-3 items-center">
          Area (km²) <span className="bg-black h-9 w-[1px]"></span>
          {countryData?.area}
        </div>
      </div>

      <div className="border-t border-slate-300 flex justify-between px-[20px] py-6 w-full text-base">
        <p className="text-slate-200">Capital</p>
        <p>{countryData?.capital}</p>
      </div>
      <div className="border-t border-slate-300 flex justify-between px-[20px] py-6 w-full text-base">
        <p className="text-slate-200">Subregion</p>
        <p>{countryData?.subregion}</p>
      </div>
      <div className="border-t border-slate-300 flex justify-between px-[20px] py-6 w-full text-base">
        <p className="text-slate-200">Language</p>
        <p>
          {countryData?.languages
            ? Object.values(countryData?.languages).join(", ")
            : null}
        </p>
      </div>
      <div className="border-t border-slate-300 flex justify-between px-[20px] py-6 w-full text-base">
        <p className="text-slate-200">Currencies</p>
        <p>
          {countryData?.currencies
            ? Object.values(countryData?.currencies)
                .map((currency) => currency.name)
                .join(", ")
            : null}
        </p>
      </div>
      <div className="border-t border-slate-300 flex justify-between px-[20px] py-6 w-full text-base">
        <p className="text-slate-200">Continents</p>
        <p>
          {" "}
          {countryData?.continents
            ? Object.values(countryData?.continents).join(", ")
            : null}
        </p>
      </div>
      <div className="border-t border-slate-300 flex justify-between px-[20px] py-6 w-full text-base flex-col ">
        <p className="text-slate-200 mb-6">Neighbouring Countries</p>
        <Neighbours code={countryData?.cca2} />
      </div>
    </div>
  ) : (
    <div>No data</div>
  );
};

export default CountryDetails;
