document.addEventListener('DOMContentLoaded', function()
{
    const registrationForm= document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event)
    {
        event.preventDefault();

        const uNameIn= document.getElementById('username');
        const pWordIn= document.getElementById('password');
        const uTypeIn= document.getElementById('userType');

        const uName=uNameIn.value.trim();
        const pWord=pWordIn.value;
        const uType= uTypeIn.value;


        console.log('Submitted username:', uName);
        console.log('Submitted password:', pWord);
        console.log('User type:', uType);

        if(uName===''||pWord==='')
        {
            alert('Please fill in all fields.');
            return;
        }

        //check if uName already exists
        if(localStorage.getItem(uName))
        {
            alert('Username already exists. Please choose a different username.');
            return;
        }

        const userData={
            username: uName,
            password: pWord,
            isOrganization: uType ==='organization'
        };
        
        console.log('Storing user data:', userData);

        localStorage.setItem(uName, JSON.stringify(userData));
        alert('Registration successful!');

        console.log('User data stored in local storage:', localStorage.getItem(uName));
        //Reset form fields
        uNameIn.value='';
        pWordIn.value='';
        uTypeIn.value='user';
    });
});