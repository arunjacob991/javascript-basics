let arr = [1, 2, [3, 4, 5]];

console.log(arr);

console.log(arr.flat());

console.log(arr.fill(7));

console.log(arr.join(""));

let array = [2, 3, 5, 4, 1]

console.log(array.sort());

array.sort((a, b) => b - a);

console.log(array);

const even = num => num % 2 === 0;

console.log(array.some(even));

let array5 = [2, 3, 5, 4, 1]

const evenAgain = num => num % 2 === 0;

console.log(array5.every(evenAgain));


let arr1 = [5, 6, 7, 8, 9];

let number = arr1.keys();

for(let key of number){
    
    console.log(key);
}

let value = arr1.values();

for (const iterator of value) {
    console.log(iterator);
}