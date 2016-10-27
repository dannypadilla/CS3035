
var express = require("express");

var app = express();

//var mongojs = require("mongojs");
//var db = mongojs("contactList", ["contactList"]);

app.use(express.static(__dirname + "/public") );

app.get("/contactList", function(request, response) {
    console.log("I received a GET request");

    person1 = {
	name: "Rick",
	email: "bro@bruh.br",
	number: "111-111-1111"
    };
    person2 = {
	name: "Rhianna",
	email: "rhi@hoIsLife.ho",
	number: "222-222-2222"
    };
    person3 = {
	name: "Roy O",
	email: "Orbison@son.com",
	number: "333-333-3333"
    };

    var contactList = [person1, person2, person3];
    response.json(contactList);

//app.post("/contactList", function(request, response) {

});

app.listen(3000);

console.log("server running on port 3000");