import React, { useState, useEffect } from 'react';
import './App.scss';

import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading'
import SearchBox from './components/SearchBox';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY; //REACT_APP_API_KEY=a83850fc
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

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

  useEffect(() => {
    getMovieRequest(query);
  }, [query])

  return (
    <div className="App">
      <div className="heading">
        <MovieListHeading heading="Movies"/>
        <SearchBox query={query} setQuery={setQuery}/>
      </div>
      <div className="row">
        <MovieList movies={movies} query={query}/> 
      </div>
    </div>
  );
}

export default App;
