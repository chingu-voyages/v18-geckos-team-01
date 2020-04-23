import React, { useState, useEffect } from "react";
import "./MovieGrid.css";

const MovieCard = ( props) => {
  return (
    <div className="movie-card">
      <img
        className="poster movie-card-child"
        alt={`Movie title: ${props.title}`}
        src={props.poster}
      />
      {/* <div className="rank movie-card-child">{year}</div> */}
      <div className="title movie-card-child">
        {props.title} ({props.year})
      </div>
      <span style={{color: "white"}} onClick={() => {props.onSaveMovie(props.title, props.imdbid)}}>Add to Watchlist</span>
    </div>
  );
};

const MovieGrid = (props) => {
  const [movielist, setMovieList] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (props.query !== '' && props.userMovies.length === 0) {
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
    else if (props.userMovies.length > 0) {
      setMovieList(props.userMovies);
    }
  }, [props]);

 


  return (
    <div className="movie-grid">
      {movielist.map((element, index) => (
        <MovieCard
          key={index}
          poster={element.Poster}
          year={element.Year}
          title={element.Title}
          imdbid={element.imdbID}
          onSaveMovie={props.onSaveMovie}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
