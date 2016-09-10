var Deck = {
    suites: {
	0: "Hearts",
	1: "Diamonds",
	2: "Spade",
	3: "Clubs" },
    rank: [1, 2, 3, 4, 5, 6, 7, 8,
	   9, 10, 11, 12, 13],
    printAll: function() {
	console.log(this.suites.size);
    },
    printSum: function() {
	return this.suites[1] + " " + this.rank[2];
    },
    sizeOfDictionary: function() {
	var count = 0;
	while(this.suites[count] != undefined) {
	    count++;
	}
	return count;
    }
    
};

var deck = Deck;
console.log(deck.suites[1]);