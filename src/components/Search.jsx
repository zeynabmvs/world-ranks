import searchIcon from "/images/Search.svg";
import { useCountries } from "../store.jsx";

const Search = () => {
  const { state, setSearch } = useCountries();
  const searchKeyword = state.searchKeyword

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="search-container relative">
        <span type="submit" className="absolute left-3 top-[9px]">
          <img src={searchIcon} alt="" />
        </span>
        <input
          type="text"
          placeholder="Search by Name"
          className="bg-slate-300 rounded-xl p-3 pl-10 text-slate-100 placeholder-slate-200 text-sm w-full md:w-[340px] w-600"
          value={searchKeyword}
          onChange= {(e)=>setSearch(e.target.value)}
        ></input>
      </div>
    </form>
  );
};

export default Search;
