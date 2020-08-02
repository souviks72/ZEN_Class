var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
    let newObject = {};
    arr.forEach(a => {
        newObject[a[0]] = a[1];
    })

    return newObject;
}