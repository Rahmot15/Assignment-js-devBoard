// Background Theme change section  
let color = ['#78A083','#9EC8B9','#A3C7D6','#D4ADFC','#E5DDC5','#FFD0D0','#E17564','#A27B5C'];
let i = 0;

document.getElementById('btn-theme')
    .addEventListener('click', function() {
        i = i < color.length ? ++i : 0;
        document.getElementById('body-theme').style.background = color[i]
        
    })



// date and day section 
function currentDayDate() {

    const dayTime = document.getElementById('day');
    const dateTime = document.getElementById('date');

    const newDate = new Date();
    const options = {month: 'long', day: 'numeric', year: 'numeric'};
    const currentDay = newDate.toLocaleDateString('en-US', {weekday: 'long'});
    const currentDate = newDate.toLocaleDateString('en-US', options);

    dayTime.textContent = ` ${currentDay}`;
    dateTime.textContent = ` ${currentDate}`;

}
currentDayDate()




