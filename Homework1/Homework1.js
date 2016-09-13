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
	var player = 50;
	// Deck object
       	var Deck = {
	    shuffledCards: [],
	    suites: {
		0: "Diamonds",
		1: "Clubs",
		2: "Hearts",
		3: "Spade" },
	    rankNumbers: [2, 3, 4, 5, 6, 7, 8, 9,
			  10, "J", "Q", "K", "A"],
	    size: function() {
		return this.shuffledCards.length;
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
		return this.rankNumbers[Math.floor(rank % this.rankNumbers.length)];
	    },
	    // print out entire deck; each suite along with each rank
	    printAll: function() {
		for(var i = 0; i < this.size(); i++) {
		    this.print(i);
		}
	    },
	    print: function(card) {
		console.log(this.getRank(this.shuffledCards[card] +
					 " of " + this.getSuite(this.shuffledCards[card]) ));
		console.log(card);
		console.log(this.shuffledCards[card]);
		console.log(this.getRank(this.shuffleCards[card]));
	    },
	    shuffleDeck: function() {
		for(var x = 0; x < this.shuffledCards.length; x++) {
		    // create random num between 0 and 51
		    var ran = Math.floor(Math.random() * this.shuffledCards.length );
		    // store current value at [x] for later paste
		    var temp = this.shuffledCards[x];
		    // assign value at [randomNumber] to [x]
		    this.shuffledCards[x] = this.shuffledCards[ran];
		    // store old value [x] to location of [randomNumber]
		    this.shuffledCards[ran] = temp;
		}
	    },
	    drawCard: function() {
		if(this.size === 0) {
		    return "No Cards Left";
		} else {
		    return this.shuffledCards.pop();
		}
	    }
	};
	var deck = Deck;
	deck.makeDeck();
	deck.shuffleDeck();
	deck.print(4);
	// Game Logic
	if (deck.size() < 3) {

	}
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