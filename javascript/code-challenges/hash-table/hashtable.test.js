'use strict'

const HashTable = require('./hashtable')

describe('Given a hash table', () => {
  let hashTable;
  beforeEach(() => {
    hashTable = new HashTable(1024)
  })
  describe('When hashing', () => {
    it('Then should return index of the hash', () => {
      expect(hashTable.hash('New York')).toEqual(779)
    })
  })

  describe('When getting and setting', () => {
    it('Then should handle setting a unique hash', () => {
      hashTable.set('New York', 'Big Apple')
      expect(hashTable.get('New York')).toStrictEqual({"New York": "Big Apple"})
    })

    it('Then should handle a collision', () => {
      hashTable.set('New York', 'Big Apple')
      hashTable.set('ew YorkN', 'Apple Big')
      expect(hashTable.get('New York')).toStrictEqual({"New York": "Big Apple"})
      expect(hashTable.get('ew YorkN')).toStrictEqual({"ew YorkN": "Apple Big"})
    })
    

    it.todo('Then should not add duplicate values')
  })

  describe('When calling contains', () => {
    it('Then should return false if value not in hash table', () => {
      hashTable.set('New York', 'Big Apple')
      expect(hashTable.contains('New Jersey')).toStrictEqual(false)
    })

    it('Then should return true if value is in hash table', () => {
      hashTable.set('New York', 'Big Apple')
      expect(hashTable.contains('New York')).toStrictEqual(true)
    })
  })
})