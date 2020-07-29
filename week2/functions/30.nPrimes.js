function getPrimes(nPrimes, startAt)
{
    let c = 0;
    let arr = [];
    while(c<nPrimes){
        if(isPrime(startAt)){
            arr.push(startAt);
            c++;
        }
        startAt++;
    }
    return arr; 
}
// Returns true if a number is prime
function isPrime(n)
{
    let c = 0;
    for(let i= 2;i<=Math.sqrt(n);i++){
        if(n%i===0)
            c++;
    }
    return  c>0? false:true;
}