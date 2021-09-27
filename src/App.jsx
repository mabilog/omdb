import React, { useState, useEffect } from 'react';
import './App.scss';

import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading'
import SearchBox from './components/SearchBox';
import AddFavorite from './components/AddFavorite';
import RemoveFavorites from './components/RemoveFavorites';

require('dotenv').config();

function App() {
  const API_KEY = process.env.API_KEY; 
  // console.log(process.env)
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

  const getMovieRequest = (query) => {
    const url = `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;
    fetch(url)
    .then(res => res.json())
    .then(res => {
      if(res.Search) setMovies(res.Search)
      console.log(res)
    })
    .catch(err => console.log('Something went wrong! ' + err))
  }

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  }
  
  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(favorite => favorite.imdbID !== movie.imdbID);
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  }

  useEffect(() => {
    getMovieRequest(query);
  }, [query])

  useEffect(() => {
    if(localStorage.getItem('react-movie-app-favorites')) setFavorites(JSON.parse(localStorage.getItem('react-movie-app-favorites')))
    // const movieFavorites = JSON.parse(localStorage.getItem('react-movie-app-favorites'));
    else setFavorites([])
  },[])

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favorites', JSON.stringify(items))
  }

  return (
    <div className="App">
      <div className="heading">
        <MovieListHeading heading="Movies"/>
        <SearchBox query={query} setQuery={setQuery}/>
      </div>
      <div className="row">
        <MovieList 
          movies={movies} 
          handleFavoritesClick={addFavoriteMovie} 
          favoriteComponent={AddFavorite}
          /> 
      </div>
      <div className="favorite__heading">
        <MovieListHeading heading="Favorites"/>
      </div>
      <div className="row">
        <MovieList 
          movies={favorites} 
          handleFavoritesClick={removeFavoriteMovie} 
          favoriteComponent={RemoveFavorites}
          /> 
      </div>
    </div>
  );
}

export default App;
