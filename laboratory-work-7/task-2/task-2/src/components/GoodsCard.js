import React from 'react';
import PropTypes from 'prop-types';
const GoodsCard = ({ image, name, price }) => (
    <div className="goods-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>Ціна: {price}</p>
    </div>
);

GoodsCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

export default GoodsCard;
