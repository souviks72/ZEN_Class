(function(arr){
    let ar = [];
    ar = arr.filter(el => isPalindrome(el));
    console.log(ar);
})([121,343,45,46]);

function isPalindrome(n){
    let a = 0,b=n;
    while(n!==0){
        let d = n%10;
        n=parseInt(n/10);
        a=a*10+d;
    }
    if(a===b)
        return true;
    else    
        return false;
}