import { useCountries } from "../store";

const CountriesCount = () => {
  const { filteredCountries } = useCountries();

  return (
    <p className="text-base text-slate-200 mb-3 md:mb-0">
     {filteredCountries?.length > 0 && `Found  ${filteredCountries?.length} countries`} 
      </p>
  );
};
export default CountriesCount;
