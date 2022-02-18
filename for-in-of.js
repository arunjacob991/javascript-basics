const name = ['sheela', 'radha', 'valsa']

name.car = 'benz';

Object.defineProperty(name, 'bike', {
    value: 'honda',
    enumerable: true
});

for(let p in name){
    console.log(p);
}

for( let x of name){
    console.log(x);
}

let obj = {
    name: "shibu",
    age: 25,
    pwoli: true
}

for(let x in obj){
    console.log(x);
}

