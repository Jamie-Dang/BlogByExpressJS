const express = require("express");
const path = require("path");
const app = express();

// Trả về static resource (image, css, js...) cho client => Đăng ký thư mục public
app.use(express.static("public"));

// Trả về một file html cho client
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "home.html"));
});

// This app starts a server and listens on port 5000 for connections
const port = 3000;
app.listen(port, () => {
  console.log("App listening on port 3000");
});
