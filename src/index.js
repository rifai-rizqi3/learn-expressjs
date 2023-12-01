require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");
const app = express();
const port = PORT;

const usersRoutes = require("./routes/users.js");
const middlewareLogRequest = require("../src/middleware/logs.js");
const upload = require("../src/middleware/multer");

app.use(middlewareLogRequest);
app.use(express.json()); // request ini mengizinkan semua request body berupa json
app.use("/assets", express.static("public/images"));

app.use("/users", usersRoutes);
app.post("/upload", upload.single("photo"), (req, res) => {
  res.json({
    message: "Upload Berhasil",
  });
});

app.listen(port, () => {
  console.log(`API jalan di ${port}`);
});

// app.get("/", (req, res) => {
//   res.json({
//     nama: "Rizqi",
//     email: "rizqi@gmail.com",
//   });
// });

// app.get("/get", (req, res) => {
//   res.send("GET Method");
// });

// app.post("/", (req, res) => {
//   res.send("POST Method");
// });
