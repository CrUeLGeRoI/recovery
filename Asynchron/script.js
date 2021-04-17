//all elements
const btnBuy = document.querySelector('.buy')
const cart = document.querySelector('.icon_cart')
const header = document.querySelector('.header')
const area = document.querySelector('.trash')

let count = 0

btnBuy.addEventListener('click', renderModalWindow)
cart.addEventListener('click', renderTrash)

function renderTrash() {
    cart.classList.toggle('fa-window-close')
    document.querySelector('.trash').classList.toggle('show')
}

function renderModalWindow () {
    const div = document.createElement('div')
    div.classList.add('modal')
    div.insertAdjacentHTML('afterbegin', `
    
    <div class="modal-inner">
        <h1>Do u really want to buy this clothes?</h1>
        <button class="click-yes">Yes</button>
        <button class="click-no">No</button>
    </div>
    `)  
    document.body.appendChild(div)


    const btnYes = document.querySelector('.click-yes')
    const btnNo = document.querySelector('.click-no')

    closeModal(btnNo, div)
    buyClothes(btnYes, div)
}

function closeModal (button, el) {
    button.addEventListener('click', () => {
        el.remove()
    })
}

function buyClothes(button, el) {
    button.addEventListener('click', () => {
        console.log('bought')
        count++
        const li = document.createElement('li')

        if (!document.querySelector('li')) {
            li.insertAdjacentHTML('afterbegin', `
            <span class="name">T-shirt</span>
            <span class="count">${count}</span>
            `)
            area.appendChild(li)
        }
        else {
            document.querySelector('li').querySelector('.count').innerHTML = count
        }
        el.remove()
    })
}