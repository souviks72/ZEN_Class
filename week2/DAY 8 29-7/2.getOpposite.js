function getOpposite(num){
    if(typeof num !== 'number')
        return -1;
    else{
        if(num - parseInt(num)!==0)
            return -1;
        else    
            return num*(-1);
    }
}