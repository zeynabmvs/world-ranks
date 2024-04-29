import searchIcon from "/images/Search.svg";

const Search = () => {
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
          placeholder="Search by Name, Region, Subregion"
          className="bg-slate-300 rounded-xl p-3 pl-10 text-slate-100 placeholder-slate-200 text-sm w-full md:w-[340px] w-600"
        ></input>
      </div>
    </form>
  );
};

export default Search;
