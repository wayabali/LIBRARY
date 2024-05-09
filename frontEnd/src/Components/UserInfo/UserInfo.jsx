'use client';
import React ,{useEffect,useState}from 'react'
 import image from '../../img/user.png';
import  './UserInfo.css';
import axios from 'axios';
import{Link } from 'react-router-dom';
 const UserInfo  = () => {

   // const [userId,setuserId] = useState(Number);
  
    const [user, setUser] = useState({
      userId: 0,
      username: "",
      Email: "",
      password: "",
      phone: 5121202
    });
    useEffect(() => {
      axios.get('http://localhost:5000/userid')
        .then(res => {
          
          setUser(res.data)
          console.log("id :"+res.data.userID)
        })
        .catch(err => console.log(err))
    });
  useEffect(() => {
    const picUserupload = document.getElementById("input-file");
    const picUser = document.getElementById("image-file-user");

    if (picUserupload) {
      picUserupload.onchange = () => {
        picUser.src = URL.createObjectURL(picUserupload.files[0]);
        
      };
    }
  }, []);
    
  return (
    <>
    <main className='Big-box'>

    <div className='div-Userinfo' >User Information :</div>
    {/* <div className='div-Userinfo'>FADL</div> */}
    
    <img src={image}  className='userImage' id="image-file-user"/>

              
     <label for="input-file" id="input-file1">update image</label>         
    <input type='file' accept='image/jpeg,image/png,image/jpg' id="input-file" className='input-file-update'></input>

    <label for="Username-field" id='Username-field1' >Username:</label> 
    <input type='text' id='Username-field' value={user.username}></input>
    <label for="password-field" id='password-field1'>Password: </label> 
    <input type='text' id='password-field' value={user.password}></input>
    <label for="phone-field" id='phone-field1'>phone:</label> 
    <input type='text' id='phone-field' value={user.phone}></input>
    <label for="Email-field" id='Email-field1'>Email Address :</label> 
    <input type='text' id='Email-field' value={user.Email}></input>
    </main>


    <div className='div-Userinfo-button'>
    <button className='button-Userinfo' to='/login'>HOME</button>
    
    <button className='button-Userinfo'>GENBES</button>
    <button className='button-Userinfo' >ABOUT</button>
    <Link to="/login"><button className='button-Userinfo' >Login</button></Link>
    <Link to="/signup"><button className='button-Userinfo-singup' >sing up for free</button></Link>
    
    
    </div>
    </>
  )
  
}
export default UserInfo ;