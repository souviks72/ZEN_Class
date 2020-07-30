(function(arr,k){
    arr = reverse(arr,0,arr.length-1);
    arr = reverse(arr,0,k-1);
    arr = reverse(arr,k,arr.length-1);
    console.log(arr);
})([1,2,3,4],2);

function reverse(arr,start,end){
    while(start<=end){
        let t = arr[start];
        arr[start] = arr[end];
        arr[end] = t;
        start++;
        end--;
    }
    return arr;
}