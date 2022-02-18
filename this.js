let obj = {
    name: "shibu",
    age: 25,
    greet(){
        return `Hello ${this.name}`
    }
};

console.log(obj.greet());