
document.addEventListener('DOMContentLoaded', function()
{
   console.log(currentUser.uName);
   const orgNameElement= document.getElementById('orgName');
   if(currentUser) // && currentUser.uType==='organization')
   {
      orgNameElement.textContent=current.uName;
   }
   else
   {
      orgNameElement.textContent='Unknown Organization';
   }
}); 
 
 /*function displayOrgName()
 {
    const orgNameElement=document.getElementById('orgName');
    orgNameElement.innerText=currentUser ? currentUser.uName: 'Unknown Organization';
 } 
  document.addEventListener('DOMContentLoaded', function()
  {
    displayOrgName();
  });
  */
  /*
  // Initialize an empty array to store user input values
  let valuesArray = [];
    
  // Function to add user input value to the array and update display
  function addValue() {
      // Get the input value
      let inputValue = document.getElementById('inputValue').value;
      
      // Add the value to the array
      valuesArray.push(inputValue);
      
      // Add the value to my local storage
      localStorage.setItem("inputValue", JSON.stringify(valuesArray))

      // Update the display of the array
      displayArray();
      
      // Clear the input field for next input
      document.getElementById('inputValue').value = '';
  }

  // Function to display current values in the array
  function displayArray() {
      // Get the <ul> element where we will display the array
      let displayList = document.getElementById('displayArray');
      
      // Clear previous content
      displayList.innerHTML = '';
      
      // Loop through the array and add each value as a list item
  valuesArray.forEach(function(value, index) {
  let listItem = document.createElement('li');
  listItem.textContent = value;

// Add delete button for each item
   let deleteButton = document.createElement('span');
   deleteButton.textContent = '❌';
   deleteButton.className = 'delete';
   deleteButton.onclick = function() {
      // if select yet, delete
         deleteEntry(index);
      //else
      };

listItem.appendChild(deleteButton);

// Redirect to page2.html with array entries as query parameters
// window.location.href = 'userHome.html?values=' + encodeURIComponent(JSON.stringify(valuesArray))

displayList.appendChild(listItem);
});
}

// Function to delete an entry from the array
function deleteEntry(index) {
  valuesArray.splice(index, 1); // Remove the element at the specified index
  displayArray(); // Update the display
}
*/