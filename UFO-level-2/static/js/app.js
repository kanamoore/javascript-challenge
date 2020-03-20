// from data.js
var tableData = data;

// Using the UFO dataset provided, append a table to a web page and then adds new rows of data for each UFO sighting.
var tbody = d3.select("tbody");
var option_list = [];

tableData.forEach(ufodata => {
  var row = tbody.append("tr");
  Object.entries(ufodata).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
    option_list.push("");
    option_list.push(ufodata.shape);
  });
});

console.log(option_list);

// Create a dynamic option for selecting a shape in search form
uniqueoptionArray = new Set(option_list);
uniqueoptionArray.forEach(function(option) {
  var sel = document.getElementById("FormControlSelect1");
  var opt = document.createElement("option");
  opt.appendChild(document.createTextNode(option));
  opt.value = option;
  sel.appendChild(opt);
});

// Use a date form and search through data based on input
var button = d3.select("#filter-btn");

button.on("click", function() {
  var date_input = d3.select("#datetime");
  var city_input = d3.select("#city");
  var state_input = d3.select("#state");
  var country_input = d3.select("#country");
  var shape_input = d3.select(".shape");

  // retrieve input value
  var date_input_value = date_input
    .property("value")
    .trim()
    .toLowerCase();
  var city_input_value = city_input
    .property("value")
    .trim()
    .toLowerCase();
  var state_input_value = state_input
    .property("value")
    .trim()
    .toLowerCase();
  var country_input_value = country_input
    .property("value")
    .trim()
    .toLowerCase();
  var shape_input_value = shape_input.property("value");

  // show the result in console
  console.log(date_input_value);
  console.log(city_input_value);
  console.log(state_input_value);
  console.log(country_input_value);
  console.log(shape_input_value);
  tbody.html("");

  // var values = [
  //   date_input_value,
  //   city_input_value,
  //   state_input_value,
  //   country_input_value,
  //   shape_input_value
  // ];

  // var filterData = tableData.filter((row, values) => {
  //   values.forEach(v => {
  //     if (v !== "") {
  //       return row[v] === v;
  //     } else {
  //       return tableData;
  //     }
  //   });
  // });

  // // Use input to filter data
  var filteredData = tableData.filter(row => {
    if (date_input_value !== "") {
      return row.datetime === date_input_value;
    } else {
      return tableData;
    }
  });

  var filteredData_2 = filteredData.filter(row => {
    if (city_input_value !== "") {
      return row.city === city_input_value;
    } else {
      return filteredData;
    }
  });

  var filteredData_3 = filteredData_2.filter(row => {
    if (state_input_value !== "") {
      return row.state === state_input_value;
    } else {
      return filteredData_2;
    }
  });

  var filteredData_4 = filteredData_3.filter(row => {
    if (country_input_value !== "") {
      return row.country === country_input_value;
    } else {
      return filteredData_3;
    }
  });

  var filteredData_5 = filteredData_4.filter(row => {
    if (shape_input_value !== "") {
      return row.shape === shape_input_value;
    } else {
      return filteredData_4;
    }
  });

  console.log(filteredData_5);

  if (filteredData_5.length >= 1) {
    filteredData_5.forEach(filtered_data => {
      var row = tbody.append("tr");
      Object.entries(filtered_data).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  } else {
    tbody
      .append("h5")
      .text("Data not found. Please retry with different criteria!");
  }
});
