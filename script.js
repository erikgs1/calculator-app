var result = document.getElementById('result');
function isOperatorValid(operator) {
    console.log(operator);
    return (operator === '+' || operator === '-' || operator === '*' || operator === '/' || operator === '%');
}
function calculator(num1, op, num2){
    var number1 = Number(num1);
    var number2 = Number(num2);
    if(typeof number1 !== 'number' || op !== '+' || typeof number2 !== 'number'){
        result = result.innerHTML = 'Conta inválida';
    }
    else{
        var soma = number1 + number2; 
        result = result.innerHTML = soma;
    }
}
