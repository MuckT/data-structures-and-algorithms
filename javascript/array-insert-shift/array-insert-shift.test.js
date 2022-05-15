'use strict';

const arrayInsertShift = require('./array-insert-shift').arrayInsertShift
const removeMiddle = require('./array-insert-shift').removeMiddle

describe('Given arrayInsertShift()', () => {
  describe('When array length is even', () => {
    it('Then should return array with item added to the middle', () => {
      expect(arrayInsertShift([2,4,6,-8], 5)).toStrictEqual([2,4,5,6,-8])
    })
  })

  describe('When array length is odd', () => {
    it('Then should return array with item added to the middle', () => {
      expect(arrayInsertShift([42,8,15,23,42], 16)).toStrictEqual([42,8,15,16,23,42])
    })
  })
})

describe('Given removeMiddle()', () => {
  describe('When array length is even', () => {
    it('Then should remove item from the middle of an array', () => {
      expect(removeMiddle([0,0,5,0])).toStrictEqual([0,0,0])
    })
  })

  describe('When array length is odd', () => {
    it('Then should remove item from the middle of an array', () => {
      expect(removeMiddle([0,null,5,false,undefined])).toStrictEqual([0, null, false, undefined])
    })
  })
})

