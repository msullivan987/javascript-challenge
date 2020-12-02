// from data.js
let tableData = data;

let tbody = d3.select("tbody");

//Append data to table body on webpage
tableData.forEach((sighting) => {
    let row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        let cell = row.append("td");
        cell.text(value);
    });
});

//Create event handler and listener to allow for filtering of data table

let button = d3.select("#filter-btn");

let form = d3.select("#datetime");

// Event handlers 
button.on("click", filterTable);
form.on("submit", filterTable);

// Event handler function for the form
function filterTable() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the value
    let inputValue = d3.select("#datetime").node().value;

    let filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(inputValue);
    console.log(filteredData);

    //Clear old table
    let oldTableBody = d3.select("#ufo-table-body")
    oldTableBody.html("");

    //Recreate table
    filteredData.forEach((sighting) => {
        let row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });

}
