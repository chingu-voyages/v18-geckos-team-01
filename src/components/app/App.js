import React, {useState} from "react";
import "./App.css";

import Hero from "../Hero";
import MovieGrid from "../MovieGrid";
import Search from '../Search';

function App() {
  const [querySearch, setQuerySearch] = useState();

  const searchFunction = (query) => {
    console.log("Searching for " + query);
    setQuerySearch(query);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Search onSubmitSearch={searchFunction}/>
        <Hero />
        <MovieGrid query={querySearch} />
      </header>
    </div>
  );
}

export default App;
