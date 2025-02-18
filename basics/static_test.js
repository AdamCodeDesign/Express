const express = require("express");
const app = express();
const path = require("path");

const imgPath = path.join(__dirname, "../images");
console.log(imgPath);
app.use("/images", express.static(imgPath));

app.listen(8080);
