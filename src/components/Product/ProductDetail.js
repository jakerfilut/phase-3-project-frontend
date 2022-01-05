import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductDetail() {
    const [product, setProduct] = useState([]);

    const { id } = useParams()
    
    useEffect(() => {
        fetch(`http://localhost:9292/products/${id}`)
          .then((r) => r.json())
          .then((product) => {
            setProduct(product);
          });
      }, [id]);

      const { name, department, description, unit_price, img_url, inventory } = product;




  return (
    <section>
      <div>
        <div>
          <img src={img_url} alt={name} />
        </div>
        <div>
          <h2>{name}</h2>
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
            <br></br>
            
            <Link to="/products">Go Back!</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
