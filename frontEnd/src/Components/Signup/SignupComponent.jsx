import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from 'axios'

const SignupComponent = () => {
  const [VALUES , setvalues]= useState({
    username: '',
    email: '',
    password: '',
  }) 
const navigate = useNavigate(); 
const handleSubmit= (event)=>{
  event.preventDefault();
  axios.post('http://localhost:5000/signup' , VALUES)
  .then(res => {
     if(res.data.Error !== "INSERTING DATA ERROR IN SERVER"){
      alert("thanks for signing up");
navigate("/login"); 
     } else alert("WRONG EMAIL OR PASSWORD");
  })
  .then(err => console.log(err));
}
  return (
    <div className="signup-container" >
      <form onSubmit={handleSubmit} className="signup-form">
      <h2>SIGN UP</h2>
        <input type="text" id="username" name="username" onChange={e=> setvalues({...VALUES , username: e.target.value})} placeholder="Username" required />
        <input type="email" id="email" name="email" onChange={e=> setvalues({...VALUES , email: e.target.value})} placeholder="Email" required />
        <input type="password" id="password" name="password" onChange={e=> setvalues({...VALUES , password: e.target.value})} placeholder="Password" required />
        <button className='buttonX' type="submit">Create Account</button>
        <h3>
        Already registered? <span><Link to="/login">LOGIN</Link></span>
      </h3>
      </form>
      
    </div>
  );
};

export default SignupComponent;
