import { analyzeArray } from "./analyzeArray";

describe('analyzeArray',() => {
    test('it doesn\'t accept non-array argument', () => {
        expect(() => analyzeArray(null)).toThrow("You must input an array of numbers!");
        expect(() => analyzeArray(2)).toThrow("You must input an array of numbers!");
        expect(() => analyzeArray('nothing')).toThrow("You must input an array of numbers!");
    })

    test('it doesn\'t accept an array within a non-number value', () => {
        expect(()=> analyzeArray([1, 'hi', 3, '3'])).toThrow('You must input an array of numbers!');
    })

    test('return an empty obj with an empty array', () => {
        expect(analyzeArray([])).toEqual({});
    })

    test('it works with array of numbers', ()=> {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
         });

    })
})