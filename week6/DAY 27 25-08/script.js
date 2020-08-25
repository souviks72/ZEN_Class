var Pet = /** @class */ (function () {
    function Pet(name, type, history) {
        this.name = name;
        this.type = type;
        this.history = history;
    }
    return Pet;
}());
var Availability = /** @class */ (function () {
    function Availability(pets) {
        this.pets = pets;
    }
    Availability.prototype.insert = function (name, type, history) {
        var pet = new Pet(name, type, history);
        this.pets.push(pet);
        return pet;
    };
    Availability.prototype.findStatus = function (req) {
        var n = Math.min(req.length, 5);
        var ans = [];
        var _loop_1 = function (i) {
            this_1.pets.forEach(function (pet) {
                if (pet.type === req[i].type && pet.history === req[i].type) {
                    ans.push(req[i]);
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < n; i++) {
            _loop_1(i);
        }
        return ans;
    };
    Availability.prototype.getCount = function () {
        var count = {};
        this.pets.forEach(function (pet) {
            var type = pet.type;
            if (count.hasOwnProperty(type)) {
                count[type]++;
            }
            else {
                count[type] = 1;
            }
        });
        return count;
    };
    return Availability;
}());
