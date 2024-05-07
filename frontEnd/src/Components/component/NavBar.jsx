import React from "react";

import "../Favoris/Favoris.css";

export default function Navbar(){

return (
<nav className="Nav">
        <a href="/home" className="Nav-Title">
          <img  alt="" className="Nav-img" />
        </a>
        <ul>
          <li className="abril-fatface-regular">
            <a href="/">HOME</a>
          </li>
          <li className="abril-fatface-regular">
            <a href="/favoris" className="aboutus">
              FAVORITE
            </a>
          </li>
          <li className="abril-fatface-regular">
            <a href="/">ABOUT</a>
          </li>
          <li>
            <a href="/user_info" className="userpict">
              User Info
            </a>
          </li>
         
        </ul>
      </nav>
)
};