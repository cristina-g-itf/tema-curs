console.log('Cristina Grigoroiu');
function myFunction() {
    let person = prompt("Please enter your name");
    if (person !== "") {
      document.getElementById("name").innerHTML =
      "Hello " + person + "! I'm Cristina! Here is the town that I live in:";
    }
    else{
         document.getElementById("name").innerHTML =
      "Hello! I'm Cristina! Here is the town that I live in:";
    }
}
