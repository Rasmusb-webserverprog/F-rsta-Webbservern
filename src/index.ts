const express = require('express');
//import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));


app.use(express.static(__dirname + "/wwwroot/"));
app.listen(port, () => console.log(`Example app listening on port port!`));