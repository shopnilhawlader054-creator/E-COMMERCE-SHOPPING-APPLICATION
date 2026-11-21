import React from 'react'
import {Routes, Route } from "react-router-dom";
import Home from './components/HomePage/home';
import ProductDetals from './components/ProductDetals/ProductDetals';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='productdetals/' element={<ProductDetals/>}/>
      </Routes>
    </div>
  )
}

export default App