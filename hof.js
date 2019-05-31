//HOF means Higher order functions

const giveAccessTo =  (name) =>
    'Access granted to' + name;

function authenticate(verify) {

    let array = [];
    for(let i = 0; i < verify ; i++){
        array.push(i);
    }

    return giveAccessTo(person.name);
    
}

function sing(person) {
    return 'hahahahaha my name is '+person.name;    
}

function letPerson(person,fn){
    if (person.level === 'user') {
       return fn(person);
    }else if(person.level === 'admin'){
        return fn(person);
    }
}

letPerson({level: 'user', name: 'Sadia'}, sing);

//lets make a generic multiply function

const multiplyby = function (num1) {

    return function (num2) {
        return num1 * num2;
    }
    
}

const multiplyByFive = multiplyby(5);

multiplyByFive(10);
multiplyByFive(15);

const multiplyByTen = multiplyby(10);

multiplyByTen(5);
multiplyByTen(10);