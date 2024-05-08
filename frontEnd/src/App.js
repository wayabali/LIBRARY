import React from 'react';
import SignupComponent from './Components/Signup/SignupComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './Components/Login/Logincomponent';
import Favorite from './Components/Favoris/Favoris';
import Display from './Components/dispay/Display';
import AboutUs from './Components/Aboutus/AboutUs';




function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route  path="/Signup" element={<SignupComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/favoris" element={<Favorite />} />
          <Route path="/displaybook" element={<Display />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
