var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) { return res.sendFile(__dirname + '/index.html'); });
app.use(express.static(__dirname + "/wwwroot/"));
app.listen(port, function () { return console.log("Example app listening on port port!"); });
//# sourceMappingURL=index.js.map