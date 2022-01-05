import { React, useState, useEffect } from "react";
// import { GiConsoleController } from "react-icons/gi";

const api_prod = "http://localhost:9292/products";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/products")
      .then((res) => res.json())
      .then(setProducts);
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
