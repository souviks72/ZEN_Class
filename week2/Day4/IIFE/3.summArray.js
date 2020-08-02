(function(arr){
    let sum = arr.reduce((acc,next) => { return acc + next},0);
    console.log(sum);
})([1,2,3]);