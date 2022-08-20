'use strict'

const LinkedList = require('../linked-list/linked-list')
const { zipListsFistPass, zipLists } = require('./zip-linked-list')

describe('Given two linked lists', () => {
  describe("When 'zipLists' is called", () => {
    let ll1, ll2
    beforeEach(() => {
      ll1 = new LinkedList()
      ll2 = new LinkedList()
      ll1.insert(1)
      ll1.insert(3)
      ll1.insert(2)
      ll2.insert(5)
      ll2.insert(9)
      ll2.insert(4)
    })

    it('Then should return correctly zipped linked list', () => {
      let result = zipListsFistPass(ll1, ll2)
      expect(result.toString()).toEqual("{ 2 } -> { 4 } -> { 3 } -> { 9 } -> { 1 } -> { 5 } -> NULL")
    })

    it('Then should return correctly zipped linked list', () => {
      let result = zipLists(ll1, ll2)
      console.log(result)
      expect(result.toString()).toEqual("{ 2 } -> { 4 } -> { 3 } -> { 9 } -> { 1 } -> { 5 } -> NULL")
    })
  })
})