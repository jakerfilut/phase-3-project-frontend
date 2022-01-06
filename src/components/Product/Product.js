import { React, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./Product.css";
import './FilterBar.css';


function Product({ products, addToCart, productsToDisplay, setDeptFilter }) {


  return (
  <>
    <nav>
      <ul>
        <li onClick={() => setDeptFilter("Appliances")}>Appliances</li>
        <li onClick={() => setDeptFilter("Bath & Faucets")}>Bath & Faucets</li>
        <li onClick={() => setDeptFilter("Blinds & Windows")}>Blinds & Windows</li>
        <li onClick={() => setDeptFilter("Building Material")}>Building Material</li>
        <li onClick={() => setDeptFilter("Electrical")}>Electrical</li>
        <li onClick={() => setDeptFilter("Tools")}>Tools</li>
        <li onClick={() => setDeptFilter("Lighting & Ceiling Fans")}>Lighting & Ceiling Fans</li>
        <li onClick={() => setDeptFilter("Outdoor Living")}>Outdoor Living</li>
        <li onClick={() => setDeptFilter("Paint")}>Paint</li>
        <li onClick={() => setDeptFilter("Plumbing")}>Plumbing</li>
        <li onClick={() => setDeptFilter("Heating & Cooling")}>Heating & Cooling</li>
        <li onClick={() => setDeptFilter("Kitchen")}>Kitchen</li>
      </ul>
    </nav>

    <div id="product" className="product__section">
      <div className="product__wrapper">
        <div className="product__container">
          {productsToDisplay.map((prod) => (
            <ProductCard key={prod.id} prod={prod} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  </>  
  );
}

export default Product;
