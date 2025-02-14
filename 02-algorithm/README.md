# Challenge 2: String Manipulation Algorithm

## Task
Implement a function that finds the longest palindrome substring in a given string.

## Instructions
1. Open `palindrome.ts` in this folder
2. Implement a function `findLongestPalindrome(str: string): string` that returns the longest palindromic substring
3. The function should be case-sensitive and handle spaces

## Success Criteria
- Function correctly identifies the longest palindrome
- Handles edge cases (empty string, single character, no palindromes)
- Efficient implementation (hint: try expanding around centers)

## Tips
- Start with a comment explaining what a palindrome is
- Break down the problem into smaller helper functions
- Use descriptive comments to guide Copilot's suggestions

## Examples
```typescript
findLongestPalindrome("babad") // should return "bab" or "aba"
findLongestPalindrome("racecar") // should return "racecar"
findLongestPalindrome("hello") // should return "ll"
```