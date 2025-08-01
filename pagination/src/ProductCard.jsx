import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-container">
      <img className="product-img" src={product.images} alt="product-img" />
      <h3>{product.title}</h3>
    </div>
  );
};

export default ProductCard;
