import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./productDetail.css";

function ProductDetail({ addToCart }) {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/products/${id}`)
      .then((r) => r.json())
      .then((product) => {
        setProduct(product);
      });
  }, [id]);

  const { name, department, description, unit_price, img_url, inventory } =
    product;

  return (
    // <div
    // className="detail__conatiner-card"
    // >
    <div className="detail__container-cradInfo">
      <img className="detail_img" src={img_url} alt={name} />
      <div className="detail__text">
        <h2>{name}</h2>
        <p>Department: {department}</p>
        <div>
          <p>${unit_price}</p>
          <p>We have {inventory} units in stock</p>
          <div>
            <p>Description:</p>
            <p>{description}</p>
          </div>
          <br></br>
          <button onClick={() => addToCart(product)}>Add To Cart</button>
          <Link to="/products">Go Back!</Link>
        </div>
      </div>
    </div>
    // {/* </div> */}
  );
}

export default ProductDetail;
