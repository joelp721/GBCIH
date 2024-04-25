// script.js

function search() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    // You'll need to replace the dummy data with your actual search logic
    var searchResults = []; // Array to hold search results
    // Perform your search logic here and populate the searchResults array

    // For demonstration purposes, let's just log the search input
    console.log("Search Query:", input);
}
// Define the openTab function
function openTab(tabName) {
    var i;
    var tabContent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

/*
// Define the orgPost function
function orgPost() {
    // initialize empty array
    const inputArray = [];

    // test input elements
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");

    // Get the values of the input elements
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
  
    // Add the values to the array
    inputArray.push(value1, value2, value3);

}
*/