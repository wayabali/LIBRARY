import mysql from 'mysql2'
const connectionDb = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'fares@585634/',
  database: 'bibliothéque',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

export default connectionDb;