import React, {useEffect, useState} from 'react';
import '../../App.css';
import { domain } from '../../shared/endpoint';
import { getAllPokemon, getPokemon} from '../../services/pokemon';
import {CardLayout} from '../Card/Card';

export function Pokemondashboard() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const initialUrl = domain+'/pokemon';

  useEffect(() => {
    async function fetchPokemon() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setIsLoading(false);
    }
    fetchPokemon();
  },[initialUrl]);

  const loadPokemon = async (result) => {
    let pokemon_Data = await Promise.all(result.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
    }))
    setPokemonData(pokemon_Data);
  }

  const next = async () => {
    setIsLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setIsLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setIsLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setIsLoading(false);
  }

  const sortPokemonsByName = () => {
    const newDataSet = [...pokemonData];
    let sortedData = newDataSet.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    setPokemonData(sortedData);
  }

  return (
    <div>
      <div className="align">
              <button className="btn" onClick={prev}>Prev</button>
              <button className="btn" onClick={next}>Next</button>
              <button className="btn" onClick={sortPokemonsByName}>Sort By Name</button>
     </div>
      <div className="grid-container">
      { 
        isLoading ? <h1>Loading .... </h1> : (
         <>
           {
             pokemonData.map((pokemon, i) => {
               return <CardLayout key={i} pokemon={pokemon}/>
             })
           }
         </>
        )
      }
    </div>
    <div className="align">
              <button className="btn" onClick={prev}>Prev</button>
              <button className="btn" onClick={next}>Next</button>
          </div>
    </div>
    );
}

