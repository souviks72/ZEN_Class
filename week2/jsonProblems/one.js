const printAllValues = (obj) => {
    let arr = [];
    let keys = Object.keys(obj);
    keys.forEach(key => arr.push(obj.[key]));
    return arr;
};
