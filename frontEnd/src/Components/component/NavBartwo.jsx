import React from "react";

import "./NavBartwo.css";
 import { Link } from "react-router-dom";

export default function Navbartwo(){

return (
<nav className="Nav-Navbartwo-page">
      <Link to={"/"}> <div className="Nav-img-Navbartwo-page"></div> </Link>
      <Link to={"/"}> <div className="abril-fatface-regular-Navbartwo-page">HOME</div> </Link>
      <Link to={"/favoris"}> <div className="abril-fatface-regular-Navbartwo-page">FAVORITE</div> </Link>
      <Link to={"/Aboutus"}> <div className="abril-fatface-regular-Navbartwo-page">ABOUT</div> </Link>
      <Link to={"/user_info"}> <div className="abril-fatface-regular-Navbartwo-page">profil</div> </Link>
      <Link to={"/login"}> <div className="abril-fatface-regular-Navbartwo-page">LogOut</div> </Link>
       
      </nav>
)
};