// Lab 03 - CS3035

// Part 1

var anArrayOfArrays = [[1,2], [3,4,5], [6,6,7]];
console.log(anArrayOfArrays);
var flatten = anArrayOfArrays.reduce(function(a, b) {
	return a.concat(b);
	});
console.log(flatten);


// Part 2