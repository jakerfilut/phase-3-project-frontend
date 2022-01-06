import { React, useState, useEffect } from "react";
import "./Checkout.css";
import { Card } from "semantic-ui-react";
import OrderCard from "./OrderCard";

function Orders({}) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/orders")
      .then((res) => res.json())
      .then(setOrders);
  }, []);

  return (

    <div className='shopping-cart'>
        <h1>Order History</h1>
        <Card.Group>
            {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
            ))}
        </Card.Group>

    </div>
  );
}

export default Orders;
