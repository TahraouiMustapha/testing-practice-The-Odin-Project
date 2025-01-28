import { caesarCipher } from "./caesarCipher";

describe('caesarCipher function', () => {
    test('caesarCipher with single word', () => {
        expect(caesarCipher('a', 2)).toEqual('c');
        expect(caesarCipher('abc', 2)).toEqual('cde');
    })

    test('caesarCipher with wrapping from z to a', ()=>{
        expect(caesarCipher('xyz', 3)).toEqual('abc');
    })

    test('caesarCipher with cases preservation ', ()=>{
        expect(caesarCipher('HeLLo', 3)).toEqual('KhOOr');
    })

    test('caesarCipher with punctuation, spaces and other non-alphabetical characters remain unchanged', ()=>{
        expect(caesarCipher('Hello, World!', 3)).toEqual('Khoor, Zruog!');
    })

    test('caesarCipher with negaive keys', () => {
        expect(caesarCipher('a', -3)).toEqual('x');
    })

})