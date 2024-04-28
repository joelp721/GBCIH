let currentUser=null;
//function setCurrentUser(uName)
function setCurrentUser(uName, uType)
{
    //currentUser={uName, uType};
    currentUser={
        username: uName,
        userType: uType
    };
}

function clearCurrentUser()
{
    currentUser=null;
}