import { React, useState, useEffect } from "react";

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
      You Have {cart.length} Items In Your Cart
      <div>{mapCart}</div>
    </div>
  );
}

export default Checkout;
