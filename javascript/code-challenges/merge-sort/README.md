# Challenge Summary
Trace the algorithm by stepping through the process with the provided sample array. Write a working, tested implementation of merge sort based on the pseudocode provided.

```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

<!-- ## Whiteboard Process -->

## Approach & Efficiency
| Time Complexity | Space Complexity |
| ---- | ---- |
| O(n log n) | 1 |

### Run Solution

```sh
# Install dependencies
npm install

# run jest tests for stack-queue-pseudo
npm test merge-sort.js
```

## Sources

[JavaScript Algorithms and Data Structures Masterclass - Merge Sort](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)

[Merge Sort](https://www.geeksforgeeks.org/merge-sort/)