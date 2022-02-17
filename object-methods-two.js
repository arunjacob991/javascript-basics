const obj = {
    a: 1,
    b: 2,
    c: 3
};

console.log(Object.keys(obj));

console.log(Object.values(obj));

console.log(Object.entries(obj));


Object.seal(obj);

obj.a = 5;
obj.d = 9;

console.log(obj.d);


console.log(obj.a);

delete obj.b;

obj['e'] = 10;

console.log(obj.b);

Object.freeze(obj);

obj.a = 7;

console.log(obj.a);