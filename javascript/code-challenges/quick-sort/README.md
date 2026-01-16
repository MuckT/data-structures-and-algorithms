# Challenge Summary
Trace the algorithm by stepping through the process with the provided sample array. Write a working, tested implementation of quick sort based on the pseudocode provided.

```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right.
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

<!-- ## Whiteboard Process -->

## Approach & Efficiency
| Time Complexity | Space Complexity |
| ---- | ---- |
|  | 1 |

### Run Solution

```sh
# Install dependencies
npm install

# run jest tests for quick-sort
npm test quick-sort.test.js
```

## Sources

[JavaScript Algorithms and Data Structures Masterclass - Quick Sort](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)

[Quick Sort](https://www.geeksforgeeks.org/quick-sort/)

[VISUALALGO](https://visualgo.net/en/sorting)