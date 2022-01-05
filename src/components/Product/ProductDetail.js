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
    <div >
      <h1>Hello</h1>
    </div>
  );
}

export default ProductDetail;
