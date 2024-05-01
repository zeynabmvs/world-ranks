import Skeleton from "react-loading-skeleton";

const CountryItemSkeleton = () => {
  return (
    <tr className="relative ">
      <td className="py-3">
        <Skeleton width={50} height={38} />
      </td>
      <td className="py-3">
        <Skeleton width={106} />
      </td>
      <td className="py-3">
        <Skeleton width={106} />
      </td>
      <td className="py-3">
        <Skeleton width={106} />
      </td>
      <td className="py-3 hidden md:block">
        <Skeleton width={106} />
      </td>
    </tr>
  );
};
export default CountryItemSkeleton;
