var buttons = document.querySelectorAll(".buttons");
for (var i = 0; i < buttons.length; i++ ){
    // console.log(buttons[i]);
    buttons[i].onclick = function(){
        console.log(this.innerHTML);
    };
}
function firstNumber(num){
    if (num === Number){
        document.getElementById('result1').innerHTML;
    }
}