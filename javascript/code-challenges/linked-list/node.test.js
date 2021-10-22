'use strict'

const Node = require('./node')

describe('Given Node', () => {
  describe('When constructing', () => {
    it('Then should create valid node', () => {
      let value = 'Test Node'
      let node = new Node(value)

      expect(node.value).toStrictEqual(value)
      expect(node.next).toBeNull()
    })
  })
})
