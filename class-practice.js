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