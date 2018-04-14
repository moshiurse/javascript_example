// Function Constructor

var Person = function (name, year, job) {
    this.name = name;
    this.year = year;
    this.job = job;
}

Person.prototype.calculate = function () {
    console.log(2018-this.year);
    
}

Person.prototype.sex = 'male';

var john = new Person('john', 1995, 'Teacher');
var moshiur = new Person('Moshiur', 1997, 'Programmer');
var jane = new Person('jane', 1970, 'Developer');

john.calculate();
moshiur.calculate();
jane.calculate();

console.log(john.sex);
console.log(moshiur.sex);
console.log(jane.sex);


// Object.create

var personProto = {
        calculateAge: function () {
            console.log(2018-this.year);
        }
};

var doe = Object.create(personProto);
doe.name = 'Doe';
doe.year = 1980;
doe.job = 'Designer';

var max = Object.create(personProto, {
    name : { value : 'Max' },
    year : { value : 1971 },
    job: { value : 'Minister'}
});
