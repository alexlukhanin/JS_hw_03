


console.log('------------Task 01-----------------');
let products = [];
products = [5,15, 'Factory', 'fat', 34, -20, 'Joe', 'Mike', true, false, 'age', 'name'];

function getLastArrayLastElement(array) {
    let index = array.length - 1;
    return array[index];
}
console.log(getLastArrayLastElement(products));


console.log('------------Task 02-----------------');
let styles = ['Jazz', 'Blues'];
console.log('array before changes:');
console.log(styles);
styles.push('Rock-n-Roll');
console.log(styles);
styles[styles.length-2] = 'Classics';
console.log(styles);
console.log('We delete the first element of array: ' + styles.shift());
console.log(styles);
styles.unshift('Rap', 'Raggie');
console.log(styles);

console.log('------------Task 03-----------------');

function find(arr, value) {
    ret = -1;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            ret = i;
        }

    }
    return ret;
}

console.log(find(products, '12'));
console.log(find(products, 'age'));
console.log(find(products, '15'));
console.log(find(products, 15));

