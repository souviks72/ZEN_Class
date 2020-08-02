function getFullName(firstName, lastName){
    if(firstName.length>0 && lastName.length>0)
        return firstName + " " + lastName;
    else if(firstName.length>0)
        return firstName;
    else if(lastName.length>0)
        return lastName;
    else    
        return "";
}