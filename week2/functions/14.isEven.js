function isEven(num){
    if(typeof num !== 'number')
        return -1;
    return num%2 === 0;
}
var even = isEven(5)