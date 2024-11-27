import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.title}
        className="card-img-top lazy-load"
        style={{ height: "200px", objectFit: "contain" }}
        loading="lazy"
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
