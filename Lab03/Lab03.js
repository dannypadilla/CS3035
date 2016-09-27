// Lab 03 - CS3035

// Part 1
console.log("----- Part 1 -----");
var anArrayOfArrays = [[1,2], [3,4,5], [6,6,7]];
console.log(anArrayOfArrays);
var flatten = anArrayOfArrays.reduce(function(a, b) {
	return a.concat(b);
});
console.log(flatten);


// Part 2
console.log("----- Part 2 -----")
var personArray = [
	{firstName: "Danny", lastName: "Padilla", year: 1986},
	{firstName: "Ken", lastName: "Kesey", year: 1935},
	{firstName: "Dalton", lastName: "Trumbo", year: 1905},
	{firstName: "Chuck", lastName: "Smith", year: 1942},
	{firstName: "William", lastName: "Flores", year: 2002},
	{firstName: "Charlie", lastName: "Padilla", year: 2004},
	{firstName: "Mark", lastName: "Padilla", year: 1967},
	{firstName: "Joe", lastName: "Padilla", year: 1993},
	{firstName: "Zack", lastName: "Snider", year: 1970},
	{firstName: "Eric", lastName: "Koston", year: 1960}
];



// Part 3
console.log("----- Part 3 -----");
var millennials = personArray.filter(function(person) {
	return person.year >= 1996;
});
millennials.map(function(millennial) {
	console.log(millennial.firstName + " " +
					millennial.lastName + " : Pokemon Go Fan");
});
