
var path = require('path');
var express = require('express');

var app = express();
var port = (process.argv[2] || 8080);
var rootPath = (process.argv[3] || path.join(__dirname, 'public'));

app.use(express.static(rootPath));

app.listen(port)

console.log("----------------------");
console.log("Lithium WebServer v1.0");
console.log("----------------------");
console.log("Server up and running !!");
console.log("Port: " + port);
console.log("Root: " + rootPath);
