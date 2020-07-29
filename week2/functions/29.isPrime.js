function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " → ", i);
 n++;
 }
 
 i++;
 }
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