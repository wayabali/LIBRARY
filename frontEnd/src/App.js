import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup/SignupComponent';
import Login from './Components/Login/Logincomponent';
import Home from './Components/Home/Home_page';
import Favorite from './Components/Favoris/Favoris';
import AboutUs from './Components/Aboutus/AboutUs';
import Display from './Components/dispay/Display';
 import UserInfo from './Components/UserInfo/UserInfo'


function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/" element={<Signup />} />
        <Route  path="/Signup" element={<Signup />} />
        <Route  path="/Login" element={<Login />} />
        <Route  path="/Favoris" element={<Favorite />} />
        <Route  path="/Aboutus" element={<AboutUs />} /> 
        <Route  path="/displaybook" element={<Display />} />
        <Route  path="/UserInfo" element={< UserInfo/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
