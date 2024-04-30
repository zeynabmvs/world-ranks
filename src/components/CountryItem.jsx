import {Link } from "react-router-dom"

const CountryItem = ({country}) => {
  return (
    <tr className="text-base text-slate-100 text-center relative hover:bg-slate-300">
    <td className="py-3"> <img
          src={country.flags.svg}
          className="w-[50px] h-[38px] mx-auto rounded-lg"></img>
      <Link to={`/country/${country.name.common}`}
        className="absolute inset-0">
        <span className="sr-only">
          View more information about {country.name.common}
        </span>
      </Link>
    </td>

    <td className="py-3">
      {country.name.common}
    </td>
    <td className="py-3">
      {country.population.toLocaleString()}
    </td>
    <td className="py-3">
      {country.area.toLocaleString()}
    </td>
    <td className="py-3 hidden md:block">
      {country.region}
    </td>
  </tr>
  )
}
export default CountryItem