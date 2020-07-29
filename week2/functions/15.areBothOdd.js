function areBothOdd(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !=='number')
        return -1;
    else
        return (num1%2===1 && num2%2===1);
}