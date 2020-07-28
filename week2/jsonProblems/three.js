var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
function convertListToObject(obj) {
    let arr = [];
    let keys = Object.keys(obj);
    keys.forEach(key => {
        let ar = [key,obj.key];
        arr.push(ar);
    });
    return arr;
}