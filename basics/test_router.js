const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log('strona główna')
    res.status(200).send("Strona główna z Router");
});

module.exports = router;
