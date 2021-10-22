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

  describe('When appending', () => {
    let list = new LinkedList()
    beforeAll(() => {
      list.insert('Test 03')
      list.insert('Test 02')
      list.insert('Test 01')
      list.insert('Test 00')
    })

    it('Then should append to the end of the linked list', () => {
      list.append('Test 04')
      expect(list.toString()).toEqual("{ Test 00 } -> { Test 01 } -> { Test 02 } -> { Test 03 } -> { Test 04 } -> NULL")
    })

    it('Then should append to an empty linked list', () => {
      let emptyLinkedList = new LinkedList()
      emptyLinkedList.append('Test 00')
      expect(emptyLinkedList.toString()).toEqual("{ Test 00 } -> NULL")
    })
  })

  describe('When inserting', () => {
    let list
    beforeEach(() => {
      list = new LinkedList()
      list.insert('Test 03')
      list.insert('Test 02')
      list.insert('Test 01')
      list.insert('Test 00')
    })

    it('Then should be able to insert before the target value', () => {
      list.insertBefore('Test 03', 'Test 02.5')
      expect(list.toString()).toEqual("{ Test 00 } -> { Test 01 } -> { Test 02 } -> { Test 02.5 } -> { Test 03 } -> NULL")
    })

    it('Then should not insert before if target value is not found', () => {
      expect(() => { list.insertBefore('Test 04', 'Test 03.5')}).toThrow('Value Not Found')
      expect(list.toString()).toEqual("{ Test 00 } -> { Test 01 } -> { Test 02 } -> { Test 03 } -> NULL")
    })

    it('Then should be able to insert after the target value', () => {
      list.insertAfter('Test 03', 'Test 03.5')
      expect(list.toString()).toEqual("{ Test 00 } -> { Test 01 } -> { Test 02 } -> { Test 03 } -> { Test 03.5 } -> NULL")
    })

    it('Then should not insert after if target value is not found', () => {
      expect(() => { list.insertBefore('Test 04', 'Test 03.5')}).toThrowError('Value Not Found')
      expect(list.toString()).toEqual("{ Test 00 } -> { Test 01 } -> { Test 02 } -> { Test 03 } -> NULL")
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