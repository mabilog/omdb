import React from 'react'


import './movielist.scss';
const MovieList = ({ movies, handleFavoritesClick, favoriteComponent }) => {
  const AddFavorites = favoriteComponent;
  return (
    <div className="list__container">
      {movies.map((movie, index) => {
        return (
        <div className='movie__container' key={index}> 
          <img src={movie.Poster} alt={movie.Title}/>
          <div 
            className="overlay" 
            onClick={() => handleFavoritesClick(movie)}><AddFavorites/></div>
        </div>
        )
      })}
    </div>
  )
}

export default MovieList
