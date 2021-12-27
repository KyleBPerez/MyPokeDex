import React, { useState, useEffect } from 'react';
import Display from './Display';
import Buttons from './Buttons';
import { fetchFirstPokemon, fetchNextOrPreviousPokemon } from './api/api';
import SearchFeild from './SearchFeild';


function PokeDexLower() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    Promise.all([fetchFirstPokemon()])
      .then(([firstPoke]) => setPokemon(firstPoke))
      .catch(error => console.error(error, `useEffect didn't work`))
  }, [])

  async function nextPokemon(currentId) {
    const nextId = currentId ? currentId + 1 : 1;
    const newPokemon = await fetchNextOrPreviousPokemon(nextId === 152 ? 1 : nextId);
    setPokemon(newPokemon)
  }
  async function lastPokemon(currentId) {
    const nextId = currentId ? currentId - 1 : 151;
    const newPokemon = await fetchNextOrPreviousPokemon(nextId === 0 ? 151 : nextId);
    setPokemon(newPokemon)
  }

  return (
    <div className="pokedex-lower">
      <div className="screen">
        <Display {...pokemon} />
      </div>
      <Buttons lastPokemon={lastPokemon} nextPokemon={nextPokemon} pokemon={pokemon} />
      <SearchFeild setPokemon={setPokemon} />
    </div>
  )
}

export default PokeDexLower
