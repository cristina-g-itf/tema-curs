//4 / x + 5 - x * (34 - x + 10) / 6 + x

let x = prompt("1.Please enter a number for our exercise:");
x = parseInt(x)

function addition(var1, var2) {
    let sum = var1 + var2;
    return sum;
}
function multiplication(e, f) {
    let mult = e * f;
    return mult;
}
function substraction(a, b) {
    let sub = a - b;
    return sub;
}
function division(c, d) {
    let div = c / d;
    return div;
}
let g = division(4, x);      // 4/x
let h = addition(g, 5);      // 4/x+5
let i = substraction(34, x);   //34-x
let j = addition(i, 10);    //34-x+10
let k = multiplication(x, j); //x*(34-x+10)
let l = division(k, 6);      //x*(34-x+10)/6
let m = substraction(h, l);
let n = addition(m, x);


console.log(n)
let theExercise1 = document.getElementById('ex1');
let theResult1 = document.createElement('div');
theResult1.innerHTML = 'Pentru x = ' + x + ' rezultatul este: ' + n;
theExercise1.appendChild(theResult1);

// program to check if the string is palindrome or not 

let string = prompt('2.Enter a string: ');
let isPalindorme = true;
function palindrome(string) {

    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) !== string.charAt(string.length - i - 1)) {
            isPalindrome = false;
        }
    }
    if(isPalindorme) {
        return 'Is a palindrome';
    } else {
        return 'Is not a palindrome';
    }
}

let ex2 = palindrome(string);

const index = 2;
console.log('The character at index ' + index + ' is ' + string.charAt(index));

console.log(ex2);
let theExercise2 = document.getElementById('ex2');
let theResult2 = document.createElement('div');
theResult2.innerHTML = 'Pentru sirul introdus ' + string + ' rezultatul este: ' + ex2;
theExercise2.appendChild(theResult2);

//the longest word in a string

function longestWord(string) {
    let str = string.split(" ");
    let longest = 0;
    let word = null;
    str.forEach(function (str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
let ex3 = 'The word Diclordifeniltriclormetilmetan is one of the longest words in romanian language'

console.log(longestWord(ex3));

let theExercise3 = document.getElementById('ex3');
let theResult3 = document.createElement('div');
theResult3.innerHTML = longestWord(ex3)
theExercise3.appendChild(theResult3);

//obiect al carui proprietati vor avea valoarea de tip functie
let choose = prompt('4.Please enter a number: ')

let object = {
    additionFunction: function addition(var1, var2) {
        this.result = var1 + var2;
        return this;
    },
    substractionFunction: function substraction(a) {
        this.result = a - this.result;
        return this;
    },
    multiplicationFunction: function multiplication(e) {
        this.result = e * this.result;
        return this;
    },
    divisionFunction: function division(c) {
        this.result = this.result / c;
        return this;
    }
}
let ex4 = object.additionFunction(5, choose).divisionFunction(2).multiplicationFunction(4).substractionFunction(10)
console.log(ex4)

//functie care calculeaza factorialul

let number = prompt('5.Enter a number: ');
function factorial(z) {
    if (z === 0 || z === 1) {
        return 1;
    } else {
        if (Math.ceil(z) !== Math.floor(z)) {
            return '-1';
        } else {
            return factorial(z - 1) * z;

        }
    }
}
let ex5 = factorial(number)
console.log(ex5);

let theExercise5 = document.getElementById('ex5');
let theResult5 = document.createElement('div');
theResult5.innerHTML = ex5;
theExercise5.appendChild(theResult5);




// [2, 4, 8, 1, 9, 4, 5, 5, 8, 9, 1, 3, 2]

let array = [2, 4, 8, 1, 9, 4, 5, 5, 8, 9, 1, 3, 2];
let y = prompt('6.Please choose if you want to add or multiply the elements (a/m):')

let choiceObj = {
    addition: function add() {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            array[i] = parseInt(arrai[i])
            sum = sum + array[i];
        }
        return sum
    },
    multiplication: function mult() {
        let inmultire = 1;
        for (let i = 0; i < array.length; i++) {
            inmultire = inmultire * array[i];
        }
        return inmultire;
    },
    choice: function yourChoice() {
        let choice = ' '
        if (y === 'a') {
            choice = choiceObj.addition()
        } else {
            choice = choiceObj.multiplication()
        }
        return choice;
    }
}
let ex6 = 'Rezultatul este: ' + choiceObj.choice();
console.log(ex6);

let theExercise6 = document.getElementById('ex6');
let theResult6 = document.createElement('div');
theResult6.innerHTML = ex6;
theExercise6.appendChild(theResult6);


//Scrieti un obiect care sa contina date despre o persoana
let persoana = {
    firstName: prompt('7.Enter your first name: '),
    lastName: prompt('7.Enter your last name: '),
    gender: prompt('7.Enter your gender (m/f): '),
    driverLicence: prompt('7.Do you have a driver licence (y/n): '),
    age: prompt('7.Enter your age: '),
    children: prompt('7.Do you have children (y/n)? '),
    writePoliteName: function politeName() {
        let prefix = 'Mr. '
        if (persoana.gender === 'f') {
            prefix = 'Mrs. ';
        }
        return politeName = prefix + persoana.firstName + ' ' + persoana.lastName;
    },
    writeChildren: function children() {
        let answer = 'Do you like children?'
        if (persoana.children === 'y') {
            answer = 'How many children do you have?'
        }
        return answer;
    },
    writeDriverLicence: function driver() {
        let drive = 'How long do you have your licence?'
        if (persoana.driverLicence === 'n') {
            drive = 'Do you like cars?'
        }
        return drive;
    },
    writeAge: function age() {
        let age = persoana.age + ' is a beautiful age! You will never live this age again so make it worth it!'
        return age
    }

}
console.log(persoana.writePoliteName());
console.log(persoana.writeChildren());
console.log(persoana.writeDriverLicence());
console.log(persoana.writeAge());

