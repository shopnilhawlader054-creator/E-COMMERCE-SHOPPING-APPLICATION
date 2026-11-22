import React from 'react'
import {Routes, Route } from "react-router-dom";
import Home from './components/HomePage/home';
import ProductDetals from './components/ProductDetals/ProductDetals';
import AddtoCart from './components/HomePage/AddtoCart';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='productdetals/:id' element={<ProductDetals/>}/>
        <Route path='cart/' element={AddtoCart}/>
      </Routes>
    </div>
  )
}

export default App