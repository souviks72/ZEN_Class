var slice = function (arr, start, end) {
    if (arr.length === 0)
        return [];
    if (start > arr.length - 1) {
        throw new Error("Array Out of Bounds");
    }
    if (end > arr.length - 1) {
        return arr;
    }
    var result = [];
    while (start < end) {
        result.push(arr[start++]);
    }
    return result;
};
var chunks = function (arr, size) {
    if (arr.length === 0 || size === 0) {
        return [];
    }
    if (size > arr.length) {
        return arr;
    }
    var res = [];
    var s = Math.ceil(arr.length / size);
    var i = 0;
    while (i < s) {
        res.push(slice(arr, i, i + size));
        i++;
    }
    return res;
};
// const map = (arr,func) => {
//     if(arr.length === 0 || func === null || func === undefined){
//         return [];
//     }
//     let i = 0;
//     let res = [];
//     while(i<arr.length){
//         let x = func(arr[i],i,arr);
//         res.push(x);
//         i++;
//     }
//     return res;
// }
var filter = function (arr, func) {
    if (arr.length === 0 || func === null || func === undefined) {
        return [];
    }
    var i = 0;
    var res = [];
    while (i < arr.length) {
        if (func(arr[i], i, arr) === true)
            res.push(arr[i]);
        i++;
    }
    return res;
};
var reduce = function (arr, func, acc) {
    if (arr === null || arr.length === 0)
        return undefined;
    var i = 0;
    while (i < arr.length) {
        acc = func(acc, arr[i], i, arr);
        i++;
    }
    return acc;
};
var sum = function (arr) {
    if (arr === null || arr === undefined || arr.length === 0)
        return 0;
    var s = 0, i = 0;
    while (i < arr.length) {
        s += arr[i++];
    }
    return s;
};
var find = function (arr, x) {
    if (arr === null || arr === undefined || arr.length === 0)
        return false;
    var i = 0, flag = false;
    while (i < arr.length) {
        if (arr[i] === x)
            return true;
        i++;
    }
    return false;
};
