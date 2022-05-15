'use strict'

const validateBrackets = (str) => {
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  // Iterate through the string and use a stack to check each bracket character
  const bracketStack = []
  for (let char of str) {
    // Handle opening brackets
    if(char === '(' || char === '{' || char === '[') {
      bracketStack.push(char)
    }
    // Handle closing brackets
    if(char === ')' || char === '}' || char === ']') {
      // If it's a closing bracket it should match the current top of our stack
      if (char !== map[bracketStack.pop()]) {
        return false
      }
    }
  }

  // Check that all brackets were matched
  if(bracketStack.length !== 0) {
    return false
  }
  
  // If we haven't hit a false yet it's a valid bracket sequence 
  return true
}

module.exports = validateBrackets
