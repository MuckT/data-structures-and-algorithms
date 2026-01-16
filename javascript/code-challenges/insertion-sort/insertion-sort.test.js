'use strict'

const {insertSort} = require('./insertion-sort')

describe('Given insertion sort', () => {
  let beforeSort = [5, 2, 5, 6, 7, 1, 19, -3, 2.5]
  let afterSort = [-3, 1, 2, 2.5, 5, 5, 6, 7, 19]
  it('Then should sort correctly', () => {
    expect(insertSort(beforeSort)).toStrictEqual(afterSort)
  })
})