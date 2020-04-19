import React, { useState } from 'react';
import './App.css';
import Hero from '../Hero';
import MovieGrid from '../MovieGrid';
import Search from '../Search';
import Navbar from '../navbar/Navbar';
import Modal from '../Modal/Modal';
import SignInAndCreateAccount from '../AccountModal/SignInAndCreateAccount';

function App() {
  const [querySearch, setQuerySearch] = useState();
  const [showModal, setShowModal, isLoggedIn] = useState(false);

  const userLoggedIn = () => {
    console.log('Logged in successfully');
    isLoggedIn(true);
  }

  const searchFunction = query => {
    console.log('Searching for ' + query);
    setQuerySearch(query);
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar
          onSubmitSearch={searchFunction}
          onSignInLinkClicked={showModalHandler}
          isLoggedIn={isLoggedIn}
        />
        <Hero />
        <MovieGrid query={querySearch} />
        <Modal showModal={showModal} onCloseButtonClicked={closeModalHandler}>
          <SignInAndCreateAccount />
        </Modal>
      </header>
    </div>
  );
}

export default App;