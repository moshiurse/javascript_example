console.log("Hello To javascript Developer")

//-------------------Variable basic---------------------

var age = 18;
console.log(age);
var fname = 'moshiur';
var lname = 'rahman';

console.log(fname + " "+lname);

//var name = prompt("what is your name? ?");

//alert(name);

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