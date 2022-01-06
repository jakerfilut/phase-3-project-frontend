import { React, useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import ProductCard from "./ProductCard";

function Product({ products, addToCart }) {
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
