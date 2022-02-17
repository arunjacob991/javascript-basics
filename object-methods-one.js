let obj = {
    name: "shibu",
    age: 25,
    pwoli: true
};

console.log(obj.pwoli);
let newObj = obj;
console.log(newObj.age);

// assign()
const target = {
    a: 1,
    b: 2
}
const number = {
    b: 4,
    c: 5
}

const newNumber = Object.assign(target, number)

console.log(newNumber);

const one = {
    a: 1
};
const newOne = Object.assign({}, one);

console.log(newOne);

// create()

const person = {
    name: "babu"
};

const newPerson = Object.create(person);

console.log(newPerson);

const personOne = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };

const member = Object.create(personOne);

member.name = "kunju";
member.isHuman = true;

member.printIntroduction();