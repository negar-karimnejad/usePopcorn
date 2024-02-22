/* eslint-disable react/prop-types */
import MovieDetails from "./MovieDetails";

function RightHeader({ selectedMovie, setShowWatchList }) {
  return (
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
        <MovieDetails>⭐{selectedMovie.imdbRating} IMDB rating</MovieDetails>
      </div>
    </div>
  );
}

export default RightHeader;
