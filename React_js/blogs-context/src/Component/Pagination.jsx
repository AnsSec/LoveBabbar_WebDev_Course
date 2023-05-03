import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="w-full border py-2 fixed bg-white bottom-0 flex justify-center items-start">
      <div className="flex justify-between items-center w-11/12 max-w-2xl">
        <div className="flex gap-x-2">
          {page > 1 && (
            <button
              className="rounded-md border px-4 py-1"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="rounded-md border px-4 py-1"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>
        <p className="font-bold text-sm">
          page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
