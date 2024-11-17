import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Category() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategory=async ()=>{
      try {
        const response = await axios.get("http://localhost:8080/getAllCategory");
        setCategories(response.data);
        console.log();
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategory();
  }, []);

  return (
    <div>
      <ul>
      {categories.map(
        (data => (
          
            <li key={data.id}><Link to={"/category/"+data.id} >{data.name}</Link></li>
          
        ))
      )}
      </ul>
    </div>
  );
}

export default Category;
