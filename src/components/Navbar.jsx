/* eslint-disable react/prop-types */
import Search from "./Search";

function Navbar({ movies, setQuery, query }) {
  

  return (
    <div className="bg-violet-700 text-white rounded-lg p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">🍿usePopcorn</h1>
      <Search setQuery={setQuery} query={query} />
      <p className="text-lg">Found {movies?.length} results</p>
    </div>
  );
}

export default Navbar;
