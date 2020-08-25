class Pet{
    name: string;
    type: string;
    history: string;


    constructor(name: string,type: string,history: string){
        this.name = name;
        this.type = type;
        this.history = history;
    }
}

class Availability{
    pets: Pet[];

    constructor(pets: Pet[]){
        this.pets = pets;
    }

    insert(name: string, type: string, history: string){
        let pet = new Pet(name,type,history);
        this.pets.push(pet);
        return pet;
    }

    findStatus(req: Pet[]){
        let n = Math.min(req.length,5);
        let ans = [];
        for(let i=0;i<n;i++){
            this.pets.forEach(pet =>{
                if(pet.type === req[i].type && pet.history === req[i].type){
                    ans.push(req[i]);
                }
            })
        }
        return ans;
    }

    getCount(){
        let count = {};
        this.pets.forEach(pet =>{
            let {type} = pet;
            if(count.hasOwnProperty(type)){
                count[type]++;
            }else{
                count[type] = 1;
            }
        });
        return count;
    }
}