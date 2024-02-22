/* eslint-disable react/prop-types */
import { movies } from "../data";
import Input from "./Input";

function Navbar({ setQuery, search }) {
  return (
    <div className="bg-violet-700 text-white rounded-lg p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">🍿usePopcorn</h1>
      <form className="w-1/2 mx-auto" onSubmit={(e) => e.preventDefault()}>
        <Input
          placeholder="Search movies..."
          value={search}
          changeHandler={(e) => setQuery(e.target.value)}
        />
      </form>
      <p className="text-lg">Found {movies.length} results</p>
    </div>
  );
}

export default Navbar;
