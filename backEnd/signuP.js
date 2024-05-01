import express from "express"
import bodyParser from "body-parser"
import path from 'path';    
import  Jwt  from "jsonwebtoken";
import bcrypt from 'bcrypt'
import cors from 'cors'
import cookieParser from "cookie-parser";
import connectionDb from "./db.js";

const app = express();
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods : ["POST","GET"],
  credentials : true
}));
app.use(cookieParser());

const db = connectionDb;
const saltRounds = 10;

app.post('/signup', async (req , res)=>{ //for the sign up page
  
  const sql = "INSERT INTO users (`USERNAME`, `EMAIL`,`PASS_WORD`) VALUES (?,?,?) ";
   await bcrypt.hash(req.body.password , saltRounds , (err , hashPs)=>{
      if(err) return res.json({Error : "ERROR FOR HASHING THE PASSWORD"}) ;
   const VALUES = [
      req.body.username,
      req.body.email,
      hashPs
   ] 
   db.query(sql , VALUES ,  (err , result)=>{
    if(err) return res.json({Error: "INSERTING DATA ERROR IN SERVER"});
    else return res.json({Status : "SUCCESS"})
   })
    })
  })

  app.post('/login' , async (req , res)=>{
    const sql = "SELECT * FROM users WHERE email=? "
    db.query(sql , [req.body.email] ,(err,data)=>{
     if(err) return res.json({Error: "INSERTING DATA ERROR IN SERVER"});
     if(data.length>0) {
       bcrypt.compare(req.body.password.toString() , data[0].PASS_WORD , (err , response)=>{
          if(err) return res.json({Error : "ERROR COMAPARING PASSWORD"});
          if(response){ 
            const name = data[0].username;
            const token = Jwt.sign({name}, "jwt.secret-key", {expiresIn : '1d'});
            res.cookie('token', token);
            return res.json({Status : "SUCCESS" , Type : data[0].TYPEOF });}
          else return res.json({Error : "WRONG EMAIL OR PASSWORD"});
       })}

      else return res.json({Error: "No email existing"})
    })
  })


app.listen(5000 ,() =>{
  console.log("server listening on 5000");
})
