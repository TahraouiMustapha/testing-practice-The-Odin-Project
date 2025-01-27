export function reverseString(string) {
    if(string === '') return '';
    if(string === null || string === undefined) {
        throw new Error('you must input a string or number!')
    } else {
        if(typeof string === 'number') string = string.toString(); 
        else if(typeof string !== 'string')  throw new Error('you must input a string or number!')
    }
    return string.split('').reverse().join('');   
}