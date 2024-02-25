import { useState } from "react";
import Box from "./components/Box";
import Leftbar from "./components/Leftbar";
import Main from "./components/Main";
import MovieLists from "./components/MovieLists";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import WatchList from "./components/WatchList";
import { useMovie } from "./hooks/useMovie";
import { useLocalStorage } from "./hooks/useLocalStorage";
const KEY = "9b288b21";

function App() {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [expand, setExpand] = useState(false);
  const [showWatchList, setShowWatchList] = useState(true);
  const [query, setQuery] = useState("");
  const [movieRating, setMovieRating] = useState(0);

  const { movies, loading, error } = useMovie(query, setShowWatchList);
  const [watchListMovies, setWatchListMovies] = useLocalStorage(
    [],
    "watch-list"
  );

  const showMovieDetails = async (movie) => {
    try {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${movie.imdbID}`
      );
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      setSelectedMovie(data);
    } catch (error) {
      console.log(error);
    }
    setShowWatchList(false);
  };

  const onClick = () => {
    setExpand((prev) => !prev);
  };

  const addToList = () => {
    setShowWatchList(true);
    setMovieRating(0);
    setWatchListMovies((prev) => [...prev, { ...selectedMovie, movieRating }]);
  };

  const deleteFromWachlist = (id) => {
    setWatchListMovies((prev) => prev.filter((movie) => movie.imdbID !== id));
  };

  const handleMovieRating = (rating) => {
    setMovieRating(rating);
  };

  return (
    <div className="bg-slate-800">
      <div className="p-4 max-w-7xl min-w-[300px] mx-auto">
        <Navbar movies={movies} setQuery={setQuery} query={query} />

        <Main>
          <Leftbar>
            <Box expand={expand} onClick={onClick}>
              <MovieLists
                movies={movies}
                expand={expand}
                loading={loading}
                error={error}
                showMovieDetails={showMovieDetails}
              />
            </Box>
          </Leftbar>

          {showWatchList ? (
            <WatchList
              watchListMovies={watchListMovies}
              deleteFromWachlist={deleteFromWachlist}
            />
          ) : (
            <Rightbar
              setShowWatchList={setShowWatchList}
              selectedMovie={selectedMovie}
              addToList={addToList}
              loading={loading}
              movieRating={movieRating}
              handleMovieRating={handleMovieRating}
              watchListMovies={watchListMovies}
              expand={expand}
              onClick={onClick}
            />
          )}
        </Main>
      </div>
    </div>
  );
}

export default App;
