let arr = ['shibu', 'sasi', 'sabu', 'babu', 'kunju'];

let [a, b] = arr;

console.log(a);
console.log(b);

let person = {
    name: "vasu",
    age: 25,
    awesome: true,
    place: "mars"
};

console.log(person.name);

let {name, age, awesome} = person;

console.log(age);

let {name: n} = person;

console.log(n);

let {max: z = 50} = person;

console.log(z);

console.log(Object.entries(person));