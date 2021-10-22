# Singly Linked List
A singly linked list is a type of linked list that is unidirectional, that is, it can be traversed in only one direction from head to the last node (tail).

## Challenge 

Create a Linked List class - the linked list class should have the following properties & behavior:
- a head property.
- Upon instantiation, an empty Linked List should be created.

The linked list class should contain the following methods:

- `insert`
  Arguments: value
  Returns: nothing
  Adds a new node with that value to the head of the linked list with an O(1) Time performance.
- `includes`
  Arguments: value
  Returns: Boolean
  Indicates whether that value exists as a Node’s value somewhere within the list.
- `toString`
  Arguments: none
  Returns: a string representing all the values in the Linked List, formatted as:
  "{ a } -> { b } -> { c } -> NULL"
- `append`
  Arguments: value
  Returns: nothing
  Adds a new node to the end of the linked list
- `insertAfter`
  Arguments: value, nextValue
  Returns: nothing
  Inserts a new node after the node with the specified value
- `insertBefore`
  Arguments: value, nextValue
  Returns: nothing
  Inserts a new node before the node with the specified value

Any exceptions or errors that come from your code should be semantic, capture-able errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

Follow your JavaScript standard naming conventions.

### Structure and Testing

1. Can successfully instantiate an empty linked list
2. Can properly insert into the linked list
3. The head property will properly point to the first node in the linked list
4. Can properly insert multiple nodes into the linked list
5. Will return true when finding a value within the linked list that exists
6. Will return false when searching for a value in the linked list that does not exist
7. Can properly return a collection of all the values that exist in the linked list

## Approach & Efficiency

| Method | Time Complexity | Space Complexity |
| ---- | ---- | ---- |
| insert | O(1) | O(n) |
| includes | O(n) | O(n) |
| toString | O(n) | O(n) |
| append | O(n) | O(n) |
| insertAfter | O(n) | O(n) |
| insertBefore | O(n) | O(n) |

## External Sources
[https://www.educative.io/edpresso/what-is-a-singly-linked-list](https://www.educative.io/edpresso/what-is-a-singly-linked-list)