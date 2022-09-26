import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
const Headers = () => {
    return (
        <div className="header">
        <img src={logo} alt=""/>
        <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/inventory">Inventory</a>
          
    
        </nav>
    </div>
    );
};

export default Headers;