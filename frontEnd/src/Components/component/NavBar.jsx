import  { useState } from 'react';
 import axios from 'axios';
 import { FaSearch } from "react-icons/fa";
 import { FaRegUserCircle } from "react-icons/fa";
  import './Navbar.css' 

export default function Navbar() {

  
    const [ setBooks] = useState([]);
  
    const handleSearch = (event) => {
      event.preventDefault();
      const searchTerm = event.target.elements.Q.value;
      axios.get(`http://localhost:5000/api/books/search?term=${searchTerm}`)
        .then(response => {
          setBooks(response.data);
        })
        .catch(error => {
          console.error('Error fetching books:', error);
        });
    };
   
    
    return ( 
      <div className="header-img-home-page"> 
        <div className='nav-container-home-page'>
      <nav className="Nav-home-page">
        <a href="/" className="Nav-Title-Navbar-page">
          <div  className="Nav-img-home-page" ></div>
        </a>
        <ul className='ul_navbar_page'>
        <li className="SearchBar-Navbar-page">
              <form className='form-SearchBar-Navbar-page' onSubmit={handleSearch}>
                <input className='input-title-Navbar-page' type="text" name="Q" placeholder="Search" />
                <button className='button-Navbar-page' type="submit" >
                <FaSearch />
                </button>
              </form>
            </li>
                
          <li className="abril-fatface-regular-Navbar-page">
            <a href="/">HOME</a>
          </li>
         
          <li className="abril-fatface-regular-Navbar-page">
            <a href="/Favoris">FAVOURITE</a>
          </li>

          <li className="abril-fatface-regular-Navbar-page">
            <a href="/Aboutus">ABOUT</a>
          </li>
          <li >
            <a href="/login" className="logIn-Navbar-page">
            <FaRegUserCircle />
              Login
            </a>
          </li>
          <li className="font-Navbar-page">
            <div className="SU-Navbar-page">
              <a href="/Signup" className="signUp-Navbar-page">
                Sign Up for free
              </a>
            </div>
          </li>
        </ul>
      </nav>
      </div>
      </div>
     
    );
  }