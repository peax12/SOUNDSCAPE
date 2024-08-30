import React from "react";

import logoIcon from './assets/logo.png';
import FbIcon from './assets/facebook.png';
import instaIcon from './assets/Instagram.png'



function Sidebar(){
    return(
        <>
          <div class="sidebar">
            <div class="close">
                <button>
                    X
                </button>
            </div>
            <div class="sidebarlogo">
                <img src={logoIcon} alt="#" />
            </div>
            <div class="menulist">
                <li class="active"><a href="">Home</a></li>
                <li><a href="#" onclick="loadpage('artists.html')">Artists</a></li>
                <li><a href="">Albums</a></li>
                <li><a href="">Merches</a></li>
                <li><a href="">Shows</a></li>
            </div>
            <div class="details">
                <div class="detailstext">
                    Follow Us On:
                </div>
                <div class="icons">
                    <img src={FbIcon} alt="" />
                    <img src={instaIcon} alt="" />
                </div>
            </div>
        </div>
        </>
    );
}