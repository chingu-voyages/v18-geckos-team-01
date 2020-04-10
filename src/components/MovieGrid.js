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
      {/* <div className="rank movie-card-child">{year}</div> */}
      <div className="title movie-card-child">
        {title} ({year})
      </div>
    </div>
  );
};

const MovieGrid = (props) => {
  const [movielist, setMovieList] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (props.query !== '') {
      fetch(
        "https://movie-database-imdb-alternative.p.rapidapi.com/?&r=json&s="+props.query,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
            "x-rapidapi-key":
              "3e7a2c9dfdmsh9b187f8271e7cecp1c2430jsn7fda3a194e2b",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => setMovieList(response.Search))
        .catch((error) => {
          console.error(error);
          setError(error);
        });

    }
  }, [props]);

  console.log(movielist);

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
