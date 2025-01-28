export const analyzeArray = function(array) {
    if(!array || Object.getPrototypeOf(array) !== Array.prototype) {
        throw new Error("You must input an array of numbers!");
    } 
}