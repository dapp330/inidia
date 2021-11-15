import "./App.css";
import React, { useState, useEffect } from "react";
import { MovieList } from "./component/MovieList";
import { NavbarComponent } from "./component/NavbarContent";
import { FooterComponent } from "./component/FooterComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddFavoriteMovie } from "./component/AddFavorite";
import { RemoveFavorite } from "./component/RemoveFavorite";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("star trek");
  const [favorites, setFavorites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=6862ea91`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
  };

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
  };

  return (
    <Router>
      <div>
        <NavbarComponent
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="movie-container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <MovieList
                movies={movies}
                handleFavoritesClick={addFavoriteMovie}
                favoriteComponent={AddFavoriteMovie}
              />
            }
          />
          <Route
            path="/favorite"
            element={
              <MovieList
                movies={favorites}
                handleFavoritesClick={removeFavoriteMovie}
                favoriteComponent={RemoveFavorite}
              />
            }
          />
        </Routes>
      </div>
      <FooterComponent />
    </Router>
  );
};

export default App;
