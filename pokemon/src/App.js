import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { domain } from './shared/endpoint';
import { getAllPokemon, getPokemon} from './services/pokemon';
import {CardLayout} from './components/Card/Card';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const initialUrl = domain+'/pokemon';

  useEffect(() => {
    async function fetchPokemon() {
      let response = await getAllPokemon(initialUrl);
     // console.log(response);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      //console.log(`pokemon`,pokemon);
      setIsLoading(false);
    }
    fetchPokemon();
  },[initialUrl]);

  const loadPokemon = async (result) => {
    let pokemon_Data = await Promise.all(result.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
    }))
    console.log(`pokemonData`,pokemon_Data);
    setPokemonData(pokemon_Data);
    //return pokemon_Data;
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

  const handleClick = () => {
    alert("clicked");
  }
 // console.log(pokemonData);
  return (
    <div>
      { 
        isLoading ? <h1>Loading .... </h1> : (
         <>
         <div className="btn">
              <button onClick={prev}>Prev</button>
              <button onClick={next}>Next</button>
            </div>
        
           {
             pokemonData.map((pokemon, i) => {
               return <CardLayout key={i} pokemon={pokemon}/>
             })
           }
           
           <div className="btn">
              <button className="" onClick={prev}>Prev</button>
              <button className="" onClick={next}>Next</button>
            </div>
         </>
        )
      }
    </div>
  );
}

export default App;
