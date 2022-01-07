import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./productDetail.css";
import "./button.css";

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

  const { name, department, description, unit_price, img_url, inventory, reviews } = product;
   

  // console.log(reviews.map(r=>r.comment))


  return (
    <div className="detail__conatiner-card">
      <div className="detail__container-cradInfo">
        <img className="detail_img" src={img_url} alt={name} />
        <div className="detail__text">
          <h2>{name}</h2>
          <p>Department: {department}</p>
          <div>
            <h3>${unit_price}</h3>
            <div>
              <p>{description}</p>
            </div>
            <br></br>
            <button className="btn" onClick={() => addToCart(product)}>
              Add To Cart
            </button>{" "}
            <p className="detail__inventory">
              We have {inventory} units in stock
            </p>
          
          {/* <p>{reviews.map(r=>r.comment)}</p> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
