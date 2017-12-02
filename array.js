console.log("--------------Array.JS-------------");

var name = ['A', 'B','C'];

console.log(name);

var value = ['A', 'bcd', 'abc'];

value.push("E");
console.log(value);

value.unshift(0);
console.log(value);

value.pop();
console.log(value);

value.shift("E");
console.log(value);

console.log(value.indexOf("bcd"));

//------------------Object----------------------

var person = {
    name: 'Moshiur',
    age: 20,
    status: 'single',
    dist: 'mymensingh'
}

console.log(person);
console.log(person.name);
console.log(person.dist);

var ab = 'age';
console.log(person[ab]);

person.age = 25;
person.status = 'mingle';
console.log(person);

var another = new Object();
another.name = "karim";
another['job'] = 'progammer';

console.log(another);