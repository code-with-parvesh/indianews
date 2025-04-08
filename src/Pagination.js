import React from "react";
import { useGlobalContext } from "./context";

const Pagination = () => {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();

  return (
    <>
      <div className="pagination-btn">
        <button onClick={() => getPrevPage()} aria-label="Previous page">
          PREV
        </button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button onClick={() => getNextPage()} aria-label="Next page">
          NEXT
        </button>
      </div>
    </>
  );
};

export default Pagination;
