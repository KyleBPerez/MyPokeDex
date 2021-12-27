import React from 'react';
import './componentsCss/Buttons.css'

function Buttons({ nextPokemon, lastPokemon, pokemon }) {
  return (
    <div className='buttons'>
      <button className='last-poke' onClick={() => lastPokemon(pokemon.id)}>Previous Poke</button>
      <button className='next-poke' onClick={() => nextPokemon(pokemon.id)}>Next Poke</button>
    </div>
  )
};

export default Buttons;
