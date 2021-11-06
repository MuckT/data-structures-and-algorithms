# Challenge Summary

- Write a function called zip lists
- Arguments: 2 linked lists
- Return: Linked List, zipped as noted below
- Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list.
- Try and keep additional space down to O(1)
- You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Whiteboard Process
<!-- TODO -->

## Approach & Efficiency
I used a helper array to store the values and a helper linked list to store the output. Ideally the lists would be zipped into one setting our space complexity to O(1).

| Time Complexity | Space Complexity |
| ---- | ---- |
| O(n) | O(n) |

## Solution

```bash
npm test -f zip-linked-list.test.js
```