export const analyzeArray = function(array) {
    if(!array || Object.getPrototypeOf(array) !== Array.prototype) {
        throw new Error("You must input an array of numbers!");
    } 

    if(array.length === 0) return {}
    
    return {
        average: analyzer.calculateAverage(array),
        min: analyzer.findMin(array),
        max: analyzer.findMax(array),
        length : array.length
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

    const findMin = function(array) {
        return array
                .reduce((min, current) => {
                    if(typeof current === 'number') return min > current ? current : min; 
                    throw new Error("You must input an array of numbers!")
                }, array[0])
    }

    const findMax = function(array) {
        return array
        .reduce((max, current) => {
            if(typeof current === 'number') return max < current ? current : max; 
            throw new Error("You must input an array of numbers!")
        }, array[0])
    }

    return {
        calculateAverage,
        findMin, 
        findMax
    }
})();

