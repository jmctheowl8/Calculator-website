const currentDisplay = document.getElementById("cur")
const previousResult = document.getElementById("prev")
let firstInt = 0
let secondInt = 0

function appendToDisplay(value){
    currentDisplay.value += value
    console.log(value);
}
function clearDisplay(){
    currentDisplay.value = ""
}

function enter(){ 
    let result = eval(currentDisplay.value)    
    previousResult.value = result
    clearDisplay()
}
