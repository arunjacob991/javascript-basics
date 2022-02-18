let name = "jacz";

function print(){
    console.log(name);
}

name = "newname";

print();

name = "new other name"

print();


function outerFunction(outerVariable){
    const newVariable = "yoyo";
   return function innerFunction(innerVariable){
        console.log(outerVariable);
        console.log(innerVariable);
        console.log(newVariable);
    }
}

const newFunction = outerFunction("outer");

newFunction("inner");