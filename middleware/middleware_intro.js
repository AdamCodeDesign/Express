const express = require("express");
const app = express();

app.use(
    function (req, res, next) {
        console.log(
            "middleware request method: ",
            req.method,
            "url: ",
            req.url,
        );
        next();
    },
    function (req, res, next) {
        console.log(
            "kolejne middleware request method: ",
            req.method,
            "url: ",
            req.url,
        );
        next();
    },
);

app.get("/*", (req, res) => {
    res.status(200).send("test website");
});

app.listen(8080);
