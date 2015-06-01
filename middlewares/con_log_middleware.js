/*
	con_log_middleware.js - Express middleware that prints info to the console per request
	
	Author:	Marcos Rz.
	Mail:	msucaro@gmail.com

	This code is distributed as part of the lithium web server project.

	repo:	https://github.com/MarcosRZ/lithium-web-server.git
*/
module.exports = function(req, res, next){
        console.log("[" + new Date().toUTCString() + "] Incoming request from " + req.ip);
        next();
}
