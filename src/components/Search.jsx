/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import Input from "./Input";

function Search({ setQuery, query }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <form className="sm:w-1/2 mx-auto w-full" onSubmit={(e) => e.preventDefault()}>
      <Input
        placeholder="Search movies..."
        value={query}
        inputRef={inputRef}
        changeHandler={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default Search;
