var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("contactList", ["contactList"]);
var bodyParser = require("body-parser");

app.use(bodyParser.json() );
// In New York

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

app.delete("/contactList/:id", function (request, response) {
    var id = request.params.id;
    console.log(id);
    db.contactList.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
	response.json(doc);
    });
});

app.get("/contactList/:id", function (request, response) {
    var id = request.params.id;
    console.log(id);
    db.contactList.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
	response.json(doc);
    });
});

app.put("/contactList/:id", function (request, response) {
    var id = request.params.id;
    console.log(id);
    db.contactList.findAndModify (
	{ query: { _id: mongojs.ObjectId(id) },
	  update: { $set: {name: request.body.name, email: request.body.email, number: request.body.number} },
	  new : true
	}, function (err, doc) {
	    response.json(doc);
	});
});

app.listen(3000);

console.log("server running on port 3000");