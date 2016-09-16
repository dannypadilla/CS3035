/* Homework 1 */

var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

console.log("Welcome! Enter 1 to continue, 0 to quit");
rl.setPrompt("AceyDeucy> ");
rl.prompt();

// Your gameplay goes here
// initialize pot ($) value
var pot = 200;
var player = 50;

// Deck object
var deck = {
  shuffledCards: [],
  suites: {
    0: "Diamonds",
    1: "Clubs",
    2: "Hearts",
    3: "Spade" },
  rankNumbers: [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"],
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
       console.log(this.printRandom(i) );
     }
  },
  print: function(card) {
    return this.getRank(card) + " of " + this.getSuite(card) ;
  },
  printRandom: function(card) {
    return this.getRank(this.shuffledCards[card]) + " of " + this.getSuite(this.shuffledCards[card]) ;
  },
  shuffleDeck: function() {
    for(var x = 0; x < this.size(); x++) {
	    var ran = Math.floor(Math.random() * this.shuffledCards.length );
	    var temp = this.shuffledCards[x];
	    this.shuffledCards[x] = this.shuffledCards[ran];
	    this.shuffledCards[ran] = temp;
    }
  },
  drawCard: function() {
    return this.shuffledCards.pop();
  }
};

deck.makeDeck();
deck.shuffleDeck();

rl.on("line",
      function(line) {
        if (line === "0") {
          rl.close();
        }
        deck.printAll();
        console.log("Cards left: " + deck.size() );

        if(deck.size() < 3) {
          deck.makeDeck();
          deck.shuffleDeck();
        }

        var card1 = deck.drawCard();
        var card2 = deck.drawCard();
        var card1Rank = card1 % 13;
        var card2Rank = card2 % 13;

        var card3 = deck.drawCard();
        var card3Rank = card3 % 13;

        console.log();
        console.log("----- Drawn Cards -----");
        console.log(deck.print(card1) );
        console.log(deck.print(card2) );
        console.log("-----------------------");
        console.log("Pot:    $" + pot);
        console.log("Player: $" + player);
        console.log();
        //ask a user something in the middle of this callback
        rl.question("How much do you want to bet? ",
        function(number) {
          //get info here, finish round so that it stays in sync.
          // Check betting

          console.log();
          console.log("Drew a " + deck.print(card3) );

          if((card3Rank > card1Rank) && (card3Rank < card2Rank) ) {
            player += Number(number);
            pot -= Number(number);
            console.log();
            console.log("********************");
            console.log("| You won the bet! |");
            console.log("********************");
            console.log();
          } else if( (card3Rank > card2Rank) && (card3Rank < card1Rank) ) {
            player += Number(number);
            pot -= Number(number);
            console.log();
            console.log("********************");
            console.log("| You won the bet! |" );
            console.log("********************");
            console.log();
          } else {
            pot += Number(number);
            player -= Number(number);
            console.log();
            console.log("*********************");
            console.log("| You lost the bet! |");
            console.log("*********************");
            console.log();
          }
          console.log("Pot:    $" + pot);
          console.log("Player: $" + player);
          console.log();

          if(pot <= 0) {
            console.log("/+++++++++++++++++++/");
            console.log("| You won the game! |");
            console.log("/+++++++++++++++++++/");
            console.log();
            pot = 200;
            player = 50;
          }
          if (player <= 0) {
            console.log("/++++++++++++++++++++/");
            console.log("| You lost the game! |");
            console.log("/++++++++++++++++++++/");
            console.log();
            pot = 200;
            player = 50;
          }
          //console.log(number);
          console.log("Enter 1 to play again, 0 to quit ");
          rl.prompt();
        });
      }).on("close",
      function() {
        // anything you want to have happen when the game ends here
        console.log("Cya!");
        process.exit(0);
      });
