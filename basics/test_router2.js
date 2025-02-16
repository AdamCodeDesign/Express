const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log('strona główna 2')
    res.status(200).send("Strona główna z Router2");
});

router.get("/hello", (req, res) => {
    console.log('podstrona')
    res.status(200).send("Podstrona hello");
});

module.exports = router;
