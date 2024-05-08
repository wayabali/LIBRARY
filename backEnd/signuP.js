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
  methods : ["POST","GET","PUT","DELETE"],
  credentials : true
}));
app.use(cookieParser());

const db = connectionDb;
const saltRounds = 10;

app.post('/Signup', async (req , res)=>{ //for the sign up page
  
  const sql = "INSERT INTO Userr (`user_Name`, `gmail`,`passwordd`) VALUES (?,?,?) ";  //rani dayer ala hsab data base ta3ak
   await bcrypt.hash(req.body.password , saltRounds , (err , hashPs)=>{
      if(err) return res.json({Error : "ERROR FOR HASHING THE PASSWORD"}) ;
   const VALUES = [
      req.body.username,
      req.body.email,
      hashPs
   ] 
   db.query(sql , VALUES ,  (err , result)=>{
    if(err) return res.json({Error: "INSERTING DATA ERROR IN SERVER "});
    else return res.json({Status : "SUCCESS"})
   })
    })
  })

  app.post('/login' , async (req , res)=>{    //this fo login
    const sql = "SELECT * FROM userr WHERE gmail=? "    //rani dayer ala hsab dbb ta3ak
    db.query(sql , [req.body.email] ,(err,data)=>{
     if(err) return 
      res.json({Error: "INSERTING DATA ERROR IN SERVER yoo"});
     if(data.length>0) {
       bcrypt.compare(req.body.password.toString() , data[0].passwordd , (err , response)=>{
          if(err) return res.json({Error : "ERROR COMAPARING PASSWORD"});
          if(response){ 
            const name = data[0].username;
            const token = Jwt.sign({name}, "jwt.secret-key", {expiresIn : '1d'});
            res.cookie('token', token);
            return res.json({Status : "SUCCESS" , Type : data[0].typpe });}
          else return res.json({Error : "WRONG EMAIL OR PASSWORD"});
       })}

      else return res.json({Error: "No email existing"})
    })
  })
  app.get("/displaybook", (req, res) => {
    const selectBookData = "SELECT * FROM Book";
   
    db.query(selectBookData, (err, results) => {
        if (err) {
            console.error('Failed to fetch book infos:', err);
            res.sendStatus(500);
            return;
        }
        res.json(results);
    });
});
app.get("/api/reviews", (req, res) => {
  const query = `
  SELECT review.*, user.User_Name
  FROM review
  JOIN user ON review.idUser = user.idUser
`;
  db.query(query, (err, results) => {
      if (err) {
          console.error('Failed to fetch reviews:', err);
          res.sendStatus(500);
          return;
      }
      res.json(results);
  });
});
app.delete("/api/reviews/:idReview", (req, res) => {
  const { idReview } = req.params;
  const removeReview = "DELETE FROM `Reviews` WHERE `reviewID` = ?;";
  db.query(removeReview, [idReview], (err, result) => {
    if (err) {
      console.error("Error removing your review:", err);
      return res.status(500).json({ error: "Error removing review" });
    }
    console.log("Review removed successfully");
    res.status(200).json({ message: "Review removed successfully" });
  });
});
app.post("/api/INSERT/FAV", (req, res) => {
  const { idBook, idUser } = req.body;

  const addFav = "INSERT INTO `FavoritBook` (`bookID`, `userID`) VALUES ( ?, ?);";
  db.query(addFav, [idBook, idUser], (err, result) => {
      if (err) {
          console.error("Error inserting favorite:", err);
          return res.status(500).json({ error: "Error inserting favorite" });
      }
      console.log("Favorite inserted successfully");
      res.status(200).json({ message: "Favorite inserted successfully" });
  });
});
app.post("/api/insert", (req, res) => {
  const { bookReview, Rated , createdTime,IdUser} = req.body;

  const sqlInsert = "INSERT INTO `Reviews` ( `date`, `rate`, `userID`, `review_Desc`, `bookID`) VALUES ( ?, ?, ?, ?, ?);";
  db.query(sqlInsert, [createdTime, Rated,IdUser,bookReview], (err, result) => {
      if (err) {
          console.error("Error inserting review:", err);
          return res.status(500).json({ error: "Error inserting review" });
      }
      console.log("Review inserted successfully");
      res.status(200).json({ message: "Review inserted successfully" });
  });
});


app.listen(5000 ,() =>{
  console.log("server listening on 5000");
})

