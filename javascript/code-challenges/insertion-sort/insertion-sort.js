'use strict'

/*
  FOR i = 1 to arr.length
    int j <-- i - 1
    int temp <-- arr[i]
    WHILE j >= 0 AND temp < arr[j]
      arr[j + 1] <-- arr[j]
      j <-- j - 1
    arr[j + 1] <-- temp
*/

const insertSort = arr => {
  // Iterate through the array
  for (let i = 1; i < arr.length; i++) {

    // Get the element to the left
    let j = i - 1
    // Save current element to temp
    let temp = arr[i]
    // While the index of the element of the left is greater than zero
    // AND temp's value is less than the current index
    // Move it it comparison one to the left
    while(j >= 0 && temp < arr[j]) {
      // Set current to right
      arr[j + 1 ] = arr[j]
      // Decrement left index
      j = j - 1
    }

    // Set current to temp
    arr[j + 1] = temp
  }

  return arr
}

module.exports = {
  insertSort
}