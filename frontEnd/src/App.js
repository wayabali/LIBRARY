import React from 'react';
import SignupComponent from './Components/Signup/SignupComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './Components/Login/Logincomponent';
import Favorite from './Components/Favoris/Favoris';
import Display from './Components/dispay/Display';




function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route  path="/Signup" element={<SignupComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/favoris" element={<Favorite />} />
          <Route path="/displaybook" element={<Display />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
