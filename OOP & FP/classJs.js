class Person {

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    work(){
        return "I am "+this.name;
    }

}

let moshiur = new Person('moshiur',22);
moshiur.name;
moshiur.work();

//Inheritance

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'atack with ' + this.weapon
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        // console.log('what am i?', this); this gives an error
        super(name, weapon)
        console.log('what am i?', this);
        this.type = type;
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() { // this is like extending our prototype.
        return 'strongest fort in the world made'
    }
}

const houseElf = new Elf('Dolby', 'cloth', 'house')
//houseElf.makeFort() // error
const shrek = new Ogre('Shrek', 'club', 'green')
shrek.makeFort()

//another

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon
    }
}

class Queen extends Character {
    constructor(name, weapon, kind) {
        super(name, weapon)
        this.kind = kind;
    }
    attack() {
        console.log(super.attack());
        return `I am the ${this.name} of ${this.kind}, now bow down to me! `
    }
}

const victoria = new Queen('Victoria', 'army', 'hearts');
victoria.attack()
