const express = require("express");
const app = express();

// Trả về static resource (image, css, js...) cho client => Đăng ký thư mục public
app.use(express.static("public"));

// import path để làm việc với các đường dẫn tập tin và thư mục trên hệ thống tập tin của máy tính
const path = require("path");
// Trả về một file html cho client => Chuyển sang Trang chủ
// Giờ cứ có một request tới trang chủ "/", thì trang home.html sẽ được trả về.
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "home.html"));
});

// Trả về một file html cho client => Chuyển sang Trang Editor
app.get("/editor", (req, res) => {
  res.sendFile(path.resolve(__dirname, "editor.html"));
});

// Ứng dụng này khởi động một máy chủ và lắng nghe trên cổng 3000 để chờ kết nối.
const port = 3000;
app.listen(port, () => {
  console.log("App listening on port 3000");
});
