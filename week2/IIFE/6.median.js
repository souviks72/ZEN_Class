(function(ar1,ar2){
    let arr = [];
    let i=0,j=0,k=0,m=ar1.length,n=ar2.length;
    while(i<m && j<n){
        if(ar1[i]<=ar2[j]){
            arr[k] = ar1[i];
            i++;
        }else if(ar1[i]>ar2[j]){
            arr[k] = ar2[j];
            j++;
        }
        k++;
    }
    while(i<m)
        arr[k++] = ar1[i++];
    while(j<n)
        arr[k++] = ar2[j++];
    let med = Math.floor(k/2);
    console.log(arr[med]);
})([1,2,3,6],[4,5]);