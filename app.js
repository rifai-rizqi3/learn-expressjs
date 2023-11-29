const express = require("express");
const app = express();
const port = 4000;

//endpoint utama
// app.use("/", (req, res, next) => {
//   res.send("Halaman Utama");
// });

app.get("/", (req, res) => {
  res.send("GET Method");
});

app.post("/", (req, res) => {
  res.send("POST Method");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
