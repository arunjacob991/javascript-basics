// forEach, map, reduce, filter

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr);

arr.forEach((x => console.log(x)))


const newarr = arr.map(num => num + 'yoyo');

console.log(newarr);

let array = [1, 2, 3, 4, 5, 6, 7]

const arrOne = array.filter(val => val > 5);

console.log(arrOne);

const sum = array.reduce((prev, curr) => prev + curr);

console.log(sum);