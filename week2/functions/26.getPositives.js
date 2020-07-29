function getPositives(ar)
{
    return ar.filter(e => e>0);
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);