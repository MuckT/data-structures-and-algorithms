# Challenge Summary
Write a function called `validateBrackets` representing whether or not the brackets in the string are balanced.
- Arguments: string
- Return: boolean

### Example Inputs and Outputs
| Input |	Output |
| ----- | ----- |
| {} | TRUE |
| {}(){} | TRUE |
| ()[[Extra Characters]] | TRUE |
| (){}[[]] | TRUE |
| {}{Extra Characters}[](()) | TRUE |
| [({}]	| FALSE |
| (](	| FALSE |
| {(}) | FALSE |

## Whiteboard Process
<!-- TODO -->

## Approach & Efficiency
| Method | Time Complexity | Space Complexity |
| ---- | ---- | ---- |
| validateBrackets | O(n) | O(n) |

## Solution
```sh
# Install dependencies
npm install

# run jest tests for stack-queue-pseudo
npm test stack-queue-brackets.test.js
```
### Sources 

[Parenthesis Matching Problem in JavaScript](https://paulrohan.medium.com/parenthesis-matching-problem-in-javascript-the-hacking-school-hyd-7d7708278911)

[Solving Balanced Brackets in Javascript with Stacks](https://levelup.gitconnected.com/solving-balanced-brackets-in-javascript-with-stacks-edbc52a57309)

