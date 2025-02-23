const express = require("express");
const app = express();

app.get(
    "/user/:id",
    function (req, res, next) {
        if (req.params.id === "admin") {
            next("route");
        } else {
            next();
        }
    },
    function (req, res, next) {
        res.send("Response with id: " + req.params.id);
    },
);

app.get("/user/:id", function (req, res, next) {
    res.send("Response from admin id: " + req.params.id);
});

app.listen(8080);
