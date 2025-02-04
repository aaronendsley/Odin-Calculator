//This will contain the javascript for this project
let store = 0;



const NUMBERS = Array.from(document.querySelectorAll('.number'));
const OPERATORS = Array.from(document.querySelectorAll('.math'));
NUMBERS.forEach(function(button){
    button.addEventListener('click', function(){
        getNumber(button);
    });
});

document.querySelector('#delete').addEventListener('click', function(){
    del();
})

    

function getNumber(button){
    let buttonValue = button.innerText;
    if(!store){
        store = String(buttonValue);
    }else{
        store +=String(buttonValue);
    }
    
    
    console.log(store);

}


function del(){
 if(store !== ''){
 store = store.slice(0, -1);
 console.log(store);
 }else{
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

        default:
        console.log('no operation');
    }

    return result;
}