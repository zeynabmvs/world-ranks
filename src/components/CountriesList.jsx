import { useCountries } from "../store.jsx";
import CountryItem from "./CountryItem.jsx";
import CountryItemSkeleton from "./CountryItemSkeleton.jsx";
function CountriesList() {
  const { countriesList, isPending } = useCountries();

  const countries = countriesList;
  //TODO: handle error fron react Query
  
  const skeletons = Array(4).fill(
    <CountryItemSkeleton key={Math.random() * 10} />
  ); // Add unique keys

  return (
    <table className="w-full">
      <thead className="border-b border-slate-300">
        <tr className="text-sm text-slate-200 text-center">
          <th className="py-3">Flag</th>
          <th className="py-3">Name</th>
          <th className="py-3">Population</th>
          <th className="py-3">Area (km²)</th>
          <th className="py-3 hidden md:table-cell">Region</th>
        </tr>
      </thead>
      <tbody>
        {isPending && skeletons}
        {countries?.map((country) => (
          <CountryItem
            key={country.cca2}
            country={country}
          />
        ))}
      </tbody>
    </table>
  );
}
export default CountriesList;
