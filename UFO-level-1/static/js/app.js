// from data.js
var tableData = data;

tbody = d3.select("tbody");

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to a web page and then adds new rows of data for each UFO sighting.
tableData.forEach(ufodata => {
  var row = tbody.append("tr");
  Object.entries(ufodata).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Use a date form in your HTML document and write code that will listen for events and search through the `date/time`
var button = d3.select("#filter-btn");

button.on("click", function() {
  var date_input = d3.select("#datetime");
  var input_value = date_input.property("value");
  console.log(input_value);
  tbody.html("");

  // Add new data to table only if it meets input data
  var filteredData = tableData.filter(data => data.datetime === input_value);
  console.log(filteredData);
  if (filteredData.length >= 1) {
    filteredData.forEach(filtered_data => {
      var row = tbody.append("tr");
      Object.entries(filtered_data).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  } else {
    tbody.append("h5").text("Data not found. Please retry with another date!");
  }
});
