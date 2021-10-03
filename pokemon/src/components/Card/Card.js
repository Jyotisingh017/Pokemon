import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

export function CardLayout({pokemon}) {
   // console.log(pokemon)
   /*const onTrigger = (event) => {
    handleclick(keyvalue);
    event.preventDefault();
}*/
    return (  
      <Link className='card' to={{ pathname: `/pokemon/${pokemon.name}` }}>
      <div className="card card_container">
      <img src={pokemon.sprites.front_default} className="card_img" alt="There is no sprite."/>
      <div className="card_name">
        <label>{pokemon.name}</label>
     </div>
     
        <div><span className="card_bold">Height:</span>{pokemon.height}</div>
        <div><span className="card_bold">weight:</span>{pokemon.weight}</div>
        <div><span className="card_bold">Abilities:</span>{pokemon.abilities.map((ability,i) => {
                  return <div key={i}>{ability.ability.name}</div>
              })}</div>
     
      </div>
    </Link>
    );

}