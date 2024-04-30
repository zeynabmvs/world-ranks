import { useState } from "react";
import { Link } from "react-router-dom";
import { neighboursData } from "../data/neighbours.js";

const Neighbours = ({ code }) => {
  const [neighbours, setNeighbours] = useState(neighboursData);
  console.log(neighbours);

  return neighbours.length ? (
    <ul className="flex gap-4 flex-wrap">
      {neighbours.map((item, index) => {
        return (
          <li key={index} className="w-[80px]">
            <Link
              to={`/country/${item?.name.common}`}
            >
              <img src={item?.flags.svg} className="rounded-lg mb-3 " />
              <h3 className="text-sm">{item?.name.common}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
  ) : (
    <div>Has no neighbours</div>
  );
};
export default Neighbours;
