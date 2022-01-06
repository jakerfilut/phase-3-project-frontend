import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function ProductDetail({ prod, addToCart }) {
  const { id, name, department, description, unit_price, img_url, inventory } =
    prod;

  const path = `/products/${id}`;

  return (
    <Link to={path} className="product__container-card">
      <div className="product__container-cardInfo">
        <div className="icon">
          <img
            src={img_url}
            alt={name}
            height="300"
            length="300"
            className="product__img"
          />
        </div>
        <h4>{name}</h4>
        <h3>${unit_price}.00</h3>
        <p>{inventory} left in Stock</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart(prod);
          }}
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}

export default ProductDetail;
