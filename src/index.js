const express = require("express");
const app = express();
const port = 4000;

const usersRoutes = require("./routes/users.js");
const middlewareLogRequest = require("../src/middleware/logs.js");

app.use(middlewareLogRequest);

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.json({
    nama: "Rizqi",
    email: "rizqi@gmail.com",
  });
});

app.listen(port, () => {
  console.log(`API jalan di ${port}`);
});

// app.get("/get", (req, res) => {
//   res.send("GET Method");
// });

// app.post("/", (req, res) => {
//   res.send("POST Method");
// });
