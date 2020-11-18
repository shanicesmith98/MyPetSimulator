class Pet {
    constructor (name) {
        this.name = name;
        this.age = "Newborn";
        this.health = "Healthy";
        this.healthStatus = 5;
        this.type = "Pet";
    }    

    get status () {
        return `${this.name} is a ${this.age}, ${this.health} ${this.type}!`;
    }

    get health () {
        if (this.healthStatus > 2) {
            return `${this.name} is feeling hungry. You should feed them!`;
        }
        else if (this.healthStatus >= 5 && this.healthStatus < 10) {
            return `${this.name} is feeling happy - Time to play!`;
        }
        else {
            return `${this.name} is feeling happy - Time to play!`;
        }
    }

    speak () {
        return `${this.name} made a noise!`;
    }

    eat () {
        this.healthStatus++;
        if (this.healthStatus >= 10) {
            return `Your {this.type} is getting full! Maybe it's time for a nap...`
        }

        return `You just fed ${this.name} some yummy Pet snacks!`;
    }

}

class Dog extends Pet {
    constructor (name) {
        super(name);
        this.type = "Dog";
    }

    speak () {
        super.speak();
        return `${this.name} said roof!`;
    }

    eat () {
        super.eat();
        this.healthStatus++;
        return `You just fed ${this.name} some yummy ${this.type} snacks!`;
    }
}

class Cat extends Pet {
    constructor (name) {
        super(name);
        this.type = "Cat";
    }

    speak () {
        super.speak();
        return `${this.name} said meow!`;
    }

    eat () {
        super.eat();
        this.healthStatus++;
        return `You just fed ${this.name} some yummy ${this.type} snacks!`;
    }
}