// const car = {
//     name : "I`m a car",
//     age : 2,
//     wheels: 4,
//     type: 'sedan',
//     color : "red",
//     mark: "Ford",
//     showInfo: function(){
//         console.group('Info about this car')
//         console.log("I'm a BEEEAAAAR")
//         console.log(`Car color: ${this.color}`)
//         console.log(`Car type: ${this.type}`)
//         console.log(`Car wheels: ${this.wheels}`)
//         console.log(`Car mark: ${this.mark}`)
//         console.log(`Car name: ${this.name}`)
//         console.groupEnd()
//     }
// }

// console.log(car.showInfo())

class Book {

    constructor (name, author, pages, image) {
        this.name = name
        this.author = author
        this.pages = pages
        this.image = image
    }

    showInfo () {
        console.group('Info about this book')
        console.log(`Book: ${this.name}`)
        console.log(`Author: ${this.author}`)
        console.log(`Pages: ${this.pages}`)
        console.groupEnd()
    }

    render () {
        const div = document.createElement('div')
        div.classList.add('book-info')
        div.insertAdjacentHTML('afterbegin', `
        <div class="book-header">
            <h1 class="book-name">
                ${this.name}
            </h1>
        </div>
        <div class="book-image">
            <img src="${this.image}" alt="">
        </div>
        <div class="book-nav">
            <span class="book-author">
                <b>Author is:</b> ${this.author}
            </span>
        </div>
        <div class="book-footer">
            <span class="book-pages">
                <b>Pages:</b> ${this.pages}
            </span>
        </div>
        `)
        document.body.appendChild(div) 
        return div
    }
}

images = []
books = []

const nameInput = document.getElementById('book-name')
const authorInput = document.getElementById('book-author')
const pagesInput = document.getElementById('book-pages')
const fileInput = document.getElementById('file')

const btnStore = document.querySelector('.store')
const btnShow = document.querySelector('.show')

fileInput.addEventListener('change', saveFile)
btnStore.addEventListener('click', storeFile)
btnShow.addEventListener('click', showFiles)

function saveFile () {
        const file = this.files[0]
    
        let image = document.createElement('img')
    
        const reader = new FileReader
    
        reader.addEventListener('load', function () {
            image.setAttribute('src', this.result)
        })
    
        reader.readAsDataURL(file)

        images.push(image)
}

function storeFile () {
    console.log(images[0])

    let bookName = nameInput.value
    let author = authorInput.value
    let pages = pagesInput.value

    nameInput.value = ''
    authorInput.value = ''
    pagesInput.value = ''

    books.push(new Book (bookName, author, pages, images[0].src))
}

function showFiles() {
    books[0].render()
}
// const newBook = new Book('JS', 'Gleb', '365')

// console.log(newBook)

// delete newBook.name

// const miniBook = new Object(newBook)

// console.log(miniBook)

// miniBook.author = 'Bruh'
// miniBook.type = 'Mini bruh'

// console.log(miniBook)
