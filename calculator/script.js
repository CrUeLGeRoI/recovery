const input = document.querySelector('input')
const button = document.querySelector('.num')
const icon = document.querySelector('.icon')
const div = document.querySelector('.popup_window')
let history = document.querySelector('.main')
let last_expression = document.querySelector('.last_expression')
let resultDone = false

//show number
function showNum(self){
    if (input.value == "0"){
        input.value = null
        input.value += self.value
    }
    else{
        input.value += self.value
    }
    if(resultDone == true){
        input.value = self.value
        resultDone = false
    }
}


//show operator
function showOperator(self){
    
    let lastCharacter = input.value[input.value.length-1]

    if (lastCharacter == "+" || lastCharacter == "-"|| lastCharacter == "*" || lastCharacter == "/"){
        let newSymbol = input.value.slice(0, -1)
        input.value = newSymbol
    }
    input.value += self.value
}

//calculate
function calculate(){
    let math = input.value
    let result = eval(math)
    let span = document.createElement('span')
        span.className = "exp"
    let li = document.createElement('li')
    let dot = document.querySelector('.decimal') 

    span.innerHTML = input.value + " = " + result
    last_expression.innerHTML = input.value + " = " + result

    input.value = result
    //HOMETASK
    if (Number.isInteger(result) == true){
        
    }

    li.appendChild(span)
    history.appendChild(li)

    resultDone = true
}

//delete
function del(){
    input.value = "0"
}

//click on icon
icon.onclick = function(){
    div.classList.toggle('visible')
}

function saveExpressions(){
    let allSpans = document.querySelectorAll('.exp')
    let allSpansValues = []

    for(let i = 0; i < allSpans.length; i += 1){
        allSpansValues[i] = allSpans[i].innerHTML + "     "
    }

    let file = new File(allSpansValues, "results.txt", {
        type: "text/plain",
        });
        
    let link = document.createElement('a');
        link.download = file.name;
        
        link.href = URL.createObjectURL(file);
        link.click();
        URL.revokeObjectURL(link.href);
}