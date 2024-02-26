import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import PokemonDetails from './PokemonDetails';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
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

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes>
            <Route path="/" element={<PokemonCard pokemons={pokemons} />} />
            <Route path="/pokemon/:name" element={<PokemonDetails />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
