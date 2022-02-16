var x = function(){

    if(true){
        var y = 1;
    }

    if(true){
        var y = 2;
    }

    return y;
}

console.log(x());

var x = function(){

    let y;
    const z = 1;
    
    if(true){
        y = 1;
        console.log(z);
    }
   
    
    return y;
}

console.log(x());


var a = 2;

var fun = function(){

    console.log(a);

    var a = 1;
}

fun();