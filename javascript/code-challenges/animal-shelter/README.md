# Challenge Summary

## AnimalShelter 
- Create a class called AnimalShelter which holds only dogs and cats.
- The shelter operates using a first-in, first-out approach.
- 

### Required Methods
#### `enqueue`

- Arguments: animal
- animal can be either a dog or a cat object

#### `dequeue`

- Arguments: pref
- pref can be either "dog" or "cat"
- Return: either a dog or a cat, based on preference.
- If pref is not "dog" or "cat" then return null.

## Approach & Efficiency

### Stack
| Method  | Time Complexity | Space Complexity |
| ---- | ---- | ---- |
| enqueue | O(1) | O(1)|
| dequeue | O(n) | O(1) |


```Bash
# run all related tests
npm test animal-shelter.test.js
```
