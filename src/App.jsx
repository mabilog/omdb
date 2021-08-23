import React, { useState, useEffect } from 'react';
import './App.scss';

import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading'
function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const getMovieRequest = () => {
    const url = `http://www.omdbapi.com/?s=${query}&apikey=a83850fc`;
    
    fetch(url)
    .then(res => res.json())
    .then(res => setMovies(res.Search))
    .catch(err => console.log('Something went wrong! ' + err))
  }

  useEffect(() => {
    getMovieRequest();
  }, [])

  return (
    <div className="App">
      <div className="heading">
        <MovieListHeading/>
      </div>
      <div className="row">
        <MovieList movies={movies} query={query}/> 
      </div>
    </div>
  );
}

export default App;
