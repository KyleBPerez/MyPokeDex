import React, { useState } from 'react';
import { fetchSpecificPokemon } from './api/api';
import './componentsCss/SearchFeild.css';



function SearchFeild({ setPokemon }) {
  const [searchPoke, setSearchPoke] = useState('');
  return (
    <form id='search' onSubmit={async (e) => {
      e.preventDefault();
      const searchedPokemon = await fetchSpecificPokemon(searchPoke.toLowerCase());
      if (searchedPokemon.id > 0 && searchedPokemon.id < 152) {
        setPokemon(searchedPokemon)
      } else {
        setPokemon(<h1>NOPE!</h1>)
      }
      setSearchPoke('')
    }}>
      <input type='text'
        placeholder='Search Pokemon'
        value={searchPoke}
        onChange={e => setSearchPoke(e.target.value)}
      />
      <button className='search-button'>Search</button>
    </form>
  )
}

export default SearchFeild
