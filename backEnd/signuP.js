import express from "express"   
import  Jwt  from "jsonwebtoken";
import bcrypt from 'bcrypt'
import cors from 'cors'
import cookieParser from "cookie-parser";
 import mysql from 'mysql';



const app = express();
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods : ["POST","GET","DELETE","PUT"],
  credentials : true
}));
app.use(cookieParser());


const saltRounds = 10;
const db=mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'fares@585634/',
database: 'bibliothèque'});

 db.connect( (err)=>{
   if (err) return console.log("can not connect with dta base");
   else console.log("connection succ with data base ")
 })

app.post('/signup', async (req , res)=>{ //for the sign up page
  
  const sql = "INSERT INTO Userr (`user_Name`, `gmail`,`passwordd`) VALUES (?,?,?) ";  //rani dayer ala hsab data base ta3ak
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

  app.post('/login' , async (req , res)=>{    //this fo login
    const sql = "SELECT * FROM users WHERE gmail=? "    //rani dayer ala hsab dbb ta3ak
    db.query(sql , [req.body.email] ,(err,data)=>{
     if(err) return res.json({Error: "INSERTING DATA ERROR IN SERVER"});
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
// test books
  app.get("/homeBooks", (req, res) => {
    const selectBookData = "SELECT * FROM Book";
   
    db.query(selectBookData, (err, results) => {
        if (err) {
            console.error('Failed to fetch books:', err);
            res.sendStatus(500);
            return;
        }
        res.json(results);
    });
});

app.get('/homeCategory', async (req, res) => {
  try {
      const { category } = req.query;
      console.log('Category:', category);

      const query = 'SELECT * FROM Book WHERE category = ? LIMIT 1';
      db.query(query, [category], (error, results) => {
          if (error) {
              console.error('Error fetching books:', error);
              res.status(500).json({ error: 'Failed to fetch books' });
              return;
          }
          res.json(results);
      });
  } catch (error) {
      console.error('Error fetching books:', error);
      res.status(500).json({ error: 'Failed to fetch books' });
  }
});
app.post("/favoris", (req, res) => {
  const { idBook, idUser } = req.body;

  const addFav = "INSERT INTO `FavoritBook` ( `bookID`, `userID `) VALUES ( ?, ?);";
  db.query(addFav, [idBook, idUser], (err, result) => {
      if (err) {
          console.error("Error inserting favorite:", err);
          return res.status(500).json({ error: "Error inserting favorite" });
      }
      console.log("Favorite inserted successfully");
      res.status(200).json({ message: "Favorite inserted successfully" });
  });
});


app.listen(5000 ,() =>{
  console.log("server listening on 5000");
})

