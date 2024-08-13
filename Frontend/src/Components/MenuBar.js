import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/menubar.css'; 

function MenuBar() {
  return (
    <div  class ="menu-bar">
      <Link to="/products">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/signin">Signout</Link>
    </div>
  );
}

export default MenuBar;
