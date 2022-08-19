// Create a class that represents a Vehicle, it must have at least Two properties and One method. You can decide on the method.
// Create a subclass or "child" classes for a Car AND Truck.
// Car must have at least One unique property.
// Truck must have at least One unique property a& Must include the ability to Tow, with method to "activate 4 wheel drive".
// Must have at least 2 instances of each Class.

class Tesla {
    constructor(year, color) {
        this.year = year
        this.color = color
    }
    // Static Method
    static isNew(instance) {
        return instance.year > 2021 ? 'New' : 'Used'
    }
}

class car extends Tesla {
    constructor(year, color, turbo = false) {
        super(year, color, turbo)
        this.turbo = turbo
    }
    activateTurbo() {
        return this.turbo ? 'I am.. SPEED' : 'damn.'
    }
}

let modelX = new car(2022, 'Black', true);

console.log(modelX.activateTurbo());
console.log(Tesla.isNew(modelX));