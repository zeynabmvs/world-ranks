import { useCountries } from "../store.jsx";
import CountryItem from "./CountryItem.jsx";
import Loading from "./Loading"

function CountriesList() {
  const { countriesList, isPending } = useCountries();

  const countries = countriesList;

  if (isPending) {
    return <Loading />
  } 
  return countries && countries.length ? (
    <table className="w-full">
      <thead className="border-b border-slate-300">
        <tr className="text-sm text-slate-200 text-center">
          <th className="py-3">Flag</th>
          <th className="py-3">Name</th>
          <th className="py-3">Population</th>
          <th className="py-3">Area (km²)</th>
          {/* <th className="py-3">Independent</th>
          <th className="py-3">un member</th> */}
          <th className="py-3">subregion</th>
          <th className="py-3 hidden md:table-cell">Region</th>
        </tr>
      </thead>
      <tbody>
        {countries?.map((country) => (
          <CountryItem key={country.cca2} country={country} />
        ))}
      </tbody>
    </table>
  ) : (
    <p>No countries Found</p>
  );
}
export default CountriesList;
