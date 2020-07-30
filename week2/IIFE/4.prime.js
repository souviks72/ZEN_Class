function isPrime(n){
    let c = 0;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            c++;
            break;
        }
    }
    if(c>0)
        return false;
    else
        return true;
}

(function(arr){
    let ar = arr.filter(a => isPrime(a));
    console.log(ar);
})([1,2,3,4,5,6,7,8]);