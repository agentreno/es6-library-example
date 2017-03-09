import './hello.css'

export function sayHelloConsole() {
    let message = 'world'
    console.log(`Hello ${message}`)
}

export function sayHello() {
    let d3 = require('d3')
    d3.select('body').append('p')
        .text('Hello world')
}
