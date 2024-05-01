import React,{useEffect , useState}  from "react";
import axios from 'axios'


function Home(){
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('')
  useEffect(()=> {
    axios.get('/')
    .then(res =>{
      if(res.data.Status === "SUCCESS"){
        navigate('/login')
        setAuth(true);
      }
      else {
        setAuth(false);
        setMessage(res.data.Error);
      }
    })
  },[])
}