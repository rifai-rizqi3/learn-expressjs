// const mongoose = require("mongoose"); //get mongoose
// const uri =
//   "mongodb+srv://rifairizqi3:RNRif@i1212@cluster0.aptfhkp.mongodb.net/express_sql?retryWrites=true&w=majority";
// mongoose.connect(uri);

// module.exports = uri.promise(); //bersifat asynchronously

const mysql = require("mysql2"); //get mysql
const dbpool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "RNRif@i1212",
  database: "express_sql",
}); // menghubungkan ke server

module.exports = dbpool.promise(); //bersifat asynchronously
