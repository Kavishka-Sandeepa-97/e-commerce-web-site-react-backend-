import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CategoryByID() {
    const {id}=useParams(null);
    const [products,setProduct] =useState([]);

    useEffect(() => {
        const fetchProducts=async ()=>{
          try {
            const response = await axios.get("http://localhost:8080/productByCategory/"+id);
            setProduct(response.data);
            console.log();
          } catch (error) {
            console.log(error);
          }
        }
        fetchProducts();
      }, []);
  return (
    <div>
      {products.map(
        data => (
          
           <h1>{data.productName}</h1> 
          
        )
      )}
    </div>
  )
}

export default CategoryByID
