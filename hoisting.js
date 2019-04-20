a = 2;
var a;
console.log( a );//2

console.log( a );//2
var a = 2;

//Duplicate function declare

foo(); // 3
function foo() {
console.log( 1 );
}
var foo = function() {
console.log( 2 );
};
function foo() {
console.log( 3 );
}


////////////

foo(); // "b"
var a = true;
if (a) {
function foo() { console.log( "a" ); }
}
else {
function foo() { console.log( "b" ); }
}