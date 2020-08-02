class Bank{
    constructor(code,address){
        this.code = code;
        this.address = address;
    }

    manages(){}
    mainatains(){}
}

class ATM{
    constructor(location,managedBy){
        this.location = location;
        this.managedBy = managedBy;
    }

    identifies(){}
    transactions(){}
}

class Customer{
    constructor(name,address,dob,cardNumber,pin){
        this.name = name;
        this.address = address;
        this.dob = dob;
        this.cardNumber = cardNumber;
        this.pin = pin;
    }

    verifyPassword(){}
}

