import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductById() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchProductById();
  }, []);

  const fetchProductById = () => {
    fetch(`http://localhost:8080/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((e) => console.log("error > ", e));
  };

  return (
    <div>
      <h1>ID: {product.id}</h1>
      <h1>Name: {product.productName}</h1>
      <h1>Quantity: {product.qty}</h1>
      <h1>Price: {product.price}</h1>
      
      {/* Display Image */}
      {product.image && (
        <div>
          <img
            src={`data:image/jpeg;base64,${product.image}`}
            alt={product.productName}
            style={{ width: "300px", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
}

export default ProductById;
