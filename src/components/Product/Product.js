import { React, useState, useEffect } from "react";
import { Card } from 'semantic-ui-react';
import ProductCard from "./ProductCard";
// import { GiConsoleController } from "react-icons/gi";

const api_prod = "http://localhost:9292/products";

function Product({ setItems, items }) {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch("http://localhost:9292/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addToCart = (prod) => {
    fetch(`http://localhost:9292/products/${prod.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...prod, inventory: (prod.inventory -= 1) }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          products.map((p) => {
            if (p.id === data.id) {
              return data;
            } else {
              return p;
            }
          })
        );
      });
  };
  // const mapProducts = products.map((prod) => {
    return (

      <Card.Group itemsPerRow={6}>
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
          
        ))}
        
      </Card.Group>


    //   <div key={Math.random()}>
    //     <img src={prod.img_url} alt="image" height="100" widtch="100" />
    //     {prod.name}
    //     {prod.inventory}
    //     {/* {prod.description} */}
    //     <button onClick={() => addToCart(prod)}>Add To Cart</button>
    //   </div>
    // );
  // });

  // return <div>{mapProducts}</div>;
    )
}

export default Product;
