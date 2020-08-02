class tv{
    constructor(brand='Sony',channel=1,price,inches,status,volume=50){
        this.brand = brand;
        this.channel = channel;
        this.price = price;
        this.inches = inches;
        this.status = status;
        this.volume = volume;
    }

    increaseVolume(change){
        if(this.volume + change <= 100){
            this.volume = this.volume + change;
        }
    }

    decreaseVolume(change){
        if(this.volume - change >= 0){
            this.volume = this.volume - change;
        }
    }

    setChannel(channel){
        if(channel >= 1 && channel <= 50){
            this.channel = channel;
        }
    }

    reset(){
        this.constructor(brand,price,inches,status){
            this.brand = brand;
            this.price = price;
            this.inches = inches;
            this.status = status;
        }
    }

    getStatus(){
        return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
    }
}

class LED extends tv{
    constructor(brand='Sony',channel=1,price,inches,status,volume=50,thickness,energyRating,lifeSpan,refreshRate){
        super(brand='Sony',channel=1,price,inches,status,volume=50);
        this.thickness = thickness;
        this.energyRating = energyRating;
        this.lifeSpan = lifeSpan;
        this.refreshRate = refreshRate;
    }

    getViewingAngle(){
        return "160deg";
    }

    getLifeSpan(){
        return "12 years";
    }

    getDisplayDetails(){
        return `Display type: LED, thickness: ${this.thickness}, refresh rate: ${this.refreshRate}`;
    }
}

class Plasma extends tv{
    constructor(brand='Sony',channel=1,price,inches,status,volume=50,thickness,energyRating,lifeSpan,refreshRate){
        super(brand='Sony',channel=1,price,inches,status,volume=50);
        this.thickness = thickness;
        this.energyRating = energyRating;
        this.lifeSpan = lifeSpan;
        this.refreshRate = refreshRate;
    }

    getViewingAngle(){
        return "120deg";
    }

    getLifeSpan(){
        return "7 years";
    }

    getDisplayDetails(){
        return `Display type: Plasma, thickness: ${this.thickness}, refresh rate: ${this.refreshRate}`;
    }
}