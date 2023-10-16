// Contains Duplicate (easy)
// Problem Statement
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums= [1, 2, 3, 4]
// Output: false  
// Explanation: There are no duplicates in the given array.
// Example 2:

// Input: nums= [1, 2, 3, 1]
// Output: true  
// Explanation: '1' is repeating.

// input: array of integers
// output: boolean

// declare map
// iterate through array and add integer to map if not present
// if integer is present, return true
// if iterate through entire array, return false

class Solution {
  // my solution
  // Time complexity: O(n)
  // Space complexity: O(n)

  // containsDuplicate(nums) {
    
  //   // declare map
  //   const arrMap = new Map();

  //   // iterate through array and add integer to map if not present
  //   for (let i = 0; i < nums.length; i += 1) {
  //     // if integer is present, return true
  //     if (arrMap.has(nums[i])) {
  //       return true;
  //     } else {
  //       arrMap.set(nums[i], nums[i]);
  //     }
  //   }
  //   console.log(arrMap);
  //   // if iterate through entire array, return false
  //   return false;
  // }

  // answer solution
  // Time complexity: O(n)
  // Space complexity: O(n)
  containsDuplicate(nums) {
    // declare new set (sets store unique values)
    const arrSet = new Set();

    // iterate through array and add integer to set if not present
    for (let i = 0; i < nums.length; i += 1) {
      // if integer is present, return true
      if (arrSet.has(nums[i])) {
        return true;
      } 
      // add integer to set
      arrSet.add(nums[i]);
    }
    console.log(arrSet);
    // if iterate through entire array, return false
    return false;
  }
}

// Test Cases
const test = new Solution();
console.log(test.containsDuplicate([1,2,3,4]));
console.log(test.containsDuplicate([1,2,3,1]));

