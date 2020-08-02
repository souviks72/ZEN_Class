(function(arr){
    let obj = {};
    let ar = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] in obj)
            continue;
        else{
            obj[arr[i]] = i;
            ar.push(arr[i]);
        }
    }
    console.log(ar);
})([1,2,3,4,5,5,4,3]);