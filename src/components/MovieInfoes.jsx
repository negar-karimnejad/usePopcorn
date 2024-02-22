import MovieDetails from "./MovieDetails";
import Star from "./Star";

function MovieInfoes(
  movieRating,
//   handleMovieRating,
  selectedMovie,
  addToList,
  watchListMovies
) {
  const existInWatchlist = watchListMovies?.find(
    (movie) => movie.imdbID === selectedMovie.imdbID
  );
  console.log(selectedMovie);
  return (
    <div>
      <div className="bg-slate-600 rounded-lg py-3 px-1 mt-10 mx-auto w-5/6">
        {existInWatchlist ? (
          <p className="text-sm text-center p-1 text-slate-100 font-medium">
            You rated this movie {existInWatchlist.movieRating} ⭐
          </p>
        ) : (
          <>
            <Star
              maxRating={10}
              size={20}
              color={"yellow"}
              messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
              defaultRating={0}
            //   handleMovieRating={handleMovieRating}
            />
            {movieRating > 0 && (
              <button
                onClick={addToList}
                className="text-white font-bold bg-violet-600 w-full rounded-full py-2 mt-3"
              >
                + Add to list
              </button>
            )}
          </>
        )}
      </div>
      <div className="my-5 mx-auto w-5/6 flex flex-col gap-4">
        <MovieDetails className="italic">{selectedMovie.Plot}</MovieDetails>
        <MovieDetails>Starring {selectedMovie.Actors}</MovieDetails>
        <MovieDetails>Directed by {selectedMovie.Director}</MovieDetails>
      </div>
    </div>
  );
}

export default MovieInfoes;
