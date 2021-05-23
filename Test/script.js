// while(true){
//     let num = prompt("Введи число больше 100!")
//     if (num < 100 && num != null){
//         alert("БОЛЬШЕ 100!!!")
//     }
//     else if(isNaN(num)){
//         alert("Не буквы, а строку!!!")
//     }
//     else if (num == null){
//         break
//     }
//     else{
//         break
//     }
// }
// var button = document.createElement('button')
// button.textContent = 'Random color'
// document.body.appendChild(button)
//     var colors = ['blue', 'pink', 'yellow', 'red', '#000', '#fff']
//     button.onclick = function() {
//        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
//     }

let i = 0
//buttons
let button_plus = document.querySelector('.plus')
let button_minus = document.querySelector('.minus')
let button_calculate = document.querySelector('.calculate')
//inputs
let num = document.querySelector('.number')
let result = document.querySelector('.result_text')
num.value = i


button_plus.onclick = function(){
   i++
   num.value = i
}
button_minus.onclick = function(){
   i--
   num.value = i
}
button_calculate.onclick = function(){
   button_plus.disabled = true
   button_minus.disabled = true
}