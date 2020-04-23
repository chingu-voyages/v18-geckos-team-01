import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../navbar/Navbar';
import Modal from '../Modal/Modal';
import HomePage from '../HomePage';
import MovieDetails from '../MovieDetails';
import SignInAndCreateAccount from '../AccountModal/SignInAndCreateAccount';

function App() {
  const [querySearch, setQuerySearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [jwt, setJwt] = useState('');
  const [userMovies, setUserMovies] = useState([]);
  const [open, setOpen] = useState(false); //BurgerMenu states

  const userLoggedIn = jwt => {
    console.log('Logged in successfully: jwt: ' + jwt);
    setJwt(jwt);
    isLoggedIn(true);
  };

  const searchFunction = query => {
    console.log('Searching for ' + query);
    setQuerySearch(query);
  };

  const getUserMovies = async () => {
    let response = await fetch('http://localhost:1337/movies', {
      method: 'get',
      headers: {
        Authorization: 'Bearer ' + jwt
      }
    });
    let result = await response.json();
    console.log(result);

    setUserMovies(result);

    return result;
  };

  const onSignInSuccessHandler = jwt => {
    setJwt(jwt);
    setIsLoggedIn(true);
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar
            onSubmitSearch={searchFunction}
            onSignInLinkClicked={showModalHandler}
            onWatchListClicked={getUserMovies}
            isLoggedIn={isLoggedIn}
            open={open}
            setOpen={setOpen}
          />
          <Modal showModal={showModal} onCloseButtonClicked={closeModalHandler}>
            <SignInAndCreateAccount onSignInSuccess={onSignInSuccessHandler} />
          </Modal>
          <Route exact path="/">
            <HomePage querySearch={querySearch} />
          </Route>
          <Route exact path="/movieDetails">
            <MovieDetails />
          </Route>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
