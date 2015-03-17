var http = require('http');
var express = require('express');

var port = process.env.port || 1337;

var app = express();

app.use(express.static(__dirname));

app.get('/', function (request, response) {
    response.sendfile("index.html");
});

app.listen(port);