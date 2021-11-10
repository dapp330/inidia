import "./App.css";
import React, { useState, useEffect } from "react";
import { MovieList } from "./component/MovieList";
import { NavbarComponent } from "./component/NavbarContent";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=6862ea91`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="App">
      <NavbarComponent
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className="movie-container">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
