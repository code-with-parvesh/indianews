import React, { useEffect } from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();

  useEffect(() => {
    document.title = query ? `Search results for ${query}` : 'Tech News';
  }, [query]);

  return (
    <>
      <h1>   </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="search here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default Search;
