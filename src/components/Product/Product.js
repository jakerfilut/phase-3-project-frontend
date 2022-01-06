import { React, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./Product.css";

function Product({ products, addToCart }) {
  return (
    <div id="product" className="product__section">
      <div className="product__wrapper">
        <div className="product__container">
          {products.map((prod) => (
            <ProductCard key={prod.id} prod={prod} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
