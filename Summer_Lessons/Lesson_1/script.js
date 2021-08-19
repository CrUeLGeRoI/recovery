const person = new Object({
    name: 'Maxim',
    age: 25,
    greet: () => {
        console.log('Greetings!')
    }
})

Object.prototype.sayHello = () => {
    console.log('Greetings!')
}

const vasya = Object.create(person)
vasya.name = 'Vasiliy'