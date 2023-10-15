// Pangram (easy)
// Problem Statement
// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing English letters (lower or upper-case), return true if sentence is a pangram, or false otherwise.

// Note: The given sentence might contain other characters like digits or spaces, your solution should handle these too.

// Example 1:

// Input: sentence = "TheQuickBrownFoxJumpsOverTheLazyDog"
// Output: true
// Explanation: The sentence contains at least one occurrence of every letter of the English alphabet either in lower or upper case.
// Example 2:

// Input: sentence = "This is not a pangram"
// Output: false
// Explanation: The sentence doesn't contain at least one occurrence of every letter of the English alphabet.

// input: string
// output: boolean

// declare obj w/ alphabet chars
// iterate over input string (changed to lower case)
// increase char property by 1
// iterate through alphabet obj properties
// if a property has 0 value, return false
// once loop is complete, return true

// Time complexity: O(n)
// Space complexity: O(n)

class Solution {
  // Function to check if given sentence is pangram
  checkIfPangram(sentence) {
    
    // declare obj w/ alphabet chars
    const chars = {
      a: 0, 
      b: 0, 
      c: 0,
      d: 0,
      e: 0, 
      f: 0, 
      g: 0,
      h: 0, 
      i: 0, 
      j: 0, 
      k: 0, 
      l: 0, 
      m: 0, 
      n: 0, 
      o: 0, 
      p: 0, 
      q: 0, 
      r: 0, 
      s: 0, 
      t: 0, 
      u: 0, 
      v: 0,
      w: 0,
      x: 0,
      y: 0,
      z: 0
    }

    // iterate over input string (changed to lower case)
    const str = sentence.toLowerCase();

    for (let i = 0; i < str.length; i += 1) {
      if (!chars[str[i]]) chars[str[i]] += 1;
    }

    // iterate over object properties
    for (const prop of Object.keys(chars)) {
      // if prop has 0 value return false
      if (!chars[prop]) return false;
    }

    // if iterate through entire properties return true
    return true;
  }
}

// answer solution
// Time complexity: O(n)
// Space complexity: O(1)

// class Solution {
//   checkIfPangram(sentence) {

//     // create set
//     const charSet = new Set();

//     // create regex expression
//     const regex = /[a-z]/i;

//     // iterate over lower case sentence addings chars to set
//       // make sure to check that char matches regex expression
//     for (const char of sentence.toLowerCase()) {
//       if (char.match(regex)) {
//         charSet.add(char);
//       }
//     }

//     // return evaluated expression comparing charSet size to alphabet size
//     return charSet.size === 26;
//   }
// }


// Test Cases
const test = new Solution();
console.log(test.checkIfPangram("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));
console.log(test.checkIfPangram("This is not a pangram"));


