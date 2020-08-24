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
var map = function (arr, func) {
    if (arr.length === 0 || func === null || func === undefined) {
        return [];
    }
    var i = 0;
    var res = [];
    while (i < arr.length) {
        var x = func(arr[i++]);
        res.push(x);
    }
    return res;
};
var filter = function (arr, func) {
    if (arr.length === 0 || func === null || func === undefined) {
        return [];
    }
    var i = 0;
    var res = [];
    while (i < arr.length) {
        if (func(arr[i]) === true)
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
        acc += func(arr[i]);
        i++;
    }
    return acc;
};
