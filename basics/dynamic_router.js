const express = require("express");
const app = express();

app.get("/home/:date/:userName", (req, res) => {
    res.status(200).send(
        "Date: " + req.params.date + " " + "Username: " + req.params.userName,
    );
});

app.listen(8080)