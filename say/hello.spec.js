import { sayHello } from './hello'

const chai = require('chai')
const sinon = require('sinon')
let should = chai.should()

describe('Say Module', function() {
    it('should console log Hello World', function() {
        let consoleLogSpy = sinon.spy(console, 'log')

        sayHello()

        consoleLogSpy.withArgs('Hello world').calledOnce.should.be.true
    })
})
