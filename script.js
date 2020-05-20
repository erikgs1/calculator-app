var buttons = document.querySelectorAll(".buttons");
var operator = document.querySelectorAll(".operator");

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