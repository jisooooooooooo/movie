import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MovieCard,
  Content,
  CardImage,
  Overlay,
  Description,
} from "./Movie.style";

const Movie = ({ movie }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <Link to={`/movie/${movie.id}`} state={movie}>

      <MovieCard className="movie-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Overlay className="overlay">
          <CardImage
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          {showDescription && (
            <Description className="description">
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </Description>
          )}
        </Overlay>
        <Content className="content">
          <h2>{movie.title}</h2>
          <p>{movie.vote_average}</p>
        </Content>
      </MovieCard>
    </Link>
  );
};

export default Movie;
