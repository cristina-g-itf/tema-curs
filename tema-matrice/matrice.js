let a = [];
let n = m = prompt("Please enter a number for the rows and columns:"); //se citeste de la tastatura n,m
let x = prompt("Please enter a number for the row where = should be:"); //se citeste de la tastatura x
let newRow = ' <br />'

for(let i = 0; i < n; i++){        //se parcurg nr de randuri
    
    a[i] = new Array(m);           //se creeaza un rand nou cariua sa ii adaugam coloane
    
    for(let j = 0; j < m; j++){     //se parcurg nr de coloane
        a[i][j] = 0;                //se da valoarea initiala 0

        if(i % 2 === 0){            //daca i PAR
            if(j % 2 === 0){        //daca j PAR
                a[i][j] = 1;        //daca (i,j) PARE afiseaza 0
            }else{
                a[i][j] = 0;}       //daca i PAR si j impar afiseaza 1
        }else{
            if(j % 2 === 0){       
                a[i][j] = 0;         //daca i impar si j PAR afiseaza 1
            }else{
                a[i][j] = 1;}        //daca (i,j) impare afiseaza 0
        }
        if(i === x-1){ 
            a[i][j] = '=';           //daca i=x afiseaza =
        }
        a[i][j+1] = newRow;          //rand nou
    }
    m--;                             //scadem nr de coloane
     
    
}
console.log(a)


let theMatrixElement = document.getElementById('theMatrix');
document.getElementById("theMatrix").style.fontSize = "large"
theMatrix.innerHTML = a;