let obj = {
    name: "jon",
    age: 10,
    pwoli: true,
    "something something": true
};

console.log(obj.pwoli);
console.log(obj["something something"]);
console.log(obj['name']);


let yoyo = {};

yoyo['first'] = 5;
yoyo['second'] = "second";
yoyo.third = "three"

console.log(yoyo.first);
console.log(yoyo.second[1]);