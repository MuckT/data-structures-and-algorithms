'use strict';

// Add item to middle index of array
const arrayInsertShift = (arr, toAdd) => {
  // Check that first parameter is an array
  if(!Array.isArray(arr)) {
    console.errer('Error: First Parameter Should Be An Array')
    return
  }

  // Determine middle index
  let midindex = arr.length % 2 
    // If odd
    ? Math.ceil(arr.length / 2)
    // If Even
    : Math.floor(arr.length / 2)

  // Declare returnArray
  let returnArray = []

  // Loop through array
  arr.forEach((item, index) => {
    if(index === midindex) {
      returnArray.push(toAdd)
    }
    returnArray.push(item)
  })
  return returnArray
 }

// Remove Middle Index
const removeMiddle = arr => {
  // Check that parameter is an array
  if(!Array.isArray(arr)) {
    console.errer('Error: Parameter Should Be An Array')
    return
  }

  // Determine middle index
  let midindex = arr.length % 2 
    // If odd
    ? Math.floor(arr.length / 2)
    // If Even
    : Math.ceil(arr.length / 2)

  // Declare returnArray
  let returnArray = []

  // Loop through array
  arr.forEach((item, index) => {
    if(index !== midindex) {
      returnArray.push(item)
    }
  })
  return returnArray
}

module.exports = {
  arrayInsertShift: arrayInsertShift,
  removeMiddle: removeMiddle
 }
