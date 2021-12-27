import React from 'react';
import './componentsCss/Buttons.css'

function Buttons({ nextPokemon, lastPokemon, pokemon }) {
  return (
    <div className='buttons-space'>
      <div className="button-shoulder-left">
        <div className='button-depth-left'>
          <button className='last-poke' onClick={() => lastPokemon(pokemon.id)}>Previous Pokemon</button>
        </div>
      </div>
      <div className="button-shoulder-right">
        <div className='button-depth-right'>
          <button className='next-poke' onClick={() => nextPokemon(pokemon.id)}>Next <br /> Pokemon</button>
        </div>
      </div>
    </div>
  )
};

export default Buttons;
