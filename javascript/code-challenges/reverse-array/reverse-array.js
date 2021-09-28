'use strict';

// Reverse an Array
const reverseArray = (arr) => {
  // Return out of function if input is not an array
  if (!(Array.isArray(arr))) {
      console.log('Input is not an array')
      return
  }
  // Create out output array
  const output = []
  // Loop through the input array from the back
  for (let i = arr.length; i; i--) {
      // Add each element to the output array
      output.push(arr[i - 1])
  }
  return output
}

module.exports = reverseArray
