// App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import './App.css'; 

const PokemonDetails = lazy(() => import('./PokemonDetails'));

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes>
            <Route path="/" element={<PokemonCard />} />
            <Route
              path="/pokemon/:name"  // Ensure this path matches the URL pattern
              element={              // "/pokemon/:name"
                <Suspense fallback={<div>Loading...</div>}>
                  <PokemonDetails />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
