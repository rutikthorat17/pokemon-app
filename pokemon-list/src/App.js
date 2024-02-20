import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PokemonCard from './PokemonCard';
import PokemonDetails from './PokemonDetails';
import './App.css'; 

const App = () => {
  const pokemons = [
    { name: 'Arcanine', image: '/Arcanine.png' },
    { name: 'Bulbasaur', image: '/Bulbasaur.png' },
    { name: 'Charmander', image: '/Charmander.png' },
  ];

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <PokemonCard pokemons={pokemons} />
          </Route>
          <Route path="/pokemon/:name" component={PokemonDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
