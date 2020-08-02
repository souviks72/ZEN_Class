class Cirlce{
    constructor(){
        this.radius = 1.0;
        this.color = "red";
    }

    constructor(radius){
        this.radius = radius;
    }

    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }

    getRadius(){
        return this.radius;
    }

    getColor(){
        return this.color;
    }

    setRadius(radius){
        this.radius = radius;
    }

    setColor(color){
        this.color = color;
    }

    toString(){
        let circle = `${this.radius}, ${this.color}`;
        return circle;
    }

    getArea(){
        return Math.PI * Math.pow(this.radius,2);
    }
}