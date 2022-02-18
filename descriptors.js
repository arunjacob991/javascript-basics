let obj = {};

Object.defineProperty(obj, 'name',{
    value: "vasu",
    writable: true,
    enumerable: true,
    configurable: false
})

console.log(obj.name);

let descriptor = Object.getOwnPropertyDescriptor(obj, "name");

console.log(descriptor);