var express = require('express');
var app = express();
var port = 3000;
app.use(express.json());
app.use(express.static(__dirname + "/wwwroot/"));
app.get('/', function (req, res) { return res.sendFile(__dirname + '/index.html'); });
app.post('/post', function (req, res) {
    var name = req.body["name"] || "NO NAME";
    res.send("Hi " + name + "!");
});
app.listen(port, function () { return console.log("Example app listening on port port!"); });
//# sourceMappingURL=index.js.map