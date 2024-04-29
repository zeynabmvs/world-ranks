import { useState } from "react";
import {countriesAllData} from "../data/all.js";
import CountryItem from "./CountryItem.jsx";

function CountriesList() {
  const [countries, setCountries] = useState(countriesAllData);

  return (
    <table className="w-full">
      <thead className="border-b border-slate-300">
        <tr className="text-sm text-slate-200 text-center">
          <th className="py-3">Flag</th>
          <th className="py-3">Name</th>
          <th className="py-3">Population</th>
          <th className="py-3">Area (km²)</th>
          {/* <th className="py-3">Independent</th>
          <th className="py-3">un member</th> */}
          <th className="py-3 hidden md:table-cell">Region</th>
        </tr>
      </thead>
      <tbody>
        {countries && countries.length ? (
          countries.map((country) => (
            <CountryItem key={country.cca2} country={country} />
          ))
        ) : (
          <div>No countries Found</div>
        )}
      </tbody>
    </table>
  );
}
export default CountriesList;
