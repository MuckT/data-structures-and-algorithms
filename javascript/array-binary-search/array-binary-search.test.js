'use strict'

const arrayBinarySearch = require('./array-binary-search')

describe('Testing arrayBinarySearch()', () => {
  it('It should return -1 for items not in the array', () => {
    expect(arrayBinarySearch([1,2,3,4,5], 7)).toStrictEqual(-1)
  })

  it('It should return correct index for odd length arrays', () => {
    expect(arrayBinarySearch([1,2,3,4,5], 5)).toStrictEqual(4)
  })

  it('It should return correct index for even length arrays', () => {
    expect(arrayBinarySearch([1,2,3,4], 1)).toStrictEqual(0)
  })

  it('It should return correct index for sorted string arrays', () => {
    expect(arrayBinarySearch(['a','b','c','d','e','f'], 'b')).toStrictEqual(1)
  })
})
