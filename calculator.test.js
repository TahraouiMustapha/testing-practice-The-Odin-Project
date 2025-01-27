import { calculator } from "./calculator";

describe('calculator with basic operations', () => {
    
    test('add more than two numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
        expect(calculator.add(2, 3, 4, 5)).toBe(14);
    })

    test('subtract two numbers or more', () => {
        expect(calculator.subtract(12, 4)).toBe(8);
        expect(calculator.subtract(12, 4, 3)).toBe(5);
    })

    test('multiply two numbers or more', () => {
        expect(calculator.multiply(2, 4)).toBe(8);
        expect(calculator.multiply(2, 2 , 2, 2)).toBe(16);
    })

    test('divide two numbers', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    })

    test('divide on 0', () => {
        expect(() => calculator.divide(12, 0)).toThrow("Division by zero is undefined.");
    })

    test('divide on more than two numbers', () => {
        expect(calculator.divide(100, 2, 2)).toBe(25);
    })
})