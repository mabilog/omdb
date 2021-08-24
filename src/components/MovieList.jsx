import React from 'react'

import './movielist.scss';
const MovieList = ({ movies, query }) => {
  return (
    <div className="list__container">
      {query && movies.map((movie, index) => {
        return (
        <div className='movie__container'> 
          <img src={movie.Poster} alt={movie.Title}/>
          <div className="overlay"></div>
        </div>
        )
      })}
    </div>
  )
}

export default MovieList
