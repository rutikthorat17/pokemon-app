import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

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
    return <Loading>Loading...</Loading>;
  }

  if (error) {
    return <Error>Error: {error}</Error>;
  }

  return (
    <DetailsContainer>
    <h1>{pokemonDetails.name}</h1>
    <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name}/>
    <h2>Abilities</h2>
    <ul>
    {pokemonDetails.abilities.map((ability) => (
        <li key={ability.ability.name}>{ability.ability.name}</li>
    ))}
    </ul>
    </DetailsContainer>
  );
};

const Loading = styled.div`
  /* Your styles for loading state */
`;

const Error = styled.div`
  /* Your styles for error state */
`;

const DetailsContainer = styled.div`
  /* Your styles for the details container */
`;

export default PokemonDetails;
