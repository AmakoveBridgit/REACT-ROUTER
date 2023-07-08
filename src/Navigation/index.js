import React from "react";
import './style.css'

// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav >
      <ul>
      <li>
          <a href="/Login"> Login</a>       
        </li>
        <li>
          <a href="/Products">Products</a>
        </li>
      
        <li>
          <a href="/ProductDetails"> ProductDetails</a>           
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
