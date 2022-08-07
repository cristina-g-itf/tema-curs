let date = new Date();
let monthArray = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let month = date.getMonth()
let year = date.getFullYear()
let createCalendar = function (month, year) {
    date.setMonth(month)
    date.setFullYear(year)
    

    let daysOfMonthDiv = document.getElementById('daysOfMonthDiv')
    daysOfMonthDiv.innerHTML = ''

    let currentMonth = monthArray[month];
    document.getElementById('month').innerHTML = currentMonth
    let today = date.getDate() + ',' + year
    document.getElementById('today').innerHTML = today;
    
    let noOfEmptyBox = new Date(year, month, 0).getDay()
    for (let j = 0; j < noOfEmptyBox; j++) {

        let emptyBox = document.createElement('div')
        daysOfMonthDiv.appendChild(emptyBox)
    }

    let noOfDays = new Date(year, month + 1, 0).getDate()
    for (let i = 1; i <= noOfDays; i++) {

        let monthDays = document.createElement('div');
        monthDays.innerHTML = i;
        daysOfMonthDiv.appendChild(monthDays)
        if(i === date.getDate()){
            monthDays.setAttribute('class','circle')
        }
        
    }

    let previousMonth = document.getElementById('previousMonth');
    if (month === 0) {
        previousMonth.innerHTML = '&#8249;' + monthArray[11]
    } else {
        previousMonth.innerHTML = '&#8249;' + monthArray[month - 1]
    }
    let nextMonth = document.getElementById('nextMonth');
    if (month === 11) {
        nextMonth.innerHTML = monthArray[0] + '&#8250;'

    } else {
        nextMonth.innerHTML = monthArray[month + 1] + '&#8250;'
    }


    document.getElementById('previousMonth').addEventListener('click', function () {

        if (month !== 0) {

            createCalendar(month - 1, year)
        }
        if (month === 0) {

            createCalendar(11, year - 1)
        }
    })
    document.getElementById('nextMonth').addEventListener('click', function () {

        if (month !== 11) {
            createCalendar(month + 1, year)
        }
        if (month === 11) {

            createCalendar(0, year + 1)
        }
    })
}

createCalendar(month, year);
