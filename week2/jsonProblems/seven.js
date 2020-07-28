var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
    let a = JSON.stringify(actual);
    let b = JSON.stringify(expected);
    if(a===b)
        return "passed";
    else    
        return "failed";
}