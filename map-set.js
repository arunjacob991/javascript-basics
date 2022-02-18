let map = new Map();

map.set('1', "yoyo");

console.log(map.get("1"));

let set = new Set();

let john = {name: "John"};
let kunju = {name: "kunju"}

set.add(john);
set.add(kunju);
set.add(john);

for(let p of set){
    console.log(p);
}


class User{
    constructor(name){
        this.name = name
    }

    sayHai(){
        console.log(this.name);
    }
}

let user = new User("arnold");

user.sayHai();

const myObj = {
    name: "vasumon",
    greet(){
        console.log(`yoo man..${this.name}`);
    }
}

myObj.greet();

console.log(Object.getPrototypeOf(myObj));

const carl = Object.create(myObj);

carl.greet();

console.log(Object.getPrototypeOf(carl));