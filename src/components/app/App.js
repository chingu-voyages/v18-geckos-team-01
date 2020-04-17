import React, {useState} from "react";
import "./App.css";
import Hero from "../Hero";
import MovieGrid from "../MovieGrid";
import Search from '../Search';
import Navbar from "../navbar/Navbar";
import SignIn from "../SignIn";

function App() {
  const [querySearch, setQuerySearch] = useState();
  const [showSignInModal, setShowSignInModal] = useState(false);

  const searchFunction = (query) => {
    console.log("Searching for " + query);
    setQuerySearch(query);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar onSubmitSearch={searchFunction} />
        <Hero />
        <MovieGrid query={querySearch} />
        <SignIn showSignInModal={showSignInModal} />
      </header>
    </div>
  );
}

export default App;