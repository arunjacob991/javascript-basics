let sum = function(...num){
    return num.reduce((prev, curr) => 
         prev + curr

    
    )
}

console.log(sum(1,2,3,4,5));

let arr = [1,2,3,4,5];
let arr1 = [7,8,9];

let array = [...arr, arr1];

console.log(array);


function add(...arg){
    return arg.reduce((prev, curr) =>
        prev + curr
    )

}

let number = [1,2,3,4,5,6,7,8,9]

console.log(add(...number));