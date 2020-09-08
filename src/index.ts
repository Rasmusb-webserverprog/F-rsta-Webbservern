const express = require('express');
//import express from "express";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname + "/wwwroot/"));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.post('/post', (req, res) => {
    let name : string = req.body["name"] || "NO NAME";
    
    res.send(`Hi ${name}!`);

    //res.json(req.body);
});



app.listen(port, () => console.log(`Example app listening on port port!`));