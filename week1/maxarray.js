var arr = [1,2,3,4,10,9,8,11,12];
var max = -1;
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max = arr[i];
    }
}

console.log(max);