'use strict'

const { it } = require('eslint/lib/rule-tester/rule-tester')
const  { _mergeSort } = require('./merge-sort')

describe('Given Merge Sort',  () => {
  describe('When Sorting', () => {
    it('Then should handle whole numbers', () => {
      expect(_mergeSort([0,5,1,4,2,3])).toStrictEqual([0,1,2,3,4,5])
    })

    it('Then should hanlde floating numbers', () => {
      expect(_mergeSort([0.1, 5.1, 1.1, 4.1, 2.1, 3.1])).toStrictEqual([0.1, 1.1, 2.1, 3.1, 4.1, 5.1])
    })

    it('Then should handle negatives', () => {
      expect(_mergeSort([0, -5, -1, -4, -2, -3])).toStrictEqual([-5,-4,-3,-2,-1,0])
    })

    it('Then should handle strings', () => {
      expect(_mergeSort(['d', 'a', 'c', 'b'])).toStrictEqual(['a', 'b', 'c', 'd'])
    })

    it('Then should handle duplicates', () =>{ 
      expect(_mergeSort([1,2,1,2,3,4,3,4])).toStrictEqual([1,1,2,2,3,3,4,4])
    })
  })
})
