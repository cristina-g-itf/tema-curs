let date = new Date();
let monthArray = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let createCalendar = function () {

    let daysOfMonthDiv = document.getElementById('daysOfMonthDiv')

    let currentMonth = monthArray[date.getMonth()];
    document.getElementById('month').innerHTML = currentMonth
    let today = date.getDate() + ',' + date.getFullYear()
    document.getElementById('today').innerHTML = today;
    let noOfEmptyBox = new Date(date.getFullYear(), date.getMonth(), 0).getDay()
    
    daysOfMonthDiv.innerHTML = ''
      
    for (let j = 0; j < noOfEmptyBox; j++) {

          let emptyBox = document.createElement('div')
          daysOfMonthDiv.appendChild(emptyBox)
    }

    let noOfDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    for (let i = 1; i <= noOfDays; i++) {

        let monthDays = document.createElement('div');
        monthDays.innerHTML = i;
        daysOfMonthDiv.appendChild(monthDays)
    }

    let previousMonth = document.getElementById('previousMonth');
    previousMonth.innerHTML = '&#8249;' + monthArray[date.getMonth() - 1]

    let nextMonth = document.getElementById('nextMonth');
    nextMonth.innerHTML = monthArray[date.getMonth() + 1] + '&#8250;'



document.getElementById('previousMonth').addEventListener('click', function () {
    
    date.setMonth(date.getMonth() - 1)
    createCalendar()
})
document.getElementById('nextMonth').addEventListener('click', function () {
    date.setMonth(date.getMonth() + 1)
    createCalendar()
})
}

createCalendar();