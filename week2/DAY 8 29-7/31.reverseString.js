var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
    let t = "";
    for(let i=s.length-1;i>=0;i--)
        t+=s.charAt(i);
    return t;
}