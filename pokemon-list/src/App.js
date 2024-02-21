import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import PokemonCard from './PokemonCard';
import PokemonDetails from './PokemonDetails';
import './App.css'; 

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        if (!response.ok) {
          throw new Error('Failed to fetch pokemons');
        }
        const data = await response.json();
        setPokemons(data.results);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <Skeleton height={50} width={200} count={3} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PokemonCard pokemons={pokemons} />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
