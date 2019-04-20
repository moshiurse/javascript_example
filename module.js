//Module Pattern in JS
function module() {
    var something = "cool";
    var another = [1, 2, 3];
    function doSomething() {
    console.log( something );
    }
    function doAnother() {
    console.log( another.join( " , " ) );
    }
    return {
    doSomething: doSomething,
    doAnother: doAnother
    };
    }
    var foo = CoolModule();
    foo.doSomething(); // cool
    foo.doAnother();


//Module with parameter

function module(id) {
    function newFunc() {
    console.log( id );
    }
    return {
        newFunc: newFunc
    };
    }
    var foo1 = module( "foo 1" );
    var foo2 = module( "foo 2" );
    foo1.newFunc(); // "foo 1"
    foo2.newFunc(); // "foo 2"

//returning object with the name of public API

var module= (function module(string) {
   function change() {
       publicAPI.identify = identify2;
   }
   
   function identify1() {
    console.log( string );
    }
    function identify2() {
    console.log( string.toUpperCase() );
    }

    var publicAPI = {
        change: change,
        identify: identify1
    }

    return publicAPI;

})("hello moshiur!");

module.identify();
module.change();
module.identify();