import { SORTOPTIONS } from "../../constants/sortOptions";
import { useCountries } from "../../store";

const SortBy = () => {
  const { dispatch } = useCountries();
  const handleSortChange = (e) => {
    dispatch({ type: "changeSort", payload: e.target.value });
  };

  return (
    <div>
      <label htmlFor="sortFilter" className="text-sm text-slate-200 block mb-2">
        Sort by
      </label>
      <select
        id="sortFilter"
        onChange={handleSortChange}
        className="w-full bg-black border border-slate-300 p-3 rounded-xl text-slate-100 text-base appearance-none	bg-[url('/images/Expand_down.svg')] bg-no-repeat bg-[right_0.7rem_top_50%]"
      >
        {SORTOPTIONS.map((option) => (
          <option key={option.key} value={option.key}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortBy;
