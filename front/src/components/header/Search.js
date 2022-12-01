import React from 'react'

const Search = () => {
  return (
    <menu className="menu search-container">
      <form>
        <input
          type="search"
          placeholder="¿Qué producto busca?..."
          name="search"
        />
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>
    </menu>
  )
}

export default Search