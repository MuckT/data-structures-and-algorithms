'use strict'

const Stack = require('./stack')

let populatedStack, emptyStack

beforeEach(() => {
  populatedStack = new Stack(3, [1,2,3])
  emptyStack = new Stack()
})

describe('Given a Stack', () => {
  describe('When push', () => {
    it('Then should be able to push to top', () => {
      populatedStack.push(4)
      expect(populatedStack.top).toStrictEqual(4)
      expect(populatedStack.storage).toStrictEqual([1,2,3,4])
    })
  })

  describe('When pop', () => {
    it('Then should pop item from stack and return it', () => {
      expect(populatedStack.pop()).toStrictEqual(3)
      expect(populatedStack.top).toStrictEqual(2)
    })

    it('Then should throw error on empty stack', () => {
      expect(() => { emptyStack.pop()}).toThrow('Stack is empty')
    })
  })

  describe('When peek', () => {
    it('Then should peek value at top of stack', () => {
      expect(populatedStack.peek()).toStrictEqual(3)
    })

    it('Then should throw error on empty stack', () => {
      expect(() => { emptyStack.peek()}).toThrow('Stack is empty')
    })
  })

  describe('When isEmpty', () => {
    it('Then should return true for empty queue', () => {
      expect(emptyStack.isEmpty()).toEqual(true)
    })

    it('Then should return false for queue with items', () => {
      expect(populatedStack.isEmpty()).toEqual(false)
    })
  })
})