import React from 'react'
import PokeDexHead from './PokeDexHead';
import PokeDexLower from './PokeDexLower';

const PokeDex = () => {
  return (
    <div className='pokedex-body'>
      <PokeDexHead />
      <PokeDexLower />
    </div>
  )
}

export default PokeDex
