let myArray = [1, 9, 4, 2, 8, 4, 7, 2, 1, 5, 4, 4, 3, 3, 8, 9];
let sum = 0;
let index = 0;
let mySecondArray = [];
let numConsArray = [];

for (let i = 0; i < myArray.length; i++) {      //afisare myArray si suma elementelor
    console.log(myArray[i]);
    sum += myArray[i];
}
console.log('Suma elementelor din myArray este ' + sum);

for(let i = 0; i < myArray.length; i++){          //de cate ori apare cifra 4
    if(myArray[i] === 4){
        index++;
    }
}
console.log('Cifra 4 apare de ' + index + ' ori');

for(let i = 0; i < myArray.length; i++){           //mySecondArray
    mySecondArray.push(myArray[i] - 1);
}
console.log('mySecondArray este: ' + mySecondArray);

for(let i = 0; i < myArray.length; i++){           //numerele la fel care apar pe pozitii consecutive
    if(myArray[i] === myArray[i+1]){
        numConsArray.push(myArray[i]);
    }
}
console.log('Numerele la fel care apar consecutiv sunt: ' + numConsArray);

let p = prompt("Please enter a number between 1 and 16");      //afisarea nr de pe pozitia aleasa in promt
for(let i = 0; i < mySecondArray.length; i++){
    if(i === p - 1){
    alert('Numarul care se afla pe pozitia aleasa este: ' + mySecondArray[p - 1]);
    }
}

for (let i = 0; i < mySecondArray.length; i++) {    //punem in fiecare mySecondArray[i] un array de 3 elemente
    let smallArray = [];
    if (mySecondArray[i] <= 4) {
      for (let j = 0; j < 3; j++) {
        smallArray[j] = mySecondArray[i] + j;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        smallArray[j] = mySecondArray[i] - j;
      }
    }
    mySecondArray[i] = '[' + smallArray + ']';
  }
console.log(mySecondArray);

