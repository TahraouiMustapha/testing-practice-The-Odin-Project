import { capitilize } from "./capitilize.js";

test('input a falsy value ', ()=> {
    let string = null;
    expect(() => capitilize(string)).toThrow("You must input a string");
    expect(capitilize('')).toBe('');
    expect(capitilize('123')).toBe('123');
    expect(capitilize('===#@')).toBe('===#@');
})

test('capitilize string of one word', ()=> {
    let string = 'mohamed';
    expect(capitilize(string)).toBe('Mohamed');
})

test('capitilize a long string ', () => {
    let string = 'function that takes a string and returns it with the first character capitalized.';
    expect(capitilize(string)).toBe('Function that takes a string and returns it with the first character capitalized.')
})

test('capitilize a string with point\'.\', or with space in start', () =>{
    let string = "function that takes a string. and returns it with .";
    let expectedResult = "Function that takes a string. And returns it with ."
    expect(capitilize(string)).toBe(expectedResult);
})