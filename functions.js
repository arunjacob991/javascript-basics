let b = 3

function fun(a){
    // let a = 1;
    return a + b;
}

console.log(fun(2));

let yoyo = function(){
    console.log(true);
}

yoyo();

let hoyya = yoyo;

hoyya();



let nameFun = function(name){
    console.log(`hoyyahoi ${name}`);
}

nameFun("some values");