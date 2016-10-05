// Homework #2
"use strict";
function rowHeights(rows) {
  return rows.map(function(row) {
    return row.reduce(function(max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

function colWidths(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);
  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(" ");
  }

  function drawRow(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n");
  }
  return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

function TextCell(text) {
  this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};

TextCell.prototype.minHeight = function() {
  return this.text.length;
};

TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

function UnderlinedCell(inner) {
  this.inner = inner;
}

UnderlinedCell.prototype.minWidth = function() {
  return this.inner.minWidth();
};

UnderlinedCell.prototype.minHeight = function() {
  return this.inner.minHeight() + 1;
};

UnderlinedCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height - 1).concat([repeat("-", width)]);
};

function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function(row) {
    return keys.map(function(name) {
      var value = row[name];
//      if (typeof value == "number")
//        return new BorderedCell(String(value));
//      else
        return new TextCell(String(value));
    });
  });
  return [headers].concat(body);
}

function RTextCell(text) {
    TextCell.call(this, text);
}

RTextCell.prototype = Object.create(TextCell.prototype);

RTextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
	var line = this.text[i] || "";
	result.push(repeat(" ", width - line.length) + line);
    }
    return result;
};

// Problem 1
function CenteredTextCell(text) {
  TextCell.call(this, text);
}

CenteredTextCell.prototype = Object.create(TextCell.prototype);

CenteredTextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push( repeat(" ", Math.floor((width - line.length) / 2) ) + line +  repeat(" ", (width - line.length) / 2) );
  }
  return result;
};

var restaurants1 = [];
console.log();
console.log("Problem # 1:");
restaurants1.push([new CenteredTextCell("Mastro's Ocean\nClub"), new CenteredTextCell("$$$$")]);
restaurants1.push([new CenteredTextCell("Denny's"), new CenteredTextCell("$")]);

console.log(drawTable(restaurants1));

// Problem 2

var restaurants2 = [];

function BorderedCell(text) {
    this.text = text.split("\n");
}

BorderedCell.prototype = Object.create(TextCell.prototype);

BorderedCell.prototype.draw = function(width, height) {
    var result = [];
    result.push("-".repeat(width + 2) );
    for (var i = 0; i < height; i++) {
	var line = this.text[i] || "";
	result.push("|" + line + repeat(" ", width - line.length ) + "|" );
    }
    result.push("-".repeat(width + 2) );
    return result;
};
console.log();
console.log("Problem #2:");
restaurants2.push([new BorderedCell("Mastro's Ocean\nClub"), new BorderedCell("$$$$")]);
restaurants2.push([new BorderedCell("Denny's"), new BorderedCell("$")]);
console.log(drawTable(restaurants2));

// Problem 3

function rowToUpperCase(dataArray, rowNum) {
    return dataArray[rowNum].map(function(element) {
	return element.text.map(function(x) {
	    return x.toUpperCase();
	});

    });
}

/*
function cellToUpperCase(dataArray, rowNum) {
    return dataArray[rowNum].map(function(x) {
	return x.text[0].toUpperCase();
    });
}
*/

// Problem 4

function columnToUpperCase(dataArray, colNum) {
    return dataArray.map(function(element) {
	return element[colNum].text.map(function(x) {
	    return x.toUpperCase();
	});

    });
}

// Problem 5
console.log();
console.log("Problem #5:");

var person = [
    [{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
    {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
    {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}],
    [{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
    {"name": "Philibert Haveprbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
    {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}],
    [{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
    {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
    {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}]
];

var people = person.map(function(personRow) {
    return personRow.map(function(personElement) {
	return new BorderedCell(
	    "name: " + personElement.name + "\n" + 
		"sex: " + personElement.sex + "\n" + 
		"born: " + personElement.born + "\n" + 
		"died: " + personElement.died + "\n" + 
		"father: " + personElement.father + "\n" + 
		"mother: " + personElement.mother
	);
    });
});

//console.log(people[0][0].text[0].toUpperCase());
//console.log(people[0][0]);
//console.log(people);

console.log(drawTable(people));

// Problem # 6
console.log();
console.log("Problem #6:");
//console.log(rowToUpperCase(people, 2) );
//console.log(columnToUpperCase(people, 2) );

//theEnd
console.log();
