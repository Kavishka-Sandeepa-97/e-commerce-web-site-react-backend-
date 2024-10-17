import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Product() {

  const[products,setProduct]=useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    fetch(`http://localhost:8080/getAllProduct`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data)
        console.log(data);
      })
      .catch((e) => {
        console.log("error > ", e);
      });
  };
  return (
    <div>
      <ul>
        {products?.map((data,index)=>(
            <li key={index}><Link to={`/product/${data.id}`}>{data.productName}</Link></li>
        ))}
        
      </ul>
  </div>
  )
}

export default Product;
