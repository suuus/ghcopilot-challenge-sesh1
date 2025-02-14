import { Stack } from './stack';

// Test suite for Stack implementation
describe('Stack', () => {
    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack<number>();
    });

    test('stack should be empty when created', () => {
        expect(stack.isEmpty()).toBe(true);
        expect(stack.size()).toBe(0);
    });

    test('push should add elements to the stack', () => {
        stack.push(1);
        expect(stack.size()).toBe(1);
        expect(stack.peek()).toBe(1);
    });

    test('pop should remove and return the top element', () => {
        stack.push(1);
        stack.push(2);
        expect(stack.pop()).toBe(2);
        expect(stack.size()).toBe(1);
    });

    test('peek should return top element without removing it', () => {
        stack.push(1);
        stack.push(2);
        expect(stack.peek()).toBe(2);
        expect(stack.size()).toBe(2);
    });

    test('should handle empty stack operations', () => {
        expect(stack.pop()).toBeUndefined();
        expect(stack.peek()).toBeUndefined();
    });
});