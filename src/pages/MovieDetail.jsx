import React from "react";
import { useLocation, useParams } from 'react-router-dom';
import './MovieDetail.css'; // 스타일 파일을 불러옵니다.

export default function MovieDetail() {
  const { title } = useParams();

  const location = useLocation();
  const movie = location.state;

  return (
    <div className="movie-detail-container">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={title}
        className="movie-poster"
      />
      <div className="movie-title">{movie.title}</div>
    </div>
  );
}
