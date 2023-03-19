const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send('this is the homepage');
})

app.get("/healthy", (req, res) => {
    res.json('healthy');
})

app.listen(port, (req, res) => {
    console.log(`Server running at ${port}`);
});
module.exports = app;
