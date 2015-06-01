var http = require('http');

http.get("http://localhost:3333", function(res){

	var statusCode = res.statusCode;

	if (statusCode == 200){
		process.exit(0);
	} else {
		console.log("Something went wrong. Statuscode " + statusCode);
		process.exit(1);
	}
})
