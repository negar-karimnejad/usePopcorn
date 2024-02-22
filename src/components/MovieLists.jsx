/* eslint-disable react/prop-types */

function MovieLists({ error, loading, expand, showMovieDetails, movies }) {
  return (
    <div className="flex flex-col gap-2">
      {loading && (
        <p className="text-white text-center text-lg mt-14 animate-pulse">
          Loading...
        </p>
      )}
      {error && (
        <p className="text-white text-center text-lg mt-14">⛔{error}</p>
      )}
      {!expand &&
        !loading &&
        !error &&
        movies?.map((movie) => (
          <div
            key={movie.imdbID}
            className="border-b border-slate-600 gap-5 p-5 cursor-pointer transition-all hover:bg-slate-600 flex items-center text-white"
            onClick={() => showMovieDetails(movie)}
          >
            <img
              src={movie.Poster}
              alt=""
              className="w-fit h-16 object-contain"
            />
            <div>
              <p className="mb-1 font-bold">{movie.Title}</p>
              <p>📅 {movie.Year}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default MovieLists;
