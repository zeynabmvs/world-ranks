import RegionFilter from "./filters/RegionFilter";
import SortBy from "./filters/SortBy";
import StatusFilter from "./filters/StatusFilter";

const Sidebar = () => {
  return (
    <div className="h-full basis-[22rem] flex flex-col gap-8">
      <SortBy />
      <RegionFilter />
      <StatusFilter />
    </div>
  );
};

export default Sidebar;
