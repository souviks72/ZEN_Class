var arr = [1, 2, 3];
function getFirstElement(arr) {
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i]*3600;
    }
    return arr;
}
var data = getFirstElement(arr)