// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear out any existing data
    tbody.html("");

    // Build the rows of the table
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        // Fill the cells of each row with a value
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
	});
}

function handleClick() {
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");
    let filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    if (city) {
        filteredData = filteredData.filter(row => row.city === city);
    };
    if (state) {
        filteredData = filteredData.filter(row => row.state === state);
    };
    if (country) {
        filteredData = filteredData.filter(row => row.country === country);
    };
    if (shape) {
        filteredData = filteredData.filter(row => row.shape === shape);
    };
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
d3.selectAll("#reset-btn").on("click", buildTable(tableData));

// Build the table when the page loads
buildTable(tableData);