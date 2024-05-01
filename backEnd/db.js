import mysql from 'mysql2'
const connectionDb = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'library',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

export default connectionDb;