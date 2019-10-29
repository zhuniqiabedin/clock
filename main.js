// DOM Elements

const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');
const showAmPm = true;

// Show Time
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 24 ? 'AM' : 'PM';

    // 12hr Format
    hour = hour % 24 || 24;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(params) {
    return (parseInt(params, 10) < 10 ? '0' : '') + params;   
}
// Set Background and Greeting

function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();
    if(hour < 12) {
        document.body.style.backgroundImage = "url('../good-morning-background-2468.jpg')";
        greeting.textContent = 'Good Morning';
        // Morning
    } else if(hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('../distant-sun.jpg')";
        greeting.textContent = 'Good Afternon';

    } else {
        //Evening
        document.body.style.backgroundImage = "url('../2638979-evening-4k-background-hd.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';

    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}
// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

// Get Name
function getName() {
 if (localStorage.getItem('name') === null) {
     name.textContent = '[Enter Name]'
 } else {
     name.textContent = localStorage.getItem('name');
 }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        name.textContent = '[Enter Focus]'
    } else {
        name.textContent = localStorage.getItem('focus');
    }
   }

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// Run
showTime();
setBgGreet();
getName();
getFocus();
