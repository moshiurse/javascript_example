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
