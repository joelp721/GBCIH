let nav = 0;
let clicked = null;

//this will probably be changed later for RSVP implementation
let events= localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


function load()
{
    const dt = new Date();

    // console.log(dt);

    const day=dt.getDate();
    const month=dt.getMonth();
    const year=dt.getFullYear();

    // console.log(day,month,year);

    const firstDayOfMonth= new Date(year, month, 1);
    //this will give the number of days in the month
    const daysInMonth=new Date(year, month + 1, 0).getDate();
    // console.log(daysInMonth);

    const dateString=firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    // console.log(dateString);

    const paddingDays=weekdays.indexOf(dateString.split(', ')[0]);
    // console.log(paddingDays);

    for(let i=1; i<=paddingDays+daysInMonth; ++i)
    {
        const daySquare=document.createElement('div');
        daySquare.classList.add('day');

        if(i>paddingDays)
        {
            daySquare.innerText=i-paddingDays;

            daySquare.addEventListener('click', ()=> console.log('click'));
        }
        else
        {
            daySquare.classList.add('padding');
        }

        calendar.appendChild(daySquare);
    }
}

load();