import React from 'react';
import headerLogo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className='header-img'>
                <img src={headerLogo} alt="" />
            </div>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;