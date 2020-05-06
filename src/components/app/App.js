import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../navbar/Navbar';
import Modal from '../Modal/Modal';
import HomePage from '../HomePage';
import MovieDetails from '../MovieDetails';
import SignInAndCreateAccount from '../AccountModal/SignInAndCreateAccount';
import Watchlist from '../../Watchlist/Watchlist';

function App() {
  const [querySearch, setQuerySearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [jwt, setJwt] = useState("");
  const [username, setUsername] = useState(null);
  const [userMovies, setUserMovies] = useState([]);
  const [open, setOpen] = useState(false); //BurgerMenu states

  const userLoggedIn = (jwt, user) => {
    console.log('Logged in successfully: jwt: ' + jwt);
    setJwt(jwt);
    setUsername(user);
    isLoggedIn(true);
  };

  const searchFunction = query => {
    console.log('Searching for ' + query);
    setQuerySearch(query);
    setUserMovies([]);
  };

  const saveMovie = async (movieTitle, imdbid) => {
    if (username !== null) {
      let response = await fetch('http://localhost:1337/movies', {
        method: 'post',
        headers: {
          'Authorization': 'Bearer ' + jwt
        },
        body: JSON.stringify({
          title: movieTitle,
          imdbid: imdbid,
          user: username.id
        })
      });
      let result = await response.json();
      console.log(result);

      setUserMovies(result);

      return result;
    }
  }

  const getUserMovies = async () => {
    if (username !== null) {
      let response = await fetch('http://localhost:1337/movies?user='+username.id, {
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + jwt
        }
      });
      let result = await response.json();
      console.log("Retrieving movies for " + username.username + ":" + JSON.stringify(result));

      let m = result;
      let mm = [];
      let x;
      for ( x in m) {
        let response = await fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?&r=json&i="+m[x].imdbid,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
            "x-rapidapi-key":
              "3e7a2c9dfdmsh9b187f8271e7cecp1c2430jsn7fda3a194e2b",
          },
        });
        let result = await response.json();
        mm.push(result);
      }
      setUserMovies(mm);

      return result;
    }
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
          user={username}
          open={open}
          setOpen={setOpen}
        />
        <Modal showModal={showModal} onCloseButtonClicked={closeModalHandler}>
          <SignInAndCreateAccount onSignInSuccess={onSignInSuccessHandler} onCreateAccountSuccess={onCreateAccountSuccessHandler} />
        </Modal>
          <Route exact path="/">
            <HomePage querySearch={querySearch} userMovies={userMovies} onSaveMovie={saveMovie} />
          </Route>
          <Route exact path="/movieDetails/:id" children={<MovieDetails />} />
          <Route exact path="/watchlist/:id" children={<Watchlist />} />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
