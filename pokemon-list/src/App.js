import React from 'react';
import PokemonCard from './PokemonCard';
import './App.css'; // Import CSS for layout

const pokemons = [
  { name: 'Arcanine', image: '/Arcanine.png' },
  { name: 'Bulbasaur', image: '/Bulbasaur.png' },
  { name: 'Charmander', image: '/Charmander.png' },
  // Add more Pokémon data as needed
];

const App = () => {
  return (
    <div className="App">
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={index} name={pokemon.name} image={pokemon.image} />
      ))}
    </div>
  );
};

export default App;
