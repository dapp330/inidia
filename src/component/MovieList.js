import React from "react";

const MovieList = (props) => {
  return props.movies.map((movie, index) => (
    <div
      style={{ backgroundImage: `url(${movie.Poster})` }}
      className="movie parent"
    >
      <div className="child">
        <h1>Haloo</h1>
      </div>
    </div>
  ));
};

export { MovieList };
