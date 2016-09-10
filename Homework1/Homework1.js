/* Homework 1 */

var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

console.log("Welcome! Enter 1 to continue, 0 to quit");
rl.setPrompt("AceyDeucy> ");
rl.prompt();
rl.on("line",
      function(line) {
	if (line === "0") {
	    rl.close();
	}

	// Your gameplay goes here
	// initialize pot ($) value
	var pot = 200;
	// user
	// Deck object
       	var Deck = {
	    drawnCards: [],
	    shuffledCards: [],
	    suites: {
		0: "Hearts",
		1: "Diamonds",
		2: "Spade",
		3: "Clubs" },
	    rankNumbers: [2, 3, 4, 5, 6, 7, 8, 9,
			  10, "J", "Q", "K", "A"],
	    size: function() {
		return shuffledCards.length;
	    },
	    // initialize deck for later shuffling
	    makeDeck: function() {
		for(var i = 0; i < 52; i++) {
		    this.shuffledCards.push(i);
		}
	    },
	    // takes a value and returns the suite
	    getSuite: function(suite) {
		return this.suites[Math.floor(suite / this.rankNumbers.length)];
	    },
	    // takes a value and returns the rank
	    getRank: function(rank) {
		return this.rankNumbers[Math.floor(rank / this.rankNumbers.length)];
	    },
	    // print out entire deck; suite and rank
	    printAll: function() {
		for(var i = 0; i < this.shuffledCards.length; i ++) {
		    console.log(this.getRank(this.shuffledCards[i]) + 
				" of " + this.getSuite(this.shuffledCards[i]) );
		}
	    },
	    shuffleCards: function() {
		for(var x = 0; x < this.shuffledCards.length; x++) {
		    // create random num between 0 and 51
		    var ran = Math.floor(Math.random() * this.shuffledCards.length );
		    // store current value at [x] for later paste
		    var temp = this.shuffledCards[x];
		    // assign value at [randomNumber] to [x]
		    this.shuffledCards[x] = this.shuffledCards[ran];
		    // store old value [x] to location of [randomNumber]
		    this.shuffledCards[ran] = temp;
		    // print with console log for testing
		    // console.log(this.shuffledCards[x]);
		    // console.log(this.shuffledCards[ran]);
		}
	    }
	};
	var deck = Deck;
	deck.makeDeck();
	console.log(deck.printAll() );

	//ask a user something in the middle of this callback
	rl.question("How much do you want to bet?",
		    function(number) {
			//get info here, finish round so that it stays in sync.
			console.log(number);
			console.log("Enter 1 to play again, 0 to quit");
			rl.prompt();
		    });
      }).on("close",
	    function() {
		    // anything you want to have happen when the game ends here
		console.log("Thanks!");		
		process.exit(0);
	    });