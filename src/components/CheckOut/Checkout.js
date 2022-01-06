import { React, useEffect } from "react";
import CartCard from './CartCard'
import { Link } from 'react-router-dom';


function Checkout({ cart, handleDelete }) {

function makePurchase() {
 
    if (cart.length == 0) {
      console.log("I did not run");
    } else {
      fetch("http://localhost:9292/order_items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      })
    }
}

  return (


    <div>
      <h1 className='cart-header'>Shopping Cart</h1>
      {cart.map((item) => (
            <div className='cart-items'>
              Quantity: {item.quantity} | {item.product.name}
              <button onClick={() => handleDelete(item)}>Remove From Cart</button>
            </div>
        ))}
        <Link to="/orders">
          <button onClick={makePurchase}>Make Purchase</button>
        </Link>
    </div>

  );
}

export default Checkout;
