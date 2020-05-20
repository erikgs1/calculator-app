var buttons = document.querySelectorAll(".buttons");
var operator = document.querySelectorAll(".operator");
var equal = document.querySelector(".equal");
var operations = {
    '+': function (param1, param2) {return param1 + param2;},
    '-': function (param1, param2) {return param1 - param2;},
    '*': function (param1, param2) {return param1 * param2;},
    '/': function (param1, param2) {return param1 / param2;},
    '%': function (param1, param2) {return param1 % param2;}
}
for (var i = 0; i < buttons.length; i++ ){
    buttons[i].onclick = function(){
        if(document.getElementById('result1').innerHTML === ''){
            firstNumber(this.innerHTML);
        }
        else {
            secondNumber(this.innerHTML);
        }
    };
}
function firstNumber(num){
    document.getElementById('result1').innerHTML = num;
}
function secondNumber(num2){
    document.getElementById('result2').innerHTML = num2;
}
//

for (var j = 0; j < operator.length; j++ ){
    operator[j].onclick = function(){
        operation(this.innerHTML);
    };
}
function operation(ope){
    document.getElementById('operator').innerHTML = ope;

}
equal.onclick = function(){
    var op = document.getElementById('operator').innerHTML;
    var soma = Number(document.getElementById('result1').innerHTML) + Number(document.getElementById('result2').innerHTML);
    var subtration = Number(document.getElementById('result1').innerHTML) - Number(document.getElementById('result2').innerHTML);
    var multiplication = Number(document.getElementById('result1').innerHTML) * Number(document.getElementById('result2').innerHTML);    
    var divison = Number(document.getElementById('result1').innerHTML) / Number(document.getElementById('result2').innerHTML);
    var mod = Number(document.getElementById('result1').innerHTML) % Number(document.getElementById('result2').innerHTML);
    if(op === '+'){
        document.getElementById('result').innerHTML = soma;
    }
    else if(op === '-'){
        document.getElementById('result').innerHTML = subtration;
    }
    else if(op === 'x'){
        document.getElementById('result').innerHTML = multiplication;
    }
    else if(op === '&#247;'){
        document.getElementById('result').innerHTML = divison;
    }
    else{
        document.getElementById('result').innerHTML = mod;
    }
}
// function calculator(e) {
//     return function(x, y){
//         if (typeof x !== 'number' || typeof y !== 'number'){
//             return false;
//         }
//     return operation[operator] (x, y);
//     }
// }