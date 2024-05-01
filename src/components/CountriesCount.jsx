import { useCountries } from "../store";

const CountriesCount = () => {
  const { countriesList } = useCountries();

  return (
    <p className="text-base text-slate-200 mb-3 md:mb-0">
     {countriesList?.length > 0 && `Found  ${countriesList?.length} countries`} 
      </p>
  );
};
export default CountriesCount;
