const ul = document.querySelector('.todo__list')
const btnAdd = document.querySelector('.btnAdd')
const textInput = document.querySelector('.text')

btnAdd.onclick = function () {

    let text = textInput.value
    textInput.value = ""
    console.log(text)

    if (text.length <= 10) {
        let li = document.createElement("li")
            li.innerHTML = text
            li.classList = "list"

        ul.appendChild(li)

        console.log(li)
    }
    else {
       alert('No') 
    }
}