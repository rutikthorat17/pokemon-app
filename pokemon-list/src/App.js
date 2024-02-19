import React, { useState } from 'react';
import PokemonCard from './PokemonCard';
import './App.css'; 

const App = () => {
  const [pokemons, setPokemons] = useState([
    { name: 'Pikachu', image: '/pikachu.png' },
    { name: 'Bulbasaur', image: '/bulbasaur.png' },
    { name: 'Charmander', image: '/charmander.png' },
  ]);

  const [newPokemonName, setNewPokemonName] = useState('');
  const [newPokemonImage, setNewPokemonImage] = useState('');

  const handleNameChange = (e) => {
    setNewPokemonName(e.target.value);
  };

  const handleImageChange = (e) => {
    setNewPokemonImage(e.target.value);
  };

  const handleAddPokemon = () => {
    if (newPokemonName && newPokemonImage) {
      const newPokemon = {
        name: newPokemonName,
        image: newPokemonImage,
      };
      setPokemons([...pokemons, newPokemon]);
      setNewPokemonName('');
      setNewPokemonImage('');
    }
  };

  return (
    <div className="App">
      <div className="form-container">
        <input
          type="text"
          placeholder="Enter Pokemon Name"
          value={newPokemonName}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Enter Pokemon Image URL"
          value={newPokemonImage}
          onChange={handleImageChange}
        />
        <button onClick={handleAddPokemon}>Add</button>
      </div>
      <PokemonCard pokemons={pokemons} />
    </div>
  );
};

export default App;
