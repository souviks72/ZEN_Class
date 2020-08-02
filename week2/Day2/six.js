var arr= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];

function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    arr.forEach(ar => {
        let obj = {};
        ar.forEach(a => {
            obj[a[0]] = a[1];
        });
        transformEmployeeData.push(obj);
    });

    return tranformEmployeeList;
}