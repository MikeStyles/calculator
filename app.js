const express = require("express");
const app = express();
const cal = require('./calculator');

app.get("/add", (req,res) => {
    var a= parseInt(req.query.a);
    var b= parseInt(req.query.b);
    res.json({
        result: cal.add(a,b)
    });
})

//exports to use anywhere
module.exports = app;