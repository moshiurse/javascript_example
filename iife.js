// Immediately invoked function expression

(function () {
    var score = Math.random() *10;
    console.log(score >= 5);
})();

(function (goodLuck) {
    var score = Math.random() *10;
    console.log(score >= 5 -goodLuck);
})(5);

//another variation of IIFE

var a = 2;
(function IIFE(global){
var a = 3;
console.log( a ); // 3
console.log( global.a ); // 2
})( window );
console.log( a );

//variation when using undefined
undefined = true;
(function IIFEUndefined( undefined ){
var a;
if (a == undefined) {
console.log( "Running Undefined!" );
}
})();

// function scope using function expression in second snippet

var a = 2;
(function IIFEWithFuncExpression( def ){
def( window );
})(function def( global ){
var a = 3;
console.log( a ); // 3
console.log( global.a ); // 2
});
