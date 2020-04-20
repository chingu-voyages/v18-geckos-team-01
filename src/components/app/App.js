import React, { useState } from 'react';
import './App.css';
import Hero from '../Hero';
import MovieGrid from '../MovieGrid';
import Search from '../Search';
import Navbar from '../navbar/Navbar';
import Modal from '../Modal/Modal';
import SignInAndCreateAccount from '../AccountModal/SignInAndCreateAccount';

function App() {
  const [querySearch, setQuerySearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [jwt, setJwt] = useState("");
  const [userMovies, setUserMovies] = useState([]);

  const userLoggedIn = (jwt) => {
    console.log('Logged in successfully: jwt: ' + jwt);
    setJwt(jwt);
    isLoggedIn(true);
  }

  const searchFunction = query => {
    console.log('Searching for ' + query);
    setQuerySearch(query);
  };

  const getUserMovies = async () => {
    let response = await fetch('http://localhost:1337/movies', {
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + jwt
      }
    });
    let result = await response.json();
    console.log(result);

    setUserMovies(result);

    return result;
  }

  const onSignInSuccessHandler = (jwt) => {
    setJwt(jwt);
    setIsLoggedIn(true);
  }

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
          onWatchListClicked={getUserMovies}
          isLoggedIn={isLoggedIn}
        />
        <Hero />
        <MovieGrid query={querySearch} />
        <Modal showModal={showModal} onCloseButtonClicked={closeModalHandler}>
          <SignInAndCreateAccount onSignInSuccess={onSignInSuccessHandler} />
        </Modal>
      </header>
    </div>
  );
}

export default App;