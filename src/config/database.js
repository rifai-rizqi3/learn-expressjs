// const mongoose = require("mongoose");
// const url =
//   "mongodb+srv://rifairizqi3:RNRif@i1212@cluster0.aptfhkp.mongodb.net/express_sql?retryWrites=true&w=majority";
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
// const dbpool = mongoose.connection;

// module.exports = dbpool;

const mysql = require("mysql2"); //get mysql
const dbpool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}); // menghubungkan ke server

module.exports = dbpool.promise(); //bersifat asynchronously
