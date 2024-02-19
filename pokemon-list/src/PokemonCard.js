import React from 'react';
import './PokemonCard.css'; // Import CSS for styling

const PokemonCard = ({ name, image }) => {
return (
<div className="card">
    <img src={image} alt={name} />
    <div className="container">
    <h4><b>{name}</b></h4>
    </div>
</div>
);
};

export default PokemonCard;
