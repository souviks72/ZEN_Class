class calculator{
    constructor(op1,op2){
        this.op1 = op1;
        this.op2 = op2;
    }

    add(){
        return this.op1+this.op2;
    }

    subtract(){
        return this.op1-this.op2;
    }

    multiply(){
        return this.op1*this.op2;
    }

    divide(){
        return this.op1/this.op2;
    }
}

let c = new calculator(20,10);
console.log(c.add());
console.log(c.subtract());
console.log(c.multiply());
console.log(c.divide());