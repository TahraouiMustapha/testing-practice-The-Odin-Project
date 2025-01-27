import { reverseString } from "./reverseString";

describe('reverseString', () => {
    test('reverses single word', ()=>{
        let word = 'hello'
        expect(reverseString(word)).toEqual('olleh');
    })

    test('reverses more than single word',() => {
        let string = 'hello world!'
        expect(reverseString(string)).toEqual('!dlrow olleh');
    })

    test('reversed of empty string is empty string', () => {
        expect(reverseString('')).toEqual('');
    })

    test('reverses a number non-string', () => {
        expect(reverseString(123)).toEqual('321');
    })

    test('return an error for null, undefined, non-string and non-number values', () => {
        expect(() => reverseString()).toThrow(Error);
        expect(() => reverseString(null)).toThrow(Error);
        expect(() => reverseString(false)).toThrow(Error);
    })
})