// npm install cookie-session

const cookieSession = require("cookie-session");
const express = require("express");
const app = express();

app.use(
    cookieSession({
        name: "session",
        keys: ["key1", "key2"],
    }),
);

app.get("/*", (req, res) => {
    console.log("req.url", req.url);
    if (!req.session.views) req.session.views = 0;
    req.session.views++;
    if (req.session.views >= 40) {
        req.session = null;//niszczenie sesji
        req.session = { views: 1 };
    }
    res.end("Session nr:" + req.session.views);
});

app.listen(8080);
