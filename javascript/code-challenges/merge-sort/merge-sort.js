'use strict'

// Merge arrays
const merge = (arr1, arr2) => {
  // Given two sorted arrays it should return one array sorted
  // It should run in O(n+m) time and O(n+m) space
  // It should not modify the parameters passed to it.
  let results = []
  let i = 0
  let j = 0

  // While there are still values in both arrays
  while(i < arr1.length && j < arr2.length) {
    if(arr2[j] > arr1[i]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }

  // While arr2 is empty
  while(i < arr1.length) {
    results.push(arr1[i])
    i++
  }

  // While arr1 is empty
  while(j < arr2.length) {
    results.push(arr2[j])
    j++
  }

  return results
}

const _mergeSort = (arr) => {
  if(arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = _mergeSort(arr.slice(0, mid))
  let right = _mergeSort(arr.slice(mid))
  return merge(left, right)
}

module.exports = {
  _mergeSort,
}
