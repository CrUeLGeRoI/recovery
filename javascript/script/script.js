//task 1
// let x = Number(prompt("X"))
// if (x > 0) {
//     alert(x += 1)
// }
// else {
//     alert(x)
// }

//task 2
// let x = Number(prompt("X"))
// if (x > 0) {
//     alert(x += 1)
// }
// else {
//     alert(x -= 2)
// }

//task 3

// let x = Number(prompt("X"))
// if (x > 0) {
//     alert(x += 1)
// }
// else if (x < 0) {
//     alert(x -= 2)
// }
// else if (x == 0) {
//     x = 10
//     alert(x)
// }

//task 4
// let x = Number(prompt("X"))
// let y = Number(prompt("Y"))
// let z = Number(prompt("Z"))

// let count = 0

// if (x > 0) {
//     count++
// }

// if (y > 0) {
//     count++
// }

// if (z > 0) {
//     count++
// }

// alert(count)

//task 5
// let x = Number(prompt("X"))
// let y = Number(prompt("Y"))
// let z = Number(prompt("Z"))

// let count = 0
// let uncount = 0

// if (x > 0) {
//     count++
// }

// if (y > 0) {
//     count++
// }

// if (z > 0) {
//     count++
// }

// if (x < 0) {
//     uncount--
// }

// if (y < 0) {
//     uncount--
// }

// if (z < 0) {
//     uncount--
// }

// alert(`Положительных: ${count}`)
// alert(`Отрицательных: ${uncount}`)

//task 6
// let x = Number(prompt("X"))
// let y = Number(prompt("Y"))
// if (x > y) {
//     alert(x)
// }
// else if (y > x) {
//     alert(y)
// }

//task 7

// let x = Number(prompt("X"))
// let y = Number(prompt("Y"))
// let count = 0
// if (x > y) {
//     alert("Второй")
// }
// else if (y > x) {
//     alert("Первый")
// }

//task 8
// let x = Number(prompt("X"))
// let y = Number(prompt("Y"))
// if (x > y) {
//     alert(`Первый: ${x} Второй: ${y}`)
// }
// else if (y > x) {
//     alert(`Первый: ${y} Второй: ${x}`)
// }

//task 9

// let x = Number(prompt("X"))
// let y = Number(prompt("Y"))
// let a = Math.min(x, y)
// let b = Math.max(x, y)
// x = a
// y = b
// alert(`X = ${x}, Y = ${y}`)


//task 10
// let x = Number(prompt("X"))
// let y = Number(prompt("Y"))
// if (x != y) {
//     let count = x + y
//     x = count
//     y = count
//     alert(`${x}, ${y}`)
// }
// else if (x == y) {
//     x = 0
//     y = 0
//     alert(`${x}, ${y}`)
// }


//task 11

// let x = Number(prompt("X"))
// let y = Number(prompt("Y"))
// if (x != y) {
//     let count = Math.max(x, y)
//     x = count
//     y = count
//     alert(`${x}, ${y}`)
// }
// else if (x == y) {
//     x = 0
//     y = 0
//     alert(`${x}, ${y}`)
// }

//task 12

// let x = Number(prompt("X"))
// let y = Number(prompt("Y"))
// let z = Number(prompt("Z"))
// let count = Math.min(x, y, z)
// alert(count)

//task 13
// let x = Number(prompt("X"))
// let y = Number(prompt("Y"))
// let z = Number(prompt("Z"))
// if ((x > y && x < z || ((x < y) && (x > z)))) {
//     alert(x)
// }
// else if ((y > x && y < z || ((y < x) && (y > z)))) {
//     alert(y)
// }
// else {
//     alert(z)
// }

//task 14

// let x = Number(prompt("X"))
// let y = Number(prompt("Y"))
// let z = Number(prompt("Z"))
// let a = Math.min(x, y, z)
// let b = Math.max(x, y, z)
// alert(`Min ${a}, Max ${b}`)