import React from "react";
import "./App.css";
import MovieGrid from "../MovieGrid";

import Search from '../Search';

function App() {

  const searchFunction = (query) => {
    console.log("Searching for " + query);

    fetch('http://www.omdbapi.com/?s='+query+'&apikey=2e759236')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <Search onSubmitSearch={searchFunction}/>
        <h1>v18 Geckos - Team 1!</h1>
      </header>
    </div>
  );
}

export default App;
