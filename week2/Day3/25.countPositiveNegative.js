var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    let p = 0, n=0;
    arr.forEach(element => {
        if(element<0)
            n++;
        else if(element>0)
            p++;
    });
    arr.unshift(p,n);
    return arr;
}
console.log(ar2);