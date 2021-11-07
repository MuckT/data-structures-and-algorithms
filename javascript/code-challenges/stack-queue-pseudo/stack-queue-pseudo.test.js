'use strict'

const PseudoQueue = require('./stack-queue-pseudo')

let populatedQueue, emptyQueue

beforeEach(() => {
  populatedQueue = new PseudoQueue(3, [10,15,20])
  emptyQueue = new PseudoQueue()
})

describe('Given PseudoQueue', () => {
  describe('When enqueuing', () => {
    it('Then should be able to enqueue on empty queue', () => {
      emptyQueue.enqueue(1)
      expect(emptyQueue.out.storage).toStrictEqual([ 1 ])
    })

    it('Then should be able to enqueue', () => {
      populatedQueue.enqueue(5)
      expect(populatedQueue.out.storage).toStrictEqual([ 5, 20, 15, 10 ])
      expect(populatedQueue.out.top).toStrictEqual(4)
    })

    it('Then should be able to enqueue after dequeue', () => {
      populatedQueue.dequeue()
      populatedQueue.enqueue(1000)
      expect(populatedQueue.out.storage).toStrictEqual([1000, 20, 15])
    })
  })

  describe('When dequeueing', () => {
    it('Then should throw error for a dequeue on empty queue', () => {
      expect(() => { emptyQueue.dequeue() }).toThrow('Empty Queue')
    })

    it('Then should be able to dequeue', () => {
      populatedQueue.dequeue()
      expect(populatedQueue.out.storage).toStrictEqual([20, 15])
    })

    it('Then should be able to dequeue after enqueuing', () => {
      populatedQueue.enqueue(1000)
      populatedQueue.dequeue()
      expect(populatedQueue.out.storage).toStrictEqual([1000, 20, 15])
    })
  })
})
