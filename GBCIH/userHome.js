let nav = 0;
let clicked = null;

//this will probably be changed later for RSVP implementation
let events= localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function openModal(date)
{
    clicked=date;

    const eventForDay = events.find(e => e.date === clicked);
    if(eventForDay)
    {
        // console.log("Event exists");
        document.getElementById('eventText').innerText = eventForDay.title;
        deleteEventModal.style.display='block';
    }
    else
    {
        newEventModal.style.display = 'block';
    }
    
    backDrop.style.display = 'block';
}

function load()
{
    const dt = new Date();

    if(nav !== 0)
    {
        dt.setMonth(new Date().getMonth() + nav);
    }
    // console.log(dt);

    const day=dt.getDate();
    const month=dt.getMonth();
    const year=dt.getFullYear();

    // console.log(day,month,year);

    const firstDayOfMonth= new Date(year, month, 1);
    //this will give the number of days in the month
    const lastDayOfMonth = new Date(year, month + 1 ,0);
    const daysInMonth = lastDayOfMonth.getDate();
    // const daysInMonth=new Date(year, month + 1, 0).getDate();
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

    document.getElementById('monthDisplay').innerText =`${dt.toLocaleDateString('en-us',{month: 'long'})} ${year}`

    calendar.innerHTML = '';    //rerenders the calendar to prevent duplicate calendars
   
    for(let i=1; i<=paddingDays+daysInMonth; ++i)
    {
        const daySquare=document.createElement('div');
        daySquare.classList.add('day');

        const dayString = `${month+1}/${i-paddingDays}/${year}`;

        if(i>paddingDays)
        {
            daySquare.innerText=i-paddingDays;

            const eventForDay= events.find(e => e.date === dayString) 

            if(i - paddingDays===day&&nav===0)
            {
                daySquare.id='currentDay';
                
            }
            if(eventForDay)
            {
                const eventDiv = document.createElement('div');
                eventDiv.classList.add('event');
                eventDiv.innerText=eventForDay.title;
                daySquare.appendChild(eventDiv);
            }

            daySquare.addEventListener('click', () => openModal(dayString));
        }
        else
        {
            daySquare.classList.add('padding');
        }

        calendar.appendChild(daySquare);
    }
}

function closeModal()
{
    eventTitleInput.classList.remove('error');
    newEventModal.style.display='none';
    deleteEventModal.style.display='none';
    backDrop.style.display='none';
    eventTitleInput.value='';
    clicked=null;
    load();

}

function saveEvent()
{   
    if(eventTitleInput.value)
    {
        eventTitleInput.classList.remove('error');

        events.push({
            date: clicked,
            title: eventTitleInput.value,
        });
        
        //save to local storage
        localStorage.setItem('events', JSON.stringify(events));
        closeModal();
    }
    else
    {
        eventTitleInput.classList.add('error');
    }
}

function deleteEvent()
{
    events= events.filter(e => e.date !== clicked);
    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
}

function initButtons()
{
    document.getElementById('nextButton').addEventListener('click', () => {
        nav++;
        load();
    });
    document.getElementById('backButton').addEventListener('click', () => {
        nav--;
        load();
    });

    document.getElementById('saveButton').addEventListener('click', saveEvent);
    document.getElementById('cancelButton').addEventListener('click', closeModal);

    document.getElementById('deleteButton').addEventListener('click', deleteEvent);
    document.getElementById('closeButton').addEventListener('click', closeModal);

}
// Modify userHome.js to include RSVP capabilities
function rsvpEvent(eventId) {
    let events = JSON.parse(localStorage.getItem('events')) || [];
    const event = events.find(e => e.id === eventId);
    if(event) {
        let myEvents = JSON.parse(localStorage.getItem('myEvents')) || [];
        myEvents.push(event);
        localStorage.setItem('myEvents', JSON.stringify(myEvents));
        alert('RSVP successful!');
    } else {
        alert('Event not found.');
    }
}

// Enhance the event display logic to include an RSVP button for each efvven
// This example assumes you have a function to display events; mowify as needed
function displayEvents() {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const container = document.querySelector('.event-tabs-container');
    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'event-card';

        const titleElement = document.createElement('div');
        titleElement.className = 'event-title';
        titleElement.innerText = event.title;

        const summaryElement = document.createElement('div');
        summaryElement.className = 'event-summary';
        summaryElement.innerText = event.summary;

        const rsvpButton = document.createElement('button');
        rsvpButton.className = 'rsvp-button';
        rsvpButton.innerText = 'RSVP';
        rsvpButton.addEventListener('click', () => rsvpEvent(event.id));

        eventElement.appendChild(titleElement);
        eventElement.appendChild(summaryElement);
        eventElement.appendChild(rsvpButton);

        container.appendChild(eventElement);
    });
}


document.addEventListener('DOMContentLoaded', function() {
    displayEvents();
});

initButtons();
load();