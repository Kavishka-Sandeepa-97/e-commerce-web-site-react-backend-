import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Product() {
  const [products, setProduct] = useState([]);
  const [category,setCategory]=useState([]);

  const productNameRef=useRef(null);
  const priceRef=useRef(0);
  const quantityRef=useRef(0);
  const categoryRef = useRef(0);

  useEffect(() => {
    fetchProduct();
    fetchCategory();
  }, []);

  const fetchProduct = () => {
    fetch(`http://localhost:8080/getAllProduct`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((e) => {
        console.log("error > ", e);
      });
  };

  const fetchCategory = () => {
    fetch(`http://localhost:8080/getAllCategory`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategory(data);
        console.log(data);
      })
      .catch((e) => {
        console.log("error > ", e);
      });
  };

  const addProduct = (data) => {
    console.log(data);
    fetch(`http://localhost:8080/addProduct`,{
      method:'post',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(data)

    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        fetchProduct()
      })
      .catch((e) => {
        console.log("error > ", e);
      });
  };
  const hadleSubmit=(e)=>{
    e.preventDefault();
    const data={
      productName:productNameRef.current.value,
      price:parseFloat(priceRef.current.value),
      qty:parseFloat(quantityRef.current.value),
      categoryId:parseInt(categoryRef.current.value)
    }

    addProduct(data);
    productNameRef.current.value = '';
    priceRef.current.value = '';
    quantityRef.current.value = '';
    categoryRef.current.value = '';

  }

  return (
    <div>
      <ul>
        {products?.map((data) => (
          <li key={data.id}>
            <Link to={`/product/${data.id}`}>{data.productName}</Link>
          </li>
        ))}
      </ul>

      <form onSubmit={hadleSubmit}>
        <div>
          <label htmlFor="productname">product name :</label>
          <input id="productname" type="text"  ref={productNameRef}/>
        </div>

        <div>
          <label htmlFor="">Price :</label>
          <input type="number" ref={priceRef}/>
        </div>

        <div>
          <label htmlFor="">Quantity :</label>
          <input type="number" ref={quantityRef}/>
        </div>
        
        <div>
        <label htmlFor="">select your category :</label>
          <select name="" id="dropdown" ref={categoryRef}>
          <option value="">Select</option>
           {
              category.map((data)=>(
              <option key={data.id} value={data.id}>{data.name}</option>
          ))
           }
            
          </select>
          
        </div>

        <button type="submit" className="btn btn-primary">add product</button>

        
      </form>
    </div>
  );
}

export default Product;
