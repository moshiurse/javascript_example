var a = "Hello!";

first();

function first(){
  var b= "Moshiur!";
  second();

  function second(){
    var c = "How are you?";
    console.log(a + b + c);
  }
}

//print console
function inner(a) {
  var b = 2;
  function nested() {
  }
  var c = 3;
  console.log(a,b,c);
  }
  
  inner(5);
  //result5 2 3

  //Hiding in a plain scope
  function doSomething(a) {
    function doSomethingElse(a) {
    return a - 1;
    }
    var b;
    b = a + doSomethingElse( a * 2 );
    console.log( b * 3 );
    }
    doSomething( 2 ); // 15


    //
