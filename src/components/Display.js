/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from 'react';
import './componentsCss/Display.css'
import './componentsCss/PokemonType.css'

const capitalizeFirstLetter = word => word.replace(/^\w/g, capLetter => capLetter.toUpperCase());

function Display({ name, id, sprites, types, stats }) {

  return (
    !id ?
      <div className="display">
        <h1>Only have Data for the first 151 pokemeon!!</h1>
      </div>
      :
      <div className='display'>
        <div className="sprite">
          <img src={sprites.front_default} alt={`picture of ${name}`} /></div>
        <div className='info'>
          <span>Id: <span>{id}</span></span>
          <span>Name: <span>{capitalizeFirstLetter(name)}</span></span>
          {
            stats.map((value, index) => {
              return (
                <Fragment key={index}>
                  <span>{capitalizeFirstLetter(value.stat.name)}: <span>{value.base_stat}</span></span>
                </Fragment>
              )
            })
          }
          {
            types.map(typeInfo => {
              return (
                <span key={`${name}-${typeInfo.slot}`}>Type: <span className={typeInfo.type.name}>{capitalizeFirstLetter(typeInfo.type.name)}</span></span>
              )
            })
          }
        </div>

      </div>
  )
}

export default Display
