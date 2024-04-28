// script.js

// script.js modifications for content-specific search
function search() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var allContentElements = document.querySelectorAll('.content'); // Modify this selector to target relevant content
    var searchResults = [];
    allContentElements.forEach(function(element) {
        if(element.textContent.toLowerCase().includes(input)) {
            searchResults.push(element);
            element.style.display = 'block'; // Highlight or simply show matching elements
        } else {
            element.style.display = 'none'; // Hide non-matching elements
        }
    });
    console.log("Search Results:", searchResults.map(e => e.textContent));
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