import React from 'react';
import menuIcon from './assets/menu.png';
import searchIcon from './assets/search.png';
import cartIcon from './assets/cart.png';
import userIcon from './assets/user.png';
import logo from './assets/logo.png';


function Header(){
    return(
        <div className="Header">
      <div className="navbar">
        <div className="navbar_inner">
          <div className="left_icons">
            <a href="#"><img src={menuIcon} alt="Menu" /></a>
            <a href="#"><img src={searchIcon} alt="Search" /></a>
          </div>
          <div className="midlogo">
            <img src="" alt="Logo" className="src"  />
          </div>
          <div className="right_icons">
            <a href="#"><img src={cartIcon} alt="Cart" /></a>
            <a href="#"><img src={userIcon} alt="User" /></a>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Header;