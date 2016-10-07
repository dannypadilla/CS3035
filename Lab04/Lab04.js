// Lab 04

"use strict";

// Part 1

function sentenceToArray(sentence) {
    // generate random number
    var ranNum = Math.floor(Math.random() * 4);
//    console.log(ranNum);
    if (ranNum < 3) {
	return sentence.split(" ");
    } else {
	throw new TestError("Less than 25%");
    }

}

// Part 2
function TestError(message) {
    this.message = message;
    this.stack = (new Error() ).stack;
}

TestError.prototype = Object.create(Error.prototype);
TestError.prototype.name = "TestError";

// Part 3

function wrapper(sentence) {
    while(true) {
	try {
	    return sentenceToArray(sentence);
	} catch(TestError) {
//	    console.log(TestError);
	}
    }
}

// Part 4
function tester(sentenceArray) {
    for( var i = 0; i < sentenceArray.length ; i ++) {
	var sentence = sentenceArray[i].split(" ");
	var sArray = wrapper(sentenceArray[i]);
	var passOrFail = "fail";
	for ( var j = 0; j < sentence.length; j++) {
	    if (sentence[j] === sArray[j]) {
		passOrFail = "passed";
	    } else {
		passOrFail = "fail";
	    }
	}
	console.log("Sentence " + (i + 1) + ": " + passOrFail);   
    }
}

// sentences
var s1 = "this is a sentence for lab 04";
var s2 = "the second sentence is here";
var s3 = "last sentence for this lab 4 assignment";

// array of all 3 arrays
var allSentences = [s1, s2, s3];

// Print out each part

//console.log();
//console.log("**********");
//console.log("| Part 3 |");
//console.log("**********");
//console.log();

//console.log(wrapper(s2) );

console.log();
console.log("**********");
console.log("| Part 4 |");
console.log("**********");
console.log();

tester(allSentences);

console.log();