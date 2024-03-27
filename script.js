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