'use strict'

const Queue = require('./queue')

let populatedQueue, emptyQueue

beforeEach(() => {
  populatedQueue = new Queue([1,2,3])
  emptyQueue = new Queue()
})

describe('Given a Queue', () => {
  describe('When enqueue', () => {
    it('Then should be able to add to back of queue', () => {
      populatedQueue.enqueue(4)
      expect(populatedQueue.storage).toStrictEqual([1, 2, 3, 4])
    })
  })

  describe('When dequeue', () => {
    it('Then should remove item from front of queue and return it', () => {
      expect(populatedQueue.dequeue()).toEqual(1)
      expect(populatedQueue.storage).toEqual([2,3])
    })

    it('Then should throw error on empty queue', () => {
      expect(() => { emptyQueue.dequeue()}).toThrow('Queue is empty')
    })
  })

  describe('When peek', () => {
    it('Then should should return item from front of queue', () => {
      expect(populatedQueue.peek()).toEqual(1)
    })

    it('Then should throw error on empty queue', () => {
      expect(() => { emptyQueue.peek()}).toThrow('Queue is empty')
    })
  })

  describe('When isEmpty', () => {
    it('Then should return true for empty queue', () => {
      expect(emptyQueue.isEmpty()).toEqual(true)
    })

    it('Then should return false for queue with items', () => {
      expect(populatedQueue.isEmpty()).toEqual(false)
    })
  })
})