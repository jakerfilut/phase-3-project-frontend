import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CartCard({cart, handleDelete}) {

      const { name, unit_price } = cart;

 


  return (
    <section className='card-container'>
      <div className='ui card'>
          <div className='card'>
        <div className='order-header'>
            
        </div>
        <p>Items Purchased: {name}</p>
        <p>Total Cost: {unit_price}</p>
        <button onClick={() => handleDelete(cart)}>Remove From Cart</button>
        </div>
      </div>
    </section>
  );
}

export default CartCard;