import { useCountries } from "../../store";

function StatusFilter() {
  const { state, dispatch } = useCountries();

  return (
    <div>
      <span className="text-sm text-slate-200 block mb-2">Status</span>
      <div className="flex gap-3 flex-col">
        <label className="input-wrapper cursor-pointer relative pl-9">
          Independant
          <input
            type="checkbox"
            checked={state.independent}
            onChange={(e) =>
              dispatch({ type: "changeDependant", payload: e.target.checked })
            }
            className="absolute opacity-0 left-0 top-0 size-0"
          />
          <span className="checkmark absolute top-0 left-0 bg-black rounded-sm border-2 border-slate-200 size-6 after:hidden after:absolute after:top-0 after:left-0 after:content-[url('/images/Done_round.svg')]"></span>
        </label>

        <label className="input-wrapper cursor-pointer relative pl-9">
          Member of the United Nations
          <input
            type="checkbox"
            checked={state.unMember}
            onChange={(e) =>
              dispatch({ type: "changeUnMember", payload: e.target.checked })
            }
            className="absolute opacity-0 left-0 top-0 size-0"
          />
          <span className="checkmark absolute top-0 left-0 bg-black rounded-sm border-2 border-slate-200 size-6 after:hidden after:absolute after:top-0 after:left-0 after:content-[url('/images/Done_round.svg')]"></span>
        </label>
      </div>
    </div>
  );
}

export default StatusFilter;
