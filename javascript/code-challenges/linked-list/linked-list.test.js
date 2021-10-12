'use strict'

const LinkedList = require('./linked-list')

describe('Given linked list', () => {
  describe('When constructed', () => {
    it('Then should create Linked List', () => {
      let list = new LinkedList()
      expect(list.head).toBeNull()
    })
  })

  describe('When inserting', () => {
    it('Then should prepend to the front of the linked list', () => {
      // Create Linked List
      let list = new LinkedList()
      // Create Test Values
      let initialValue = 'Test Initial'
      let insertValue = 'Test Insert'
      // Insert Initial Node & Assert
      list.insert(initialValue)
      expect(list.head.value).toStrictEqual(initialValue)
      // Insert Again & Assert
      list.insert(insertValue)
      expect(list.head.value).toStrictEqual(insertValue)
      expect(list.head.next.value).toStrictEqual(initialValue)
    })
  })

  describe('When checking if value is included', () => {
    let list = new LinkedList()
    beforeAll(() => {
      list.insert('Test 03')
      list.insert('Test 02')
      list.insert('Test 01')
      list.insert('Test 00')
    })

    it('Then should return true if value is present in linked list', () => {
      expect(list.includes('Test 03')).toBeTruthy()
    })

    it('Then should return false if value is not present in the linked list', () => {
      expect(list.includes('Test 04')).toBeFalsy()
    })
  })

  describe('When printing toString()', () => {
    let list = new LinkedList()
    beforeAll(() => {
      list.insert('Test 03')
      list.insert('Test 02')
      list.insert('Test 01')
      list.insert('Test 00')
    })

    it('Then should return correctly formatted string representation', () => {
      expect(list.toString()).toEqual("{ Test 00 } -> { Test 01 } -> { Test 02 } -> { Test 03 } -> NULL")
    })
  })
})