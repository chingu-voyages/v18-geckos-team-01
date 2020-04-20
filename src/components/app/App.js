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

  const getUserMovies = async (jwt) => {
    

    //TODO read from database
    setUserMovies( [
        {
            "id": 1,
            "title": "Hunger Games",
            "watched": false,
            "user": null,
            "created_at": "2020-04-18T12:53:58.667Z",
            "updated_at": "2020-04-18T13:29:44.837Z"
        },
        {
            "id": 2,
            "title": "another movie",
            "watched": false,
            "user": null,
            "created_at": "2020-04-18T13:29:44.831Z",
            "updated_at": "2020-04-18T13:30:56.831Z"
        },
        {
            "id": 3,
            "title": "a third movie",
            "watched": false,
            "user": {
                "id": 1,
                "username": "test",
                "email": "test@email.com",
                "provider": "local",
                "confirmed": true,
                "blocked": null,
                "role": 1,
                "movie": 3,
                "created_at": "2020-04-18T07:33:31.635Z",
                "updated_at": "2020-04-18T13:30:56.833Z"
            },
            "created_at": "2020-04-18T13:30:56.825Z",
            "updated_at": "2020-04-18T13:30:56.835Z"
        }
    ]
    )
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
          <SignInAndCreateAccount onS />
        </Modal>
      </header>
    </div>
  );
}

export default App;