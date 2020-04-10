import React, { useState, useEffect } from "react";
import "./MovieGrid.css";

const MovieCard = ({ poster, year, title }) => {
  return (
    <div className="movie-card">
      <img
        className="poster movie-card-child"
        alt={`Movie title: ${title}`}
        src={poster}
      />
      <div className="rank movie-card-child">{year}</div>
      <div className="title movie-card-child">
        {title} ({year})
      </div>
    </div>
  );
};

const MovieGrid = () => {
  const [movielist, setMovieList] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    let url = `http://www.omdbapi.com/?s=avengers&apikey=e0cd92a3`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => setMovieList(response.Search))
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, []);

  return (
    <div className="movie-grid">
      {movielist.map((element, index) => (
        <MovieCard
          key={index}
          poster={element.Poster}
          year={element.Year}
          title={element.Title}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
