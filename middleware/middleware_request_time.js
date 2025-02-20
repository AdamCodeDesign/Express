const express = require("express");
const app = express();

app.use(function (req, res, next) {
    req.requestTime =  new Date('pl');
    next();
});

app.get("/*", (req, res) => {
    res.status(200).send("Request time: " + req.requestTime);
});

app.listen(8080);
