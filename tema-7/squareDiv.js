let square = document.querySelector('.upRightCorner');
let moveOnClick = function () {

    let squareDiv = document.getElementById('square');
    if (!(squareDiv.className === 'upRightCorner')) {
        squareDiv.className = 'upRightCorner'
    } else {
        squareDiv.className = 'downLeftCorner'
    }

}

square.addEventListener('click', moveOnClick);