import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navegate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navegate(`/search/${keyword}`)
    } else {
      navegate('/')
    }
  } 

  return (
    <menu className="menu search-container">
      <form onSubmit={searchHandler}>
        <input
          type="search"
          placeholder="¿Qué producto busca?..."
          name="search"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>
    </menu>
  )
}

export default Search;