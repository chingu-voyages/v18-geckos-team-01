import React, {useState} from "react";
import "./App.css";
import Hero from "../Hero";
import MovieGrid from "../MovieGrid";
import Search from '../Search';
import Navbar from "../navbar/Navbar";

function App() {
  const [querySearch, setQuerySearch] = useState();

  const searchFunction = (query) => {
    console.log("Searching for " + query);
    setQuerySearch(query);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <MovieGrid query={querySearch} />
      </header>
    </div>
  );
}

export default App;