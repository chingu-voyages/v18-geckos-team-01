import React, { useState } from 'react';
import './App.css';
import Hero from '../Hero';
import MovieGrid from '../MovieGrid';
import Search from '../Search';
import Navbar from '../navbar/Navbar';
import SignIn from '../SignIn';

function App() {
  const [querySearch, setQuerySearch] = useState();
  const [showSignInModal, setShowSignInModal] = useState(false);

  const searchFunction = query => {
    console.log('Searching for ' + query);
    setQuerySearch(query);
  };

  const showSignInModalHandler = () => {
    setShowSignInModal(true);
  };

  const closeSignInModalHandler = () => {
    setShowSignInModal(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar
          onSubmitSearch={searchFunction}
          onSignInLinkClicked={showSignInModalHandler}
        />
        <Hero />
        <MovieGrid query={querySearch} />
        <SignIn showSignInModal={showSignInModal} onSignInCloseButtonClicked={closeSignInModalHandler} />
      </header>
    </div>
  );
}

export default App;
