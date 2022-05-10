let r1 = 'Jane Smith has $12,450 in her bank account.<br />';
let r2 = '$12,450 is a lot of money<br />';
let r3 = 'Jane Smith plans to buy a Toyota Yaris.<br />';
let r4 = 'Jane Smith will use her $12,450 to buy a Toyota Yaris.<br />';
let r5 = '$12,450 is a lot of money for a Toyota Yaris.<br />'
let a = r2.length
let e = '=';
let result = e.repeat(a); //repeat element

function myFunction(a, b, c, d, e) {    //functia de concatenare
    return a + b + c + d + e;
}

let theDiv1Element = document.getElementById('theDiv1');//primul text
theDiv1.innerHTML = myFunction(r1, r2, r3, r4, r5);

let theDivElement = document.getElementById('theDiv');
theDiv.innerHTML = result;

let theDiv2Element = document.getElementById('theDiv2');//al doilea text
theDiv2.innerHTML = myFunction(r2, r5, r3, r1, r4);

let theDivBisElement = document.getElementById('theDivBis');
theDivBis.innerHTML = result;


let theDiv3Element = document.getElementById('theDiv3');//al treilea text
theDiv3.innerHTML = myFunction(r3, r5, r4, r1, r2);

