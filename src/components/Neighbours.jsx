import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useCountries } from "../store";
import Loading from "./Loading";

const Neighbours = ({ borders }) => {
  const { countries } = useCountries();

  const neighbours = useMemo(() => {
    if (!countries || !borders) return [];
    return borders?.map((border) =>
      countries?.filter((country) => country.cca3 === border)?.at(0)
    );
  }, [borders, countries]);

  if (!neighbours) {
    return <Loading />;
  }

  if (neighbours?.length < 1) {
    return <p>No Neighbours Found!</p>;
  }

  return (
    <ul className="flex gap-4 flex-wrap">
      {neighbours?.map((item, index) => {
        return (
          <li key={index} className="w-[80px]">
            <Link to={`/country/${item?.name.common}`}>
              <img src={item?.flags.svg} className="rounded-lg mb-3 " />
              <h3 className="text-sm">{item?.name.common}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default Neighbours;
