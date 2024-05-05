import { useMemo } from "react";
import { useCountries } from "../store";

function Pagination() {
  const { filteredCountries, handlePagination, currentPage, postsPerPage } =
    useCountries();

  const paginationNumbers = useMemo(() => {
    const length = filteredCountries?.length;
    let list = [];
    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
      list.push(i);
    }
    return list;
  }, [filteredCountries]);

  return (
    <div className="pagination flex justify-center gap-2 p-4">
      {paginationNumbers.map((pageNumber) => {
        return (
          <button
            key={pageNumber}
            onClick={() => handlePagination(pageNumber)}
            className={
              "p-2 bg-slate-300  w-10 h-10 flex items-center justify-center rounded-sm hover:bg-slate-200" +
              (currentPage === pageNumber
                ? " active text-primary"
                : " text-slate-800")
            }
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
