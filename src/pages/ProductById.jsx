import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function ProductById() {

    const [product,setProduct]=useState({});

    const {id}=useParams()

    useEffect(()=>{
        fetchProductById();
    },[])

    const fetchProductById=()=>{
        fetch(`http://localhost:8080/getProductById/${id}`)
        .then((response)=>{
           return  response.json();
        })
        .then((data)=>{
            setProduct(data)
            console.log(data)
        })
        .catch((e)=>{
            console.log("error > ",e);
        })
    }
  return (
    
    <div>

        <h1>{product.id}</h1>
        <h1>{product.productName}</h1>
        <h1>{product.qty}</h1>
        <h1>{product.price}</h1>
        
        
    </div>
  )
}

export default ProductById
