import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Layout from "./pages/layout";
import ProductById from "./pages/ProductById";
import "./App.scss";



function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/category" element={<Category></Category>}></Route>
          <Route path="/product/:id" element={<ProductById></ProductById>}></Route>
          
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
