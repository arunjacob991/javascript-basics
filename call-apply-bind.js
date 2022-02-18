let obj = {
    num: 3
};

let fun = function(a, b, c){
    console.log(this.num + a + b + c);
}

fun.call(obj, 5, 7, 9);

let arr = [10, 20, 30];

fun.apply(obj, arr)

var bound = fun.bind(obj)

bound(1,2,3);