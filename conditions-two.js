const value = 10;
let item = 0;

while(item < value){
    item++;
    console.log(`while is looping until value is less than item : ${item}`);
}

for(let i = 0; i < 5; i++ ){
    console.log(i);
}

// for(;;){
//     console.log("all high loops");
// }

// above is infinite loop using for...

let num = 5;

let message = (num <= 5 ? console.log("around five") : console.log("more than five"))

// console.log(message);

let first = null;
let second = "second";
let third = null;

console.log(first ?? second ?? third ?? "nothing");