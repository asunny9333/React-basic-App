import React from 'react';
import { Link } from 'react-router-dom';
import './menubar.css'; 

function MenuBar() {
  return (
    <div  class ="menu-bar">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/account">Account</Link>
    </div>
  );
}

export default MenuBar;
