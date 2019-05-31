var obj = {a:'a',b:'b'};
var obj2 = obj;

console.log(obj2);
obj2.b = 10;

console.log(obj);

var newInnerObj = {a: 'a',b: 'b',
 c: {
        inner: 'This is inner'
    }
};
var clone = Object.assign({},newInnerObj);
console.log(clone);
var cloneSuper = JSON.parse(JSON.stringify(newInnerObj));
newInnerObj.c.inner = 'Hello Modified Obj';
var clone2 = Object.assign({},newInnerObj);
console.log(clone);
console.log(cloneSuper);
