import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import MovieDetail from "./pages/MovieDetail";
import Header from "../src/components/Header";
import Home from "../src/pages/Home";
import { movies } from "./movieDummy";
import Celebrity from "../src/pages/Celebrity";
import Tv from "../src/pages/TV";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesList />} /> 
          <Route
            path="/movie/:title" 
            element={<MovieDetail />} 
          />
          <Route path="/tv" element={<Tv />} />

          <Route path="/celebrity" element={<Celebrity />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function MoviesList() {
  return (
    <div className="movie-list">
      {movies.results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default App;