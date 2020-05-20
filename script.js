var buttons = document.querySelectorAll(".buttons");
var num1 = 0;
var num2 = 0;
var ope = '';
for (var i = 0; i < buttons.length; i++ ){
    buttons[i].onclick = function(){
        firstNumber(this.innerHTML);
    };
}
function firstNumber(num){
    document.getElementById('result1').innerHTML = num;
}