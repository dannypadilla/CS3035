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
       	var Deck = {
	    drawnCards: [],
	    suites: {
		0: "Hearts",
		1: "Diamonds",
		2: "Spade",
		3: "Clubs" },
	    rankNumbers: [2, 3, 4, 5, 6, 7, 8, 9,
			  10, "J", "Q", "K", "A"],
	    // print out deck
	    printDeck: function(rank, suite) {
		return this.rankNumbers[rank] + " of " + this.suites[suite];
	    },
	    // print out entire deck
	    printAll: function() {
		for(var i = 0; i < 4; i ++) {
		    for(var j = 0; j < this.rankNumbers.length; j++) {
			console.log(this.rankNumbers[j] +
				" of " + this.suites[i] );
		    }
		}
	    }
	};
	console.log(Deck.printAll() );

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