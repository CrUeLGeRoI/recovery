// function multiplyByNum(num1, num2) {
//     return num1 ** num2
// }


// function powerOf(pow) {
//     console.log(pow**2)
// }

// while (true) {
//     let getNum = prompt('Enter number')
//     alert(multiplyByTwo(getNum))
//     if (getNum == 'stop') {
//         break
//     }
//     powerOf(8)
// }

// const button = document.getElementById('change_color')
// const textInput = document.getElementById('text')
// const h1 = document.getElementById('main')
// const burger_icon = document.getElementById('burger_icon')
// const menu = document.querySelector('.menu')

// burger_icon.onclick = function () {
//     menu.classList.toggle('visible')
// }
// menu.onclick = function () {
//     menu.classList.toggle('visible')
// }
const btnAdd = document.getElementById('btn')
const textInput = document.getElementById('text')
const ul = document.getElementById('list')
btnAdd.onclick = function(){
    let text = textInput.value
    console.log(text)
    let li = document.createElement('li')
    li.innerHTML = text
}
// button.onclick = function () {
//     h1.classList.toggle('green-color')
// }