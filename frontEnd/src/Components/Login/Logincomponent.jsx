import React ,{useState} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './Login.css';
import axios from 'axios';


const LoginComponent = () => {
  const [VALUES , setvalues]= useState({
    email: '',
    password: '',
  }) 
const navigate = useNavigate(); 
axios.defaults.withCredentials =true;
const handleSubmit= (event)=>{
  event.preventDefault();
  axios.post('http://localhost:5000/login' , VALUES)
  .then(res => {
     if(res.data.Status === "SUCCESS"){
      alert("thanks for login in");
      if(res.data.typpe === "admin")
      navigate("/adminpage");    //adapt this line with your code
      else navigate("/home");     //also adapt this to your code
     } else alert(res.data.Error);
  })
  .then(err => console.log(err));
}
  return (
    
    <div>
      <title>Login Page version 1.0</title>
      <div className ="container-login">
        
          <div className ="loger-box">
              <div className="form-box-login">
                  <form onSubmit={handleSubmit}  action="#">
                      <h1 > LOGIN </h1>
                      <div className="input-box-login" >
                          <input className="inputCur" type="email"  name="email"  onChange={e=>setvalues({...VALUES , email : e.target.value})} placeholder="Email" required/>
                      </div>
                      <div className="input-box-login" >
                          <input className="inputCur" type="password" name="password" onChange={e=>setvalues({...VALUES , password : e.target.value})}  placeholder="Password" required/>
                        </div>
                      <button type="submit" className="btn"> LOG IN</button>
                      <div className="register">
                          <h4  className="qst"> you don’t have an account? <span><Link to="/Signup">Signup</Link></span></h4>
                      </div>

                  </form> 
              </div>
          </div>

      </div>


</div>

  );
};

export default LoginComponent;