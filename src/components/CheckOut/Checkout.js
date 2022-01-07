import { React, useEffect, useState } from "react";
import CartCard from "./CartCard";
import { Link } from "react-router-dom";
// import "./components/product/button.css";

function Checkout({ cart, handleDelete }) {
  function makePurchase() {
    if (cart.length == 0) {
      console.log("I did not run");
    } else {
      fetch("http://localhost:9292/order_items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }

  return (
    <div>
      <h1 className="cart-header">Shopping Cart</h1>
      {cart.map((item) => (
        <div className="cart-items">
          <img className="checkout__img" src={item.product.img_url} />
          <div className="checkout_text">
            {/* Quantity: {item.quantity} |  */}
            {item.product.name}
            <div className="checkout__price">${item.product.unit_price}</div>
          </div>
          <div className="checkout__btn">
            <button className="btn" onClick={() => handleDelete(item)}>
              Remove From Cart
            </button>
          </div>
        </div>
      ))}
      <Link to="/orders">
        <div className="test">
          <div className="checkout__ez">
            <button className="btn" onClick={makePurchase}>
              Buy Now
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Checkout;
