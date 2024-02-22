/* eslint-disable react/prop-types */
import Box from "./Box";
import SummaryBox from "./SummaryBox";

function WatchList({ watchListMovies, deleteFromWachlist }) {
  const totalRating = watchListMovies.reduce((total, item) => {
    total += Number(item.imdbRating);
    return total;
  }, 0);

  const totalDuration = watchListMovies.reduce((total, item) => {
    total += Number(item.Runtime?.split(" ")[0]);
    return total;
  }, 0);

  const totalUserRating = watchListMovies.reduce((total, item) => {
    total += Number(item.movieRating / watchListMovies.length);
    return total;
  }, 0);

  return (
    <Box>
      <div className="py-5 shadow-xl shadow-gray-800 rounded-xl pb-4">
        <h3 className="font-bold text-white px-5 mb-2">MOVIES YOU WATCHED</h3>
        <div className="px-4 flex justify-between items-center">
          <SummaryBox>
            <span>#️⃣</span>
            {watchListMovies?.length} movies
          </SummaryBox>
          <SummaryBox>
            <p>⭐{totalRating?.toFixed(2)}</p>
          </SummaryBox>
          <SummaryBox>
            <p>🌟{totalUserRating?.toFixed(2)}</p>
          </SummaryBox>
          <SummaryBox>
            <span>⏳</span>
            {totalDuration} min
          </SummaryBox>
        </div>
      </div>
      <div className="shadow-gray-800 rounded-xl pb-4">
        {watchListMovies?.map((movie) => (
          <div key={movie.imdbRating} className="relative">
            <div className="border-b border-slate-600 gap-5 p-5 transition-all flex items-center text-white">
              <img
                src={movie.Poster}
                alt=""
                className="w-fit h-16 object-contain"
              />
              <div className="w-8/12">
                <p className="mb-3 font-bold text-lg">{movie.Title}</p>
                <button
                  onClick={() => deleteFromWachlist(movie.imdbID)}
                  className="absolute top-8 right-4 bg-red-500 flex items-center justify-center rounded-full w-5 h-5 pb-0.5"
                >
                  &times;
                </button>
                <div className="flex justify-between items-center w-full">
                  <SummaryBox>
                    <p>⭐{movie.imdbRating}</p>
                  </SummaryBox>
                  <SummaryBox>
                    <p>🌟{movie.movieRating}</p>
                  </SummaryBox>
                  <SummaryBox>
                    <p>⏳{movie.Runtime}</p>
                  </SummaryBox>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </Box>
  );
}

export default WatchList;
