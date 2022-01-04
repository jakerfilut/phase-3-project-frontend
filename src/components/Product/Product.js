import { React, useState, useEffect } from "react";
import { GiConsoleController } from "react-icons/gi";

const api_prod = "http://localhost:9292/products";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/products")
      .then((res) => res.json())
      .then(setProducts);
  }, [setProducts]);
  console.log(products);

  const addToCart = (prod) => {
    console.log(prod.id);
    // console.log(prod.inventory);

    // let newInv = prod.inventory - 1;
    console.log(prod.inventory);
    fetch(`http://localhost:9292/products/${prod.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...prod, inventory: (prod.inventory -= 1) }),
    });
    // .then((r) => r.json())
    // .then(setProducts);
  };

  const mapProducts = products.map((prod) => {
    return (
      <p>
        {prod.name} {prod.inventory}
        <button onClick={() => addToCart(prod)}>Add To Cart</button>
      </p>
    );
  });

  return <div>{mapProducts}</div>;
}

export default Product;
