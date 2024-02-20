import React from 'react';

const PokemonDetails = ({ match }) => {
const pokemonName = match.params.name;

return (
<div>
    <h1>Details for {pokemonName}</h1>
    {/* Display additional details here */}
</div>
);
};

export default PokemonDetails;
