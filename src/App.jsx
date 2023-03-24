import { useState } from 'react';
import './App.css'
import Footer from './Components/Footer';
import PokemonsList from './Components/PokemonsList';


function App() {
  let availavblePokemonsList = [
    {
      id: 1,
      name: 'Bulbasaur',
      cp: 439,
      color: 'green',
      img: "src/assets/bulbasaur.webp"
    },
    {
      id: 2,
      name: 'Vulpix',
      cp: 194,
      color: 'brown',
      img: "src/assets/vulpix.webp"
    },
    {
      id: 3,
      name: 'Pikachu',
      cp: 455,
      color: 'yellow',
      img: "src/assets/pikachu.webp"
    },
    {
      id: 4,
      name: 'Gyarados',
      cp: 2243,
      color: 'pink',
      img: "src/assets/gyarados.webp"
    },
    {
      id: 5,
      name: 'Pidgey',
      cp: 248,
      color: 'blue',
      img: "./src/assets/pidgey.webp"
    },
    {
      id: 6,
      name: 'Wigglytuff',
      cp: 1362,
      color: 'red',
      img: "src/assets/wigglytuff.webp"
    },
    {
      id: 7,
      name: 'Oddish',
      cp: 610,
      color: 'black',
      img: "src/assets/oddish.webp"
    },
    {
      id: 8,
      name: 'Haunter',
      cp: 735,
      color: 'white',
      img: "src/assets/haunter.webp"
    },
    {
      id: 9,
      name: 'Onix',
      cp: 1002,
      color: 'purple',
      img: "src/assets/onix.webp"
    },
    {
      id: 10,
      name: 'Exeggutor',
      cp: 2916,
      color: 'beige',
      img: "src/assets/exeggutor.webp"
    }
  ];
  // let chosenPokemonsList = []
  const [availavblePokemons, setAvailablePokemons] = useState(availavblePokemonsList)
  const [chosenPokemons, setChosenPokemons] = useState([])

  function addToChosenPokemon(pokemon) {
    setChosenPokemons(
      [...chosenPokemons, 
      pokemon])
    setAvailablePokemons(
      availavblePokemons.filter(item =>
        item.id !== pokemon.id)
    )
  }
  function removeFromChosenPokemon(pokemon) {
    setAvailablePokemons(
      [...availavblePokemons,
      pokemon]
    )
    setChosenPokemons(
      chosenPokemons.filter(item =>
        item.id !== pokemon.id)
    )
  }
  return (
  <>
    <header>
      <h1>POKÉMON</h1>
    </header>
    <main>
      <h2>Choose your champions</h2>
      <section className="container">
        <PokemonsList pokemons={availavblePokemons} title="Available Pokémons" handleClick={addToChosenPokemon} />
        <PokemonsList pokemons={chosenPokemons} title="Chosen Pokémons" handleClick={removeFromChosenPokemon} />
      </section>
    </main>  
    <Footer />
  </>
  )
}

export default App
