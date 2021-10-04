import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

export function CardLayout({pokemon}) {
    return (  
      <Link className='card' to={{ pathname: `/pokemon/${pokemon.name}` }}>
      <div className="card card-container">
      <img src={pokemon.sprites.front_default} className="card-img" alt="There is no sprite."/>
      <div className="card-name">
        <label>{pokemon.name}</label>
     </div>
     
        <div><span className="card-bold">Height:</span>{pokemon.height}</div>
        <div><span className="card-bold">weight:</span>{pokemon.weight}</div>
        <div><span className="card-bold">Abilities:</span>{pokemon.abilities.map((ability,i) => {
                  return <div key={i}>{ability.ability.name}</div>
              })}</div>
     
      </div>
    </Link>
    );

}