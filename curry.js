function sum(a){
    return function sum1(b){
        return function sum2(c){

            console.log(a + b + c);
        }
    }
}

sum(1)(2)(3);