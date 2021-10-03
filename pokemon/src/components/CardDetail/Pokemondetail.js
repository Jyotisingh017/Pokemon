import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { domain } from '../../shared/endpoint';
import {getPokemon} from '../../services/pokemon';
import './style.css';

export function Pokemondetail() {
  const location = useLocation();

  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPokemonDetails() {
      let response = await getPokemon(domain+location.pathname);
      console.log(response);
     setPokemon(response);
     setIsLoading(false);
    }
    getPokemonDetails();
  }, [location.pathname]);

    return ( 
      <div>
      { 
        isLoading ? <h1>Loading .... </h1> : ( 
        <div className="main_div">
          <div className="container">
           <img src={pokemon.sprites.other["official-artwork"].front_default} className="card_img" alt="There's no sprite."/>
          <div className="main_div">
          <div className="padding"><span className="card_bold">Height:</span>{pokemon.height}</div>
          <div className="padding"><span className="card_bold padding">weight:</span>{pokemon.weight}</div>
            <span className="card_bold padding">Type:</span><div className="grid">{pokemon.types.map((type,i) => {
                  return <div key={i}>{type.type.name}</div>
              })}</div>
            <span className="card_bold padding">Abilities:</span><div className="grid">{pokemon.abilities.map((ability,i) => {
                  return <div key={i}>{ability.ability.name}</div>
              })}</div>
          </div>
          </div>
        </div>
       )}
     </div>      
    )
}