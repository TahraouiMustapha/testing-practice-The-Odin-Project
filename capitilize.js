export function capitilize(string = null) {
    if (string === '') return '';
    if (string) {
        if (string.includes('.')) {
            const newStr = string.split('.');
            const result = newStr
                    .map(str => capitilize(str))
                    .reduce((res, str) => res.concat('.', str));
            return result;
        } else {
            let firstLetter = string.trim().split('')[0];
            let indexOfFirstLetter = string.indexOf(firstLetter);

            return string.slice(0, indexOfFirstLetter) 
                    + firstLetter.toUpperCase()
                    +string.slice(indexOfFirstLetter + 1);
        }
    }
    throw new Error("You must input a string");
}