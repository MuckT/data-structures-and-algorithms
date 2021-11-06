'use strict'

const pseudoQueue = require('./stack-queue-pseudo')

let populatedQueue, emptyQueue

beforeEach(() => {
  populatedQueue = new pseudoQueue(3, [10,15,20])
  emptyQueue = new pseudoQueue()
})

describe('Given PseudoQueue', () => {
  describe('When enqueuing', () => {
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
