//login.js
document.addEventListener('DOMContentLoaded', function()
{
    const loginForm=document.querySelector('form');
    console.log('loginForm:',loginForm);
    loginForm.addEventListener('submit', function(event)
{
    event.preventDefault();

    const uNameIn=document.querySelector('input[type="text"');
    const pWordIn=document.querySelector('input[type="password"');

    const uName= uNameIn.value.trim();
    const pWord= pWordIn.value;

    //checking for username in local storage

    if(localStorage.getItem(uName))
    {
        const uData=JSON.parse(localStorage.getItem(uName));

        //check if password matches
        if(pWord=== uData.password)
        {
            //set the current user
            setCurrentUser(uName, uData.isOrganization ? 'organization': 'user');
            
            //direct based on the user type
            if(uData.isOrganization)
            { 
                window.location.href='orgHome.html';
            }        
            else
            {
                window.location.href='userHome.html';
            }
        }
        else
        {
            alert('Incorrect password. Please try again.');
        }
    }
    else
    {
        alert('Username not found.');
    }

});
});