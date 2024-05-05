import CountriesCount from "./CountriesCount";
import CountriesList from "./CountriesList";
import Pagination from "./Pagination";
import Search from "./Search";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="md:w-[90%] bg-black mx-auto md:rounded-xl border border-slate-300 px-6 md:px-8 py-5 md:py-6 mb-12 -mt-12">
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-9">
        <CountriesCount />
        {/* {state.searchQuery ? 'searching for: ' + state.searchQuery : null} */}
        <Search />
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <Sidebar />
        <div className="flex flex-col w-full">
          <CountriesList />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Home;
