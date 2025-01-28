export const analyzeArray = function(array) {
    if(!array || Object.getPrototypeOf(array) !== Array.prototype) {
        throw new Error("You must input an array of numbers!");
    } 
    
    return {
        average: analyzer.calculateAverage(array)
    }


}

const analyzer = (function() {
    const calculateAverage = function(array) {
        return (array
            .reduce((total, current) => {
                if(typeof current === 'number') return total + current;
                else throw new Error("You must input an array of numbers!");
            })) / array.length ;
    }

    return {
        calculateAverage,
    }
})();

