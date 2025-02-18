const express = require("express");
const app = express();

app.get("/news/:id([0-9]{1,10})", (req, res) => {
    res.status(200).send("News Id: " + req.params.id);
});

app.get("/article/:id(*)", (req, res) => {
    res.status(200).send("Article Id: " + req.params.id);
});

const handler = (req, res) => {
    res.json({ data: req.params.id });
};

app.get("/api/:id(*)", handler);
app.get("/rest/:id(*)", handler);

app.get("/", (req, res) => {
    res.status(200).send("Strona głowna");
});

app.get("*", (req, res) => {
    res.status(404).send("Invalid url");
});

app.listen(8080);
