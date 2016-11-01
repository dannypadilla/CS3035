
var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("contactList", ["contactList"]);
var bodyParser = require("body-parser");

app.use(bodyParser.json() );

app.use(express.static(__dirname + "/public") );

app.get("/contactList", function(request, response) {
    console.log("I received a GET request");
    
    db.contactList.find(function(err, docs) {
	console.log(docs);
	response.json(docs);
    });

});

app.post("/contactList", function(request, response) {
    console.log(request.body);
    db.contactList.insert(request.body, function(err, docs) {
	response.json(docs);
    });
});

app.listen(3000);

console.log("server running on port 3000");