import React from 'react';
import { Link } from 'react-router-dom';
import './PokemonCard.css';

const PokemonCard = ({ pokemons }) => {
return (
<div className="pokemon-container">
    {pokemons.map((pokemon, index) => (
    <Link to={`/pokemon/${pokemon.name}`} key={index} className="pokemon-card">
        <div className="card">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
        <div className="container">
            <h4><b>{pokemon.name}</b></h4>
        </div>
        </div>
    </Link>
    ))}
</div>
);
};

export default PokemonCard;
