# Challenge 1: Stack Implementation

## Task
Create a generic Stack class implementation in TypeScript that supports basic stack operations.

## Instructions
1. Open `stack.ts` in this folder
2. Use GitHub Copilot to help you implement a `Stack<T>` class with the following methods:
   - `push(item: T): void`
   - `pop(): T | undefined`
   - `peek(): T | undefined`
   - `isEmpty(): boolean`
   - `size(): number`

## Success Criteria
- All methods should be properly implemented
- The implementation should handle edge cases (empty stack)
- Type safety should be maintained

## Tips
- Start by writing a comment describing the Stack class and its purpose
- Write comments above each method describing what it should do
- Use natural language in your comments to get better suggestions

## Testing
Use the provided test file to verify your implementation:
```typescript
// Example usage:
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Should output: 2
console.log(stack.peek()); // Should output: 1
console.log(stack.size()); // Should output: 1
```