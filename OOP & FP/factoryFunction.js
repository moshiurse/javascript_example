function createEnemy(name,age) {
    return {
        name: name,
        age: age,
        work(){
            return 'I am '+name;
        }
    }
}

const moshiur = createEnemy('Moshiur',23);

moshiur.work();


//Object.create

const CommonFunction = {
 work() {
    return 'I am '+this.name;
}
}

function createEnemy(name,age) {
    return {
        name,
        age
    }
}

//anmother process
function createEnemy(name,age) {
    let newElement = Object.create(CommonFunction);
    newElement.name = name;
    newElement.age = age;

    return newElement;
}

const moshiur = createEnemy('Moshiur',23);

moshiur.work = CommonFunction.work();