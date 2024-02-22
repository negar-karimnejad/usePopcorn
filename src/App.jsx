import { useEffect, useState } from "react";
import Box from "./components/Box";
import Leftbar from "./components/Leftbar";
import Main from "./components/Main";
import MovieLists from "./components/MovieLists";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import WatchList from "./components/WatchList";

const KEY = "9b288b21";

function App() {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [expand, setExpand] = useState(false);
  const [showWatchList, setShowWatchList] = useState(true);
  const [watchListMovies, setWatchListMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [movieRating, setMovieRating] = useState(0);

  useEffect(() => {
    const fetchingMovies = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found!");

        setMovies(data.Search);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    setShowWatchList(true);
    fetchingMovies();
  }, [query]);

  const showMovieDetails = async (movie) => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${movie.imdbID}`
      );
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      setSelectedMovie(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
