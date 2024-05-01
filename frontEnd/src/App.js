import React from 'react';
import SignupComponent from './Components/Signup/SignupComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './Components/Login/Logincomponent';
import Quiz from './Components/quizz/quizz';
import questionsData from './Components/quizz/quizz.json';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route  path="/signup" element={<SignupComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/qui" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
