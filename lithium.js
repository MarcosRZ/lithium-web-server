/*
	Lithium Web Server v0.1 - Ultra-light, scalable, platform-independent, awesome web server.

	Author:		Marcos Rz
	Mail:		msucaro at gmail dot com
	Project: 	https://github.com/MarcosRZ/lithium-web-server
	
	Contact me for suggestions, issues, etc.
*/	
var logger = require('./middlewares/con_log_middleware.js');
var path = require('path');
var express = require('express');

var app = express();
var port = (process.argv[2] || 8080);
var rootPath = (process.argv[3] || path.join(__dirname, 'public'));

// Log requests to console
app.use(logger);

// Set document root
app.use(express.static(rootPath));

// Wake up!
app.listen(port)

// Print message to the console at boot
console.log("----------------------");
console.log("Lithium WebServer v0.1");
console.log("----------------------");
console.log("Server up and running !!");
console.log("Port: " + port);
console.log("Root: " + rootPath);
console.log("----------------------");

