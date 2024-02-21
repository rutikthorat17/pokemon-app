import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonDetails.css';

const PokemonDetails = () => {
const { name } = useParams();
const [pokemonDetails, setPokemonDetails] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
const fetchPokemonDetails = async () => {
    try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
        throw new Error('Failed to fetch pokemon details');
    }
    const data = await response.json();
    setPokemonDetails(data);
    setLoading(false);
    } catch (error) {
    setError(error.message);
    setLoading(false);
    }
};

fetchPokemonDetails();
}, [name]);

if (loading) {
return <div>Loading...</div>;
}

if (error) {
return <div>Error: {error}</div>;
}

return (
    <div className="pokemon-details-container">
        <h1>{pokemonDetails.name}</h1>
        <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name}/>
        <h2>Abilities</h2>
        <ul>
        {pokemonDetails.abilities.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
        </ul>
    </div>
);
};

export default PokemonDetails;
