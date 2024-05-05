import Skeleton from "react-loading-skeleton";

const CountryItemSkeleton = () => {
  return (
    <tr className="relative ">
      <td className="py-3 text-center">
        <Skeleton width={50} height={38} className="rounded-lg"/>
      </td>
      <td className="py-3 text-center">
        <Skeleton width={106} />
      </td>
      <td className="py-3 text-center">
        <Skeleton width={70} />
      </td>
      <td className="py-3 text-center">
        <Skeleton width={70} />
      </td>
      <td className="py-3 text-center hidden md:table-cell">
        <Skeleton width={70} />
      </td>
    </tr>
  );
};
export default CountryItemSkeleton;
