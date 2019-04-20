function funFun() {
    var a = 2;
        function inner() {
            console.log( a );
    }
    return inner;
    }
    var result = funFun();
    result();

//

var fn;
function foo() {
var a = 2;
function baz() {
console.log( a );
}
fn = baz; // assign `baz` to global variable
}
function bar() {
fn(); //closure!
}
foo();
bar();

// Closure around the world
function wait(message) {
    setTimeout( function timer(){
    console.log( message );
    }, 1000 );
    }
    wait( "Hello, closure!" );

//For loop IIFE & Closure

for (var i=1; i<=5; i++) {
    (function(){
    var j = i;
    setTimeout( function timer(){
    console.log( j );
    }, j*1000 );
    })();
    }

// Variation of Loop Closure
for (var i=1; i<=5; i++) {
    (function(j){
    setTimeout( function timer(){
    console.log( j );
    }, j*1000 );
    })( i );
    }

//Block scope closure
for (var i=1; i<=5; i++) {
    let j = i; // yay, block-scope for closure!
    setTimeout( function timer(){
    console.log( j );
    }, j*1000 );
    }

