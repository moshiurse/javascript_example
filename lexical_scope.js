//printing in console

var a = 10;
window.a

//cheating lexical scope

function cheat(str, a) {
    eval( str ); // cheating!
    console.log( a, b );
    }
    var b = 2;
    cheat( "var b = 3;", 1 );