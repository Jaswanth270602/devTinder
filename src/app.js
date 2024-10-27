const express = require('express');
const app = express();

app.use("/test",(req,res) => {
    res.send("Hello World from test!");
});

app.use("/best",(req,res) => {
    res.send("Hello World from best!");
});

app.use("/",(req,res) => {
    res.send("Hello World from dashboard!");
});

app.listen(3000, () => {
    console.log("server listening on port 3000");
});