console.log("Hello To javascript Developer")

//-------------------Variable basic---------------------

var age = 18;
console.log(age);
var fname = 'moshiur';
var lname = 'rahman';

console.log(fname + " "+lname);

/*
Basic DataType
var a = 9
undefined
typeof(a)
"number"
typeof(a)
"number"
a = "jsushas"
"jsushas"
typeof(a)
"string"
a = null
null
typeof(a)
"object"
a = undefined
undefined
typeof(a)
"undefined"
a = {b: "c"}
{b: "c"}
typeof(a)
"object"
a = [1,2]
(2) [1, 2]
typeof(a)
"object"
*/

//var name = prompt("what is your name? ?");

//alert(name);



// object
/*
In Console........
var a = {
    a: 20,
    b: "Hello Moshiur!",
    c: true
    }
    undefined
    a.a;
    20;
    a.b
    "Hello Moshiur!"
    a.c
    true
    a["a"]
    20

    var obj = {
    a: "hello world",
    b: 42
    };
var b = "a";
undefined;
obj[b]
"hello world"
obj["b"]
42
*/
//---------------------------Condition--------------------------

if(age<20){
    console.log("You are kid !!");
}else if(age<50){
    console.log("You are Middle Age Person !!");
}else{
    console.log("You are old");
}

if(20 == "20"){
   console.log("print it");
}
if(20 === "20"){
    console.log("print nothing");
}

//---------------Switch Statements---------------------

var gender= "male";

switch(gender){
    case 'male':
        console.log("Moshiur is male");
        break;
    case 'female':
        console.log("Sadia is female");
        break;
        
    default:
        console.log("I am confused!!");
}