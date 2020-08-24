const slice = (arr,start: number,end: number) =>{
    
    if(arr.length===0)
        return [];
    
    if(start > arr.length-1 ){
        throw new Error(`Array Out of Bounds`)
    }

    if(end > arr.length-1){
        return arr;
    }

    let result = [];

    while(start<end){
        result.push(arr[start++]);
    }

    return result;
}

const chunks = (arr,size: number) => {
    if(arr.length===0 || size===0){
        return [];
    }
    
    if(size > arr.length){
        return arr;
    } 
    
    let res = [];
    let s = Math.ceil(arr.length/size);
    let i = 0;

    while(i<s){
        res.push(slice(arr,i,i+size));
        i++;
    }
    return res;
}

const map = (arr,func) => {
    if(arr.length === 0 || func === null || func === undefined){
        return [];
    }

    let i = 0;
    let res = [];
    while(i<arr.length){
        let x = func(arr[i++]);
        res.push(x);
    }
    return res;
}

const filter = (arr,func) => {
    if(arr.length === 0 || func === null || func === undefined){
        return [];
    }

    let i = 0;
    let res = [];
    while(i<arr.length){
        if(func(arr[i])===true)
            res.push(arr[i]);
        i++;
    }
    return res;
}

const reduce = (arr,func,acc) => {
    if(arr===null || arr.length === 0)
        return undefined;

    let i = 0;
    while(i<arr.length){
        acc += func(arr[i]);
        i++;
    }
    return acc;
}   
