'use strict'

// QuickSort
// Call the pivot helper on the array
// Recursively call QuickSort on the left side and the right side of the pivot
// When the helper returns the updated pivot index
// We recursively call the pivot helper on the subarray to left of that index
// and the subarray on the right of that index
// Base case is if the subarray with less than 2 elements e.g. one element
const _quickSort = (arr, left = 0 , right = arr.length - 1) => {
  if(left < right) {
      let pivotIndex = pivot(arr, left, right)
      // left
      _quickSort(arr, left, pivotIndex - 1)
      // right
      _quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}

// Pivot
const pivot = (arr, left = 0, right = arr.length + 1) => {
  let pivot = arr[left]
  // The index that we will return at the end
  let swapIndex = left;
  
  // For elements to the right of pivot
  for(let i = left + 1; i <= right; i++) {
      if(pivot > arr[i]) {
          swapIndex++;
          swap(arr, swapIndex, i)
      }
  }
  // Final Swap on this pivot
  swap(arr, left, swapIndex)
  return swapIndex
}

// Swapping the values of an array
const swap = (arr, i, low) => {
  // Set temp for later user
  let temp = arr[i]
  // Swap arr[i] with arr[low]
  arr[i] = arr[low]
  // Swap arr[low] with temp from earlier - arr[i]'s former value 
  arr[low] = temp
}

module.exports = {
  _quickSort
}