import React, { useState } from 'react';
import './App.css';
import Hero from '../Hero';
import MovieGrid from '../MovieGrid';
import Navbar from '../navbar/Navbar';
import Modal from '../Modal/Modal';
import SignInAndCreateAccount from '../AccountModal/SignInAndCreateAccount';

function App() {
  const [querySearch, setQuerySearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [jwt, setJwt] = useState("");
  const [username, setUsername] = useState("");
  const [userMovies, setUserMovies] = useState([]);
  const [open, setOpen] = useState(false); //BurgerMenu states

  const userLoggedIn = (jwt, user) => {
    console.log('Logged in successfully: jwt: ' + jwt);
    setJwt(jwt);
    setUsername(user);
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

  const onSignInSuccessHandler = (jwt, user) => {
    closeModalHandler();
    setJwt(jwt);
    setUsername(user);
    setIsLoggedIn(true);
  }
  const onCreateAccountSuccessHandler = () => {
    closeModalHandler();
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
          user={username}
          open={open}
          setOpen={setOpen}
        />
        <Hero />
        <MovieGrid query={querySearch} userMovies={userMovies} />
        <Modal showModal={showModal} onCloseButtonClicked={closeModalHandler}>
          <SignInAndCreateAccount onSignInSuccess={onSignInSuccessHandler} onCreateAccountSuccess={onCreateAccountSuccessHandler} />
        </Modal>
      </header>
    </div>
  );
}

export default App;