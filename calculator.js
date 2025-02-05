//This will contain the javascript for this project
let store = 0;
let num1 = 0;
let num2 = 0;
let opereration;

//update the calculotor display
function updateDisplay(){
    if(!store){
        document.getElementById("input").textContent = "0"
    }else{
        document.getElementById("input").textContent = store.split('').slice(-12).join('');
        //getting the last 12 items so that it will still fit the display 
    }
    
} 


const NUMBERS = Array.from(document.querySelectorAll('.number'));
const OPERATORS = Array.from(document.querySelectorAll('.math'));
const MODIFIER = Array.from(document.querySelectorAll('.modifier'));
function addListenerToButtons(setsOfButtons, operation){
   setsOfButtons.forEach(function(set){
    set.forEach(function(button){
        button.addEventListener('click', function(){
            operation(button);
        });
    });
   })
}

addListenerToButtons([NUMBERS, MODIFIER], getButtonValue);
addListenerToButtons([OPERATORS], getMathValue);






document.querySelector('#delete').addEventListener('click', function(){
    del();
})

document.querySelector('#clear').addEventListener('click', function clear(){
    store = "";
    updateDisplay();
})

 
//get the value of the Math Buttons and Store them
function getMathValue(button){
    if(!num1){
        num1 = store;
        store = 0;
        updateDisplay();
    }
    opereration = button.innerText;
}


function getButtonValue(button){
    let buttonValue = button.innerText;
    if(!store){

        store = String(buttonValue);
        updateDisplay();
    }else{
        store +=String(buttonValue);
        updateDisplay();
    }
}


function del(){
 if(store !== ''){
 store = store.slice(0, -1);
 updateDisplay();
 }else{
    updateDisplay();
    return;
 }
}



function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2;
}

function remainder(num1, num2){
    return num1 % num2;
}

function operate(num1, num2, operator){
    let result;
    switch(operator){
        case '+':
        result = add(num1, num2);
        console.log('adding');
        break;


        case '-':
        result = subtract(num1, num2);
        console.log('subtracting');
        break;

        case '*':
        result = multiply(num1, num2);
        console.log('multiplying');
        break;

        case "/":
        result = divide(num1, num2);
        console.log('dividing', result);
        break;

        case "%":
            result = remainder(num1, num2);
            console.log('finding the remainder', result);
            break;

        default:
        console.log('no operation');
    }

    return result;
}