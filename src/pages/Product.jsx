import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Product() {
  const [products, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const productNameRef = useRef(null);
  const priceRef = useRef(0);
  const quantityRef = useRef(0);
  const categoryRef = useRef(0);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetchProduct();
    fetchCategory();
  }, []);

  const fetchProduct = () => {
    fetch(`http://localhost:8080/getAllProduct`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((e) => console.log("error > ", e));
  };

  const fetchCategory = () => {
    fetch(`http://localhost:8080/getAllCategory`)
      .then((response) => response.json())
      .then((data) => setCategory(data))
      .catch((e) => console.log("error > ", e));
  };

  const addProduct = (formData) => {
    fetch(`http://localhost:8080/addProduct`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        fetchProduct();
      })
      .catch((e) => console.log("error > ", e));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('productName', productNameRef.current.value);
    formData.append('price', parseFloat(priceRef.current.value));
    formData.append('qty', parseFloat(quantityRef.current.value));
    formData.append('categoryId', parseInt(categoryRef.current.value));
    if (imageFile) {
      formData.append('imageFile', imageFile);
    }

    addProduct(formData);

    productNameRef.current.value = '';
    priceRef.current.value = '';
    quantityRef.current.value = '';
    categoryRef.current.value = '';
    setImageFile(null);
  };

  return (
    <div>
      <ul>
        {products?.map((data) => (
          <li key={data.id}>
            <Link to={`/product/${data.id}`}>{data.productName}</Link>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productname">Product Name:</label>
          <input id="productname" type="text" ref={productNameRef} />
        </div>

        <div>
          <label>Price:</label>
          <input type="number" ref={priceRef} />
        </div>

        <div>
          <label>Quantity:</label>
          <input type="number" ref={quantityRef} />
        </div>

        <div>
          <label>Select Category:</label>
          <select id="dropdown" ref={categoryRef}>
            <option value="">Select</option>
            {category.map((data) => (
              <option key={data.id} value={data.id}>{data.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Product Image:</label>
          <input type="file" onChange={handleImageChange} />
        </div>

        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
}

export default Product;
