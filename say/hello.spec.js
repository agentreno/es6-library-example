import { sayHello, sayHelloConsole } from './hello'

const chai = require('chai')
const sinon = require('sinon')
let should = chai.should()

const d3 = require('d3')

describe('Say Module', function() {
    it('should console log Hello world', function() {
        let consoleLogSpy = sinon.spy(console, 'log')

        sayHelloConsole()

        consoleLogSpy.withArgs('Hello world').calledOnce.should.be.true
    })

    it('should append a p tag containing Hello world to the body', function() {
        sayHello()

        d3.select('body').selectAll('p').size().should.equal(1)
    })
})
