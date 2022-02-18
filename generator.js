function* func(){
    yield "first";
    yield "second";
    return true;
}

let generate = func();

for (const i of generate) {
    console.log(i);
}