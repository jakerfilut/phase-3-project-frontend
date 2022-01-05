import { React, useState, useEffect } from "react";
import Product from "../Product/Product";

function Checkout() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/order_items")
      .then((res) => res.json())
      .then(setCart);
  }, []);

  const mapCart = cart.map((item) => {
    console.log(item);
    return (
      <p>
        {item.product.name}
        <button onClick={() => handleDelete(item)}>Remove From Cart</button>
      </p>
    );
  });

  const handleDelete = (item) => {
    fetch(`http://localhost:9292/order_items/${item.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setCart(cart.filter((item) => item.id !== item));
        console.log(data);
      });
  };

  return <div>{mapCart}</div>;
}

export default Checkout;
