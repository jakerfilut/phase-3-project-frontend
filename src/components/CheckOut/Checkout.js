import { React, useState, useEffect } from "react";
import CartCard from './CartCard'
import { Card } from 'semantic-ui-react';

function Checkout({}) {
  const [cart, setCart] = useState([]);
  const [deletes, setDeletes] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9292/order_items")
      .then((res) => res.json())
      .then(setCart);
  }, [deletes]);
  console.log(cart.length);
  const handleDelete = (item) => {
    fetch(`http://localhost:9292/order_items/${item.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCart(cart.filter((item) => item.id !== data.id));
        setDeletes(!deletes);
      });
  };


  return (


    <div>
      <h1 className='cart-header'>Shopping Cart</h1>
      {cart.map((item) => (
            <div className='cart-items'>
              Quantity: {item.quantity} | {item.product.name}
              <button onClick={() => handleDelete(item)}>Remove From Cart</button>
            </div>
        ))}
        <button>Make Purchase</button>
    </div>

  );
}

export default Checkout;
