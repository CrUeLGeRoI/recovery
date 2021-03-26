const ul = document.querySelector('.todo__list')
const btnAdd = document.querySelector('.btnAdd')
const textInput = document.querySelector('.text')

btnAdd.onclick = function () {

    let text = textInput.value
    textInput.value = ""
    console.log(text)
    
    if (text.length <= 10) {
        //creating li
        let li = document.createElement("li")
            li.innerHTML = text
            li.classList = "list"

            //creating input<type="checkbox"> or just checkbox
            let checkbox = document.createElement("input")
            checkbox.setAttribute("type","checkbox")
            checkbox.classList.add("checkbox", "checkbox::before")

            //if checkbox was clicked
            checkbox.onclick = function(){
                if (checkbox.checked){
                    li.classList.add("checked")
                    console.log("Hello")
                }
                else{
                    li.classList.remove("checked")
                }
            }
            //appearing checkbox in li
            li.appendChild(checkbox)

            //appearing deletor
            let div_with_deletor = document.createElement("div")
            let deletor = document.createElement("i")
            deletor.classList.add("fas", "fa-times")

            div_with_deletor.appendChild(deletor)

            div_with_deletor.classList.add("icon")

            li.appendChild(div_with_deletor)

            //function for deletor

            
        //appearing li in ul
        ul.appendChild(li)

    }
    else {
       alert('No') 
    }
}
