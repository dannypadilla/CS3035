// Lab 06

var fs = require("fs");

function fileToString(filePath) {
    return fs.readFileSync(filePath, "utf8");;
};

//console.log(fileToString("Lab06.html"));

var http = require("http");

var server = http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(fileToString("Lab06.html"));
	response.end();
});

server.listen(8000);