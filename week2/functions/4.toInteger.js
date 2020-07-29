var mystr = "5";
function toInteger(mystr) {
    try{
        return parseInt(mystr);
    }catch(e){
        return "Conversion failed";
    }
    
}
var myint = toInteger(mystr)