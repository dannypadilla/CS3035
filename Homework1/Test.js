var Deck = {
    suites: {
	1: "Hearts",
	2: "Diamonds",
	3: "Spade",
	4: "Clubs" },
    rank: [1, 2, 3, 4, 5, 6, 7, 8,
	   9, 10, 11, 12, 13],
    printAll: function() {
	console.log(this.suites.length );
    },
    printSum: function() {
	return this.suites[1] + " " + this.rank[2];
    }
    
};


Deck.printAll();
