'use strict'

const { _quickSort } = require('./quick-sort')

describe('Given _quickSort', () => {
  describe('When called', () => {
    it('Then should be able to sort integers', () => {
      expect(_quickSort([3,2,1])).toStrictEqual([1,2,3])
    })

    it('Then should be able to sort duplicates', () => {
      expect(_quickSort([3,3,2,2,1,1])).toStrictEqual([1,1,2,2,3,3])
    })

    it('Then should be able to sort mixed floats and integers', () => {
      expect(_quickSort([3.5,3,2.5,2,1.5,1])).toStrictEqual([1,1.5,2,2.5,3,3.5])
    })

    it('Then should be able to sort negative numbers', () => {
      expect(_quickSort([-3.5,3,2.5,-2,1.5,-1,0])).toStrictEqual([-3.5,-2,-1,0,1.5,2.5,3])
    })

    it('Then should bel able to sort strings', () => {
      expect(_quickSort(['a','c','d','c'])).toStrictEqual(['a','c','c','d'])
    })
  })
})