// Homework #2

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
      if (typeof value == "number")
        return new CenteredTextCell(String(value));
      else
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

console.log("Problem # 1:");
restaurants1.push([new CenteredTextCell("Mastro's Ocean\nClub"), new CenteredTextCell("$$$$")]);
restaurants1.push([new CenteredTextCell("Denny's"), new CenteredTextCell("$")]);
//restaurants1.push([new CenteredTextCell("Bucca de\nBeppo"), new CenteredTextCell("$$")]);

console.log(drawTable(restaurants1));

// Problem 2

var restaurants2 = [];

function BorderedCell(text) {
    this.text = text.split("\n");
}

BorderedCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
	return Math.max(width, line.length);
    }, 0);
};

BorderedCell.prototype.minHeight = function() {
    return this.text.length;
};

BorderedCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
	var line = this.text[i] || "";
	result.push("|" + repeat(width - line.length ) + line + "|" );
    }
    return result;
};
console.log();
console.log("Problem #2:");
restaurants2.push([new BorderedCell("Mastro's Ocean\nClub"), new BorderedCell("$$$$")]);
restaurants2.push([new BorderedCell("Denny's"), new BorderedCell("$")]);
console.log(drawTable(restaurants2));