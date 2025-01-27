export const calculator = (function () {
    const add = function() {
        const myArguments = [...arguments];
        return myArguments
                .reduce((total, actual) => total + actual);
    }

    const subtract = function(firstValue, ...args) {
        return args.reduce((total, current)=> total - current , firstValue);
    }

    const multiply = function(...args) {
        return args.reduce((total, current) => total * current);
    }

    const divide = function (firstValue, ...args) {
        if(args.includes(0)) throw new Error("Division by zero is undefined.");
        return args.reduce((total, current) => total / current, firstValue);
    }

    return {
        add,
        subtract,
        multiply,
        divide
    }
})()