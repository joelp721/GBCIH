let currentUser=null;
//function setCurrentUser(uName)
function setCurrentUser(uName, uType)
{
    //currentUser={uName, uType};
    currentUser={
        username: uName,
        userType: uType
    };console.log("Current User Set: ", currentUser);
}

function clearCurrentUser() {
    currentUser = null;
    console.log("Current User Cleared");
}