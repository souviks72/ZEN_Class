function sortArray(values){
    if(values instanceof Array){
        values.sort(function(a,b){
            if(typeof a === 'number' && typeof b === 'number')
                return b-a;
        })
    }else{
        throw new Error("Invalid arguments");
    }
}