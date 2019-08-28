let person = {
    name: 'Moshiur',
    age: 10,
    fight() {
        return 10;
    },
    sing(){
        return `Hi, I am ${this.name} and I can Sing`;
    }
}

person.fight();
person.sing();

let anotherPerson = {
    name: "Ela",
    age: '5'
}

const singEla = person.sing.bind(anotherPerson);

console.log(singEla())

//Inherit Person
anotherPerson.__proto__ = person;
anotherPerson.fight();

anotherPerson.isPrototypeOf(person);

for (let prop in anotherPerson) {
    console.log(prop)
}

for (let prop in anotherPerson) {
    if(anotherPerson.hasOwnProperty(prop)){
        console.log(prop)
    }

}


// Excecize
Get_Last_Year
Date.prototype.lastYear = function () {
    return this.getFullYear() - 1;
}

new Date('2019-02-28').lastYear();


// Modify an existing array

Array.prototype.map = function () {
    let arr = [];
    for (i=0; i< this.length; i++){
        arr.push((this[i] + '@@@'));
    }
    return arr;
}

[1,2,3,4,5].map();