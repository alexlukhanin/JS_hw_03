console.log('------------Task 04-----------------');

let array = [-24, 15, 20, 159, -11, 0, 4, -250, 45, 56, 0.5, 99, -98, 11, 17, 25];

function filterRange(array, a, b) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if((array[i] <= b) && (array[i] >= a)) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

console.log(filterRange(array, -20, 40));
console.log(filterRange(array, -11, 4));

console.log('------------Task 05-----------------');
let str = 'my-short-string';

function camelize(str) {
    let arr = str.split('-'); // parsed string to array 'arr'
    let arrLetters = []; // array of letters

    let returnString = arr[0];  //returnString gets first word
    for (let i = 1; i < arr.length; i++) {
            arrLetters = arr[i].split('');
            let tempStr = arrLetters[0].toLocaleUpperCase();
            for (let j = 1; j < arrLetters.length; j++) {
                tempStr = tempStr + arrLetters[j].toLowerCase();
            }
        returnString = returnString + tempStr;
    }
    return returnString;
}

console.log(camelize(str));
console.log(camelize('count-number-of-games'));
console.log(camelize('send-a-letter-to-me'));
