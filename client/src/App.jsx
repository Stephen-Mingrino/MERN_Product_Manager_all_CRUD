import React, { useState, useEffect } from "react"
import axios from 'axios'
import CreateProducts from "./Components/CreateProducts";
import DisplayAllProducts from "./Components/DisplayAlllProducts"
import UpdateProducts from "./Components/UpdateProducts";
import DeleteProduct from "./Components/DeleteProducts";
import DisplayOneProduct from "./Components/DisplayOneProduct";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [allProducts, setAllProducts] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8000/api/product")
      .then((res) => setAllProducts(res.data))
      .catch((err) => console.log(err))

  }, []);
  return (
    <BrowserRouter>
      <div>

        <Routes>
          <Route path="/" element={<DisplayAllProducts allProducts={allProducts} />} />
          <Route path="/newProduct" element={<CreateProducts allProducts={allProducts} setAllProducts={setAllProducts} />} />
          <Route path="/product/:productId" element={<DisplayOneProduct />} />
          <Route path="/newProduct/edit/:productId" element={<UpdateProducts allProducts={allProducts} setAllProducts={setAllProducts} />} />
          <Route path="/product/delete/:productId" element={<DeleteProduct allProducts={allProducts} setAllProducts={setAllProducts} />} />
        </Routes>
      </div>
    </BrowserRouter>


  )

}






export default App;
