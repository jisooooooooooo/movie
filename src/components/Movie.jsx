// Movie.jsx 파일
import React from "react";

function Movie({ movie }) {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <div className="content">
      <h2>{movie.title}</h2>
      <p>{movie.vote_average}</p>
      </div>
    </div>
  );
}

export default Movie;
