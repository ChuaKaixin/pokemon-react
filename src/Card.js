import React from "react";
import "./style.css";
const Card = props => {
  const {image, name, type, price} = props.pokemon;
  return (
    <div className={`listItem ${type}`} >
      <h3><img src={image} alt=""/></h3>
      <h3 className="listItem__name">{name}</h3>
      <h3 className="listItem__name">{type.charAt(0).toUpperCase() + type.substr(1)}</h3>
      <div className="listItem__price">
        <div className="listItem__priceTxt">{price}</div>
      </div>
    </div>
  );
};

export default Card;
