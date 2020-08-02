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

class ATMTransactions{
    constructor(id,date,type,amount,postBalance){
        this.id = id;
        this.date = data;
        this.type = type;
        this.amount = amount;
        this.postBalance = postBalance;
    }

    modifies(){}
}

class Account{
    constructor(number,balance){
        this.number = number;
        this.balance = balance;
    }

    deposit(){}
    withdraw(){}
    createTransaction(ATMTransactions){}
}

class currentAccount extends Account{
    constructor(number,balance){
        super(number,balance);
    }
}

class savingsAccount extends Account{
    constructor(number,balance){
        super(number,balance);
    }
}
