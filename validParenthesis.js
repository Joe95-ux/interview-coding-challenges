function isValid(s) {
    const stack = [];
    const bracketMap = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    for (let char of s) {
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else if (char === ')' || char === '}' || char === ']') {
        if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  // Test cases
  console.log(isValid("()[]{}")); // Output: true
  console.log(isValid("(]"));     // Output: false
  console.log(isValid("([)]"));   // Output: false
  console.log(isValid("{[]}"));   // Output: true

  
//   Explanation:

//     Use a stack to store opening brackets.
//     When encountering a closing bracket, check if the stack's top matches the correct opening bracket.
//     Return false if the stack does not match or is empty when it shouldn't be; otherwise, return true if the stack is empty at the end.

// Time Complexity: O(n)
// Space Complexity: O(n)