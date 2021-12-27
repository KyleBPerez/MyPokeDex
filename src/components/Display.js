/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from 'react';
import './componentsCss/PokemonType.css'
import './componentsCss/Display.css'

const capitalizeFirstLetter = word => word.replace(/^\w/g, capLetter => capLetter.toUpperCase());

function Display({ name, id, sprites, types, stats }) {
  if (!id) {
    return (
      <div className="display-no-pokemon">
        <h4>This pokemon doesn't exist!</h4>
        <h4>Please try searching again</h4>
      </div>
    )
  } else if (id < 1 || id > 151) {
    return (
      <div className="display-no-data">
        <div className='text'>
          <h4 className="no-data">Only contains data</h4>
          <h4 className="no-data">for the first</h4>
          <h4 className="no-data">151 Pokemon</h4>
        </div>
        <div className="no-data-img">
          <img className='shocked-CHU' src="https://image.emojipng.com/561/1389561.png" alt="shocked pikachu" />
          <img className='shocked-CHU' src="https://image.emojipng.com/561/1389561.png" alt="shocked pikachu" />
          <img className='shocked-CHU' src="https://image.emojipng.com/561/1389561.png" alt="shocked pikachu" />
        </div>
      </div>
    )
  } else {
    return (
      <div className='display'>
        <div className="specs">
          <div className="sprite">
            <img src={sprites.front_default} alt={`picture of ${name}`} />
          </div>
          <div className="stats">
            {
              stats.map((value, index) => {
                return (
                  <Fragment key={index}>
                    <h5>{capitalizeFirstLetter(value.stat.name)}: <span>{value.base_stat}</span></h5>
                  </Fragment>
                )
              })
            }
            {
              types.map(typeInfo => {
                return (
                  <Fragment>
                    <h5
                      key={`${name}-${typeInfo.slot}`}
                    >
                      Type: <span className={typeInfo.type.name}>{capitalizeFirstLetter(typeInfo.type.name)}</span>
                    </h5>
                  </Fragment>
                )
              })
            }
          </div>
        </div>
        <div className='info'>
          <h5>Id: <span>{id}</span></h5>
          <h5>Name: </h5>
          <h5 className={`${types[0].type.name} name-text`}>{capitalizeFirstLetter(name)}</h5>
        </div>
      </div>
    )
  }
}

export default Display
