'use strict'

const arrayBinarySearch = (arr, target) => {
  let startIndex = 0
  let endIndex = arr.length - 1
  // If target is out of bounds return -1
  if(arr[startIndex] > target || arr[endIndex] < target) {
    return -1
  }
  // While target is inbounds and startIndex is less than or equal to endIndex
  while (startIndex <= endIndex) {
      let mid = ~~((startIndex + endIndex) / 2)
      // If index is target return index
      if(arr[mid] === target) {
          return mid
      }
      // Search Right
      if(arr[mid] < target) {
          startIndex = mid + 1
      }
      // Search Left
      if(arr[mid] > target) {
          endIndex = mid - 1
      }
  }
  // If we go through the whole array and don't find the target return -1
  return -1
}

module.exports = arrayBinarySearch
