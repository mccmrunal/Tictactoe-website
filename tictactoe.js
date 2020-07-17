var one = document.querySelector("#one")
var two = document.querySelector("#two")
var three = document.querySelector("#three")
var four = document.querySelector("#four")
var five = document.querySelector("#five")
var six = document.querySelector("#six")
var seven = document.querySelector("#seven")
var eight = document.querySelector("#eight")
var nine = document.querySelector("#nine")

function addx(){
  this.textContent = "X";
  this.style.fontSize = large;
}
function addo(){
  this.textContent = "O";
}
one.addEventListener('click',addx)
one.addEventListener('dblclick',addo)
two.addEventListener('click',addx)
two.addEventListener('dblclick',addo)
three.addEventListener('click',addx)
three.addEventListener('dblclick',addo)
four.addEventListener('click',addx)
four.addEventListener('dblclick',addo)
five.addEventListener('click',addx)
five.addEventListener('dblclick',addo)
six.addEventListener('click',addx)
six.addEventListener('dblclick',addo)
seven.addEventListener('click',addx)
seven.addEventListener('dblclick',addo)
eight.addEventListener('click',addx)
eight.addEventListener('dblclick',addo)
nine.addEventListener('click',addx)
nine.addEventListener('dblclick',addo)
