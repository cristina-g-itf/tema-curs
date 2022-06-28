let year = 2021;
let month = 6;
let day = 1;
let dateDiv = document.getElementById('date');


for (new Date(year, month, day); new Date(year, month, day) <= new Date(); day += 6) {

    let newDate = new Date(year, month, day);

    let text = document.createTextNode(newDate);
    let divForEachDate = document.createElement('div');
    divForEachDate.appendChild(text);

    let newLine = document.createElement('br');

    dateDiv.appendChild(divForEachDate);
    dateDiv.appendChild(newLine);
}

