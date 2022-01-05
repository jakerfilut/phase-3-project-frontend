import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductDetail({product, addToCart}) {

      const { id, name, department, description, unit_price, img_url, inventory } = product;

      const path = `/products/${id}`


  return (
    <section>
      <div>
      <Link to={path}>
          <img src={img_url} alt={name} />
        </Link>
        <div >
          <Link to={path}>
            <h2>{name}</h2>
          </Link>
          <p>
            Department: {department}
          </p>
          <div>
            <p>${unit_price}</p>
            <p>We have {inventory} units in stock</p>
            <div >
              <p>Description:</p>
              <p>{description}</p>
            </div>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
