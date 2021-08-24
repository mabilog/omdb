import React from 'react'

const SearchBox = ({ query, setQuery}) => {
  return (
    <div className="col">
      <input 
        type="text" 
        placeholder="Search" 
        className="search__box" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
        />
    </div>
  )
}

export default SearchBox
