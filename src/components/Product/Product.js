import { React, useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import ProductCard from "./ProductCard";

const api_prod = "http://localhost:9292/products";

function Product({ products, setProducts, addToCart }) {
  return (
    <div>
      <Card.Group>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </Card.Group>
    </div>
  );
}

export default Product;
