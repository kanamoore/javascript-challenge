// from data.js
var tableData = data;

// * Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to a web page and then adds new rows of data for each UFO sighting.
var tbody = d3.select("tbody");
var option_list = [];

tableData.forEach(ufodata => {
  var row = tbody.append("tr");
  Object.entries(ufodata).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
    // option_list.push(ufodata.shape);
  });
});

// Create a dynamic option for selecting a shape in search form
// let uniqueoptionArray = [...new Set(option_list)];
// var option = d3.select("#exampleFormControlSelect1");
// uniqueoptionArray.forEach(option_data => {
//   option.append(option_data);
// });

// * Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time`
var button = d3.select("#filter-btn");

button.on("click", function() {
  // var date_input = d3.select("#datetime");
  // var date_input_value = date_input.property("value");

  // var city_input = d3.select("#city");
  // var city_input_value = city_input.property("value");

  // var state_input = d3.select("#state");
  // var state_input_value = state_input.property("value");

  // var country_input = d3.select("#country");
  // var country_input_value = country_input.property("value");

  // var shape_input = d3.select("#shape");
  // var shape_input_value = shape_input.property("value");

  // if input has any value
  var date_input = d3.select("#datetime");
  var city_input = d3.select("#city");
  var state_input = d3.select("#state");
  var country_input = d3.select("#country");
  var shape_input = d3.select("#shape");

  // use that value. otherwise return all results
  var date_input_value = date_input.property("value");
  var city_input_value = city_input.property("value");
  var state_input_value = state_input.property("value");
  var country_input_value = country_input.property("value");
  var shape_input_value = shape_input.property("value");

  console.log(date_input_value);
  console.log(city_input_value);
  console.log(state_input_value);
  console.log(country_input_value);
  console.log(shape_input_value);
  tbody.html("");

  // Add new data to table only if it meets input data
  // use .filter attr()?

  // var filteredData = tableData.filter(
  //   data => data.datetime === date_input_value && data.city === city_input_value
  // );

  var filteredData = tableData.filter(
    data => data.datetime === date_input_value && data.city === city_input_value
  );
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
    tbody
      .append("h5")
      .text("Data not found. Please retry with differnt criteria!");
  }
});
