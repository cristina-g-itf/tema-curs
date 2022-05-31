//first button

let firstButton = function () {
    alert('The first button was pressed');
}

//second button

let button2 = document.createElement('button');
button2.innerHTML = 'Second'
let divButton2 = document.getElementById('secondButton')
divButton2.appendChild(button2);

button2.addEventListener('click', function () {
    alert('The second button was pressed');
}
)

//third button

let createButton = function (text) {
    let button = document.createElement('button');
    button.innerHTML = text
    return button;
}

let buttonStart = createButton('Start')
let divButton3 = document.getElementById('thirdButton')
divButton3.appendChild(buttonStart);

let buttonStep1 = createButton('Step 1')
buttonStart.addEventListener('click', function () {
    divButton3.appendChild(buttonStep1)
}
)

let buttonStep2 = createButton('Step 2')
buttonStep1.addEventListener('click', function () {
    divButton3.appendChild(buttonStep2)
}
)

let buttonStep3 = createButton('Step 3')
buttonStep2.addEventListener('click', function () {
    divButton3.appendChild(buttonStep3)
}
)

let buttonStep4 = createButton('Step 4')
buttonStep3.addEventListener('click', function () {
    divButton3.appendChild(buttonStep4)
}
)

let buttonStep5 = createButton('Step 5')
buttonStep4.addEventListener('click', function () {
    divButton3.appendChild(buttonStep5)
}
)

buttonStep5.addEventListener('click', function () {
    alert('You have reach the end, there are no more buttons')
}
)



