import { React } from "react";
import CartCard from './CartCard'
import { Card } from 'semantic-ui-react';

function Checkout({ cart, handleDelete }) {
  const mapCart = cart.map((item) => {
    return (
      <p>
        {" "}
        {item.product.name}
        <button onClick={() => handleDelete(item)}>Remove From Cart</button>
      </p>
    );
  });


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
