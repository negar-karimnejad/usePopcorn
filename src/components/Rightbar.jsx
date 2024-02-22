/* eslint-disable react/prop-types */
import { useState } from "react";
import Box from "./Box";
import MovieDetails from "./MovieDetails";
import Star from "./Star";

function Rightbar({
  movieRating,
  handleMovieRating,
  loading,
  selectedMovie,
  addToList,
  setShowWatchList,
}) {
  const [expand, setExpand] = useState(false);

  const clickHandler = () => {
    setExpand((prev) => !prev);
  };

  return (
    <Box expand={expand} onClick={clickHandler}>
      {loading && (
        <p className="text-white text-center text-lg mt-14 animate-pulse">
          Loading...
        </p>
      )}
      {!expand && selectedMovie && !loading && (
        <div>
          <div className="gap-5 cursor-pointer transition-all bg-slate-600 flex items-center text-white">
            <img
              src={selectedMovie.Poster}
              alt=""
              className="w-fit h-56 object-contain"
            />
            <div
              onClick={() => setShowWatchList(true)}
              className="absolute bg-white w-10 h-10 rounded-full text-black text-3xl pb-1.5 flex items-center justify-center left-2 top-2"
            >
              &#x2190;
            </div>
            <div className="flex flex-col gap-4">
              <p className="mb-1 text-2xl font-bold">{selectedMovie.Title}</p>
              <MovieDetails>
                {selectedMovie.Year} • {selectedMovie.Runtime}
              </MovieDetails>
              <MovieDetails>{selectedMovie.Genre}</MovieDetails>
              <MovieDetails>
                ⭐{selectedMovie.imdbRating} IMDB rating
              </MovieDetails>
            </div>
          </div>

          <div className="bg-slate-600 rounded-lg p-3 mt-10 mx-auto w-5/6">
            <Star
              maxRating={10}
              size={20}
              color={"yellow"}
              messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
              defaultRating={3}
              handleMovieRating={handleMovieRating}
            />

            {movieRating > 0 && (
              <button
                onClick={addToList}
                className="text-white font-bold bg-violet-600 w-full rounded-full py-2 mt-3"
              >
                + Add to list
              </button>
            )}
          </div>
          <div className="my-5 mx-auto w-5/6 flex flex-col gap-4">
            <MovieDetails className="italic">{selectedMovie.Plot}</MovieDetails>
            <MovieDetails>Starring {selectedMovie.Actors}</MovieDetails>
            <MovieDetails>Directed by {selectedMovie.Director}</MovieDetails>
          </div>
        </div>
      )}
    </Box>
  );
}

export default Rightbar;
