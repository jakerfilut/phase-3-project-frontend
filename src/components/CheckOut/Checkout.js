import { React, useState, useEffect } from "react";

function Checkout({ cart, handleDelete }) {
  // const [cart, setCart] = useState([]);
  // const [deletes, setDeletes] = useState(false);

  // useEffect(() => {
  //   fetch("http://localhost:9292/order_items")
  //     .then((res) => res.json())
  //     .then(setCart);
  // }, [deletes]);
  // console.log(cart.length);
  // const handleDelete = (item) => {
  //   fetch(`http://localhost:9292/order_items/${item.id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCart(cart.filter((item) => item.id !== data.id));
  //       setDeletes(!deletes);
  //     });
  // };

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
