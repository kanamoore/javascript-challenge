// from data.js
var tableData = data;

// * Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to a web page and then adds new rows of data for each UFO sighting.
tbody = d3.select("tbody");

tableData.forEach(ufodata => {
  // console.log(data);
  var row = tbody.append("tr");
  Object.entries(ufodata).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});

//   * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

// * Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time`

table = d3.select("#ufo-table");
