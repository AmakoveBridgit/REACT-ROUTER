// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from "./Login";
import Products from "./Products";
import {BrowserRouter,Routes,Route}   from 'react-router-dom';
import ProductDetails from "./addDetails";
import Navbar from './Navigation';


function App() {
  return (
    <div >
      <Navbar/>
      <BrowserRouter>
      {/* <Link to='/login'>Login</Link>
      <Link to='/product'>Products</Link>
      
      <Link to='/productdetails'>ProductDetails</Link> */}
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/productdetails/:productId' element={<ProductDetails/>}/>
      </Routes>
      </BrowserRouter>

     

      
    </div>
  );
}

export default App;




