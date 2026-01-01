import React from "react";
import "./App.css";
export function CardComponent(props) {
  const { product } = props;
  const { name, price, description, image, category, quantity } = product;
  return (
    <div className="card">
      <img  src={image} alt={name} className="card-image" />
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <p>  <strong>Price:</strong> {price} Only </p>
        <p>  <strong>Category:</strong> {category}  </p>
        <p>  <strong>In stock:</strong> {quantity}  </p>
    </div>
  );
}