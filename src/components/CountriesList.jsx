import { useCountries } from "../store";
import CountryItem from "./CountryItem";
import CountryItemSkeleton from "./CountryItemSkeleton";

function CountriesList() {
  const { pagedCountries, isError, isPending } = useCountries();

  const countries = pagedCountries;

  let skeletons = [];
  for (let i = 0; i < 8; i++) {
    skeletons.push(<CountryItemSkeleton key={i} />);
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  return (
    <>
      <table className="w-full mb-6">
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
            <CountryItem key={country.cca2} country={country} />
          ))}
        </tbody>
      </table>
    </>
  );
}
export default CountriesList;
