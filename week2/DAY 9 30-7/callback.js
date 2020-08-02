const add = (a,b) => a+b;
const sub = (a,b) => a-b;
const mul = (a,b) => a*b;
const div = (a,b) => a/b;

const arr = [add,sub,mul,div];

function callback(arr,f){
    let a = 10,b = 20;
    return arr[f](a,b);
}

let a = callback(arr,0);
console.log(a);