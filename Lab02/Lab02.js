/*
  Problem # 1 -
  Write a function that launches a prompt that asks for a number
  between 10 and 20. If the number is, launch an alert confirmation.
  If not, repeat the process until a valid number is entered. (1pt)
*/
function promptNum() {
  var x = 0;
  while (x < 10 || x > 20) {
    x = prompt("Enter a number between 10 and 20: ");
  }
  alert(x + " is within range. Good job!");
};

/*
  Problem # 2 -
  Fizz Buzz Crackle Pop: Write a function with a loop that prints
  numbers from 0 to 99, each on a new line.
  If the number is divisible by 3, print “fizz” next to it.
  If the the number is divisible by 5, print “buzz”.
  If the number is divisible by both, print “fizz buzz”.
  If it’s divisible by 4 print “crackle”,
  if it’s divisible by 6 print “pop”, and if it’s divisible by
  both 4 and 6 print “crackle pop”. If the number is divisible
  by all of these numbers, print “fizz buzz crackle pop”. (2 pts)
*/
function fizzBuzzCracklePop() {
  for (var i = 0; i < 100; i++) {
    var words1 = "";
    var words2 = "";
    var group1 = false;
    var group2 = false;

    if (i % 3 == 0) {
      words1 += "fizz ";
    }
    if (i % 5 == 0) {
      words1 += "buzz ";
    }
    if (i % 3 == 0 && i % 5 == 0) {
      group1 = true;
    }
    if (i % 4 == 0) {
      words2 += "crackle ";
    }
    if (i % 6 == 0) {
      words2 += "pop "
    }
    if (i % 4 == 0 && i % 6 == 0) {
      group2 = true;
    }
    if (group1 && group2) {
      console.log(i + " " + words1 + words2);
    } else if (group1) {
      console.log(i + " " + words1);
    } else {
      console.log(i + " " + words2);
    }
  }
};

/*
  Problem # 3 -
  Write a function that prints ASCII art that includes mountains,
  lakes(symbolized by ~~~~~), flats, and forests (symbolized by
  AAAAAAA), where each can be of arbitrary length (by an argument
  passed into the outer function for each landscape feature ---
  the outer function should have 4 arguments). (2 pts).
*/
function asciiArt(mountain, lake, flats, forest) {
  var art = "";
  var buildMountain = function(m) {
    for(var i = 0; i < m; i++) {
      art += "/^\\";
    }
  };
  var buildLake = function(l) {
    for(var i = 0; i < l; i++) {
      art += "~~~~~";
    }
  };
  var buildFlats = function(fl) {
    for(var i = 0; i < fl; i++) {
      art += "_____";
    }
  };
  var buildForest = function(fo) {
    for(var i = 0; i < fo; i++) {
      art += "AAAAAAA";
    }
  };
  buildMountain(mountain);
  buildLake(lake);
  buildFlats(flats);
  buildForest(forest);
  buildMountain(mountain);
  return art;
};

/*
  Problem # 4 -
  Create a closure that takes the number to an arbitrary power
  (the original function takes in the power as an argument, the
  closure takes the number to be raised to the power as an argument).
  (2 pts)
*/
function power(raiseUp) {
  return function(arbitrary) {
    var sum = 1;
    for (var i = 1; i < raiseUp + 1; i++) {
      sum *= arbitrary;
    }
    return sum;
  };
};


/*
  Problem # 5 -
  Call all of these methods in your code to demo them; for # 4 call
  both the main function to create a closure, and the closure itself
  to demo. (1 pt)
*/

promptNum();
fizzBuzzCracklePop();
console.log(asciiArt(4, 1, 1, 4) );
var base = power(6);
console.log(base(2) );
