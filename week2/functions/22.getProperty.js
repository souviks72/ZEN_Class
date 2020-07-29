var obj = {
    mykey: "value"
};
function getProperty(obj, key) {
    if(key in obj)
        return obj.key;
    return "NA";
}