import React from "react";
import { AddFavoriteMovie } from "./AddFavorite";

const MovieList = (props) => {
  const FavoriteComponent = props.favoriteComponent;

  return props.movies.map((movie, index) => (
    <div
      style={{ backgroundImage: `url(${movie.Poster})` }}
      className="movie parent"
    >
      <div className="child">
        <a href="">
          <img src={`${movie.Poster}`} width="100%" height="75%" />
          <h5>{`${movie.Title}`}</h5>
        </a>
        <div onClick={() => props.handleFavoritesClick(movie)}>
          <FavoriteComponent />
        </div>
      </div>
    </div>
  ));
};

export { MovieList };
