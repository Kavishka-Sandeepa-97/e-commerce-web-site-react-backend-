import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      
        <Link to={"/"} style={{margin:"10px"}}>Home</Link>
        <Link to={"/product"} style={{margin:"10px"}}>Product</Link>
        <Link to={"/category"} style={{margin:"10px"}}>category</Link>
      
    </div>
  )
}

export default NavBar
