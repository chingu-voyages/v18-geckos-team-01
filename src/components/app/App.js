import React, {useState} from "react";
import "./App.css";
import Hero from "../Hero";
import MovieGrid from "../MovieGrid";
import Navbar from "../navbar/Navbar";

function App() {
  const [querySearch, setQuerySearch] = useState();
  let isLoggedIn = true;

  const searchFunction = (query) => {
    console.log("Searching for " + query);
    setQuerySearch(query);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar
          onSubmitSearch={searchFunction} 
          isLoggedIn={isLoggedIn} />
        <Hero />
        <MovieGrid query={querySearch} />
      </header>
    </div>
  );
}

export default App;