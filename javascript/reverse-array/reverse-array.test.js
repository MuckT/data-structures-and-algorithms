'use strict';

const reverseArray = require('./reverse-array')

describe('Testing reverseArray()', () => {
  it('It should return arrays of numbers in reverse', () => {
    expect(reverseArray([1,2,3])).toStrictEqual([3,2,1])
  })

  it('It should return undefined if input is not an array', () => {
    expect(reverseArray('plant')).toStrictEqual(undefined);
  })

  it('It should return arrays of strings in reverse', () => {
    expect(reverseArray(['race', 'car'])).toStrictEqual(['car', 'race'])
  })

  it('It should return nested arrays in reverse', () => {
    expect(reverseArray([[1,1,1], [2,2,2], [3,3,3]])).toStrictEqual([[3,3,3],[2,2,2], [1,1,1]])
  })
})

