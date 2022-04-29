import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./movieCard";

//API ='a5269d10'

const API_URL = "http://www.omdbapi.com/?apikey=a5269d10";

const movie1 = {
  Title: "",
  Year: "1990",
  imdbID: "tt0100669",
  Type: "movie",
  Poster: "N/A",
};

const App = () => {
  const [movie, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const date = await response.json();
    setMovies(date.Search);
  };

  useEffect(() => {
    searchMovie("Random");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovie(searchTerm)}
        />
      </div>

      {movie?.length > 0 ? (
        <div className="container">
          {movie.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>{" "}
        </div>
      )}
    </div>
  );
};

export default App;
