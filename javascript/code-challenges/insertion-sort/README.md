# Challenge Summary
Trace the algorithm by stepping through the process with the provided sample array. Write a working, tested implementation of Insertion Sort based on the pseudocode provided.

```
# PseudoCode
InsertionSort(int[] arr)

  FOR i = 1 to arr.length

    int j <-- i - 1
    int temp <-- arr[i]

    WHILE j >= 0 AND temp < arr[j]
      arr[j + 1] <-- arr[j]
      j <-- j - 1

    arr[j + 1] <-- temp
```


<!-- ## Whiteboard Process -->

## Approach & Efficiency
| Time Complexity | Space Complexity |
| ---- | ---- |
| O(n^2) | 1 |

### Run Solution

```sh
# Install dependencies
npm install

# run jest tests for stack-queue-pseudo
npm test insertion-sort.js
```
