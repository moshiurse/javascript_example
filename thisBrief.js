function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello, I'm " + identify.call(this);
    console.log( greeting );
}

var moshiur = {
    name: "Moshiur"
}

var sadia = {
    name: "Sadia"
}

identify.call(moshiur);
identify.call(sadia);

speak.call(moshiur);
speak.call(sadia);

//we can use context instead of this
function identify(context) {
    return context.name.toUpperCase();
}

function speak(context) {
    var greeting = "Hello, I'm " + identify.call(context);
    console.log( greeting );
}

//Referencing foo.count by this by using call()

function foo(num) {
    console.log( "foo: " + num );
    // keep track of how many times `foo` is called
    // Note: `this` IS actually `foo` now, based on
    // how `foo` is called (see below)
    this.count++;
    }
    foo.count = 0;
    var i;
    for (i=0; i<10; i++) {
    if (i > 5) {
    // using `call(..)`, we ensure the `this`
    // points at the function object (`foo`) itself
    foo.call( foo, i );
    }
    }
    // foo: 6
    // foo: 7
    // foo: 8
    // foo: 9
    // how many times was `foo` called?
    console.log( foo.count ); // 4

    //find out Call site from Call STack functions
    function baz() {
        // call-stack is: `baz`
        // so, our call-site is in the global scope
        console.log( "baz" );
        bar(); // <-- call-site for `bar`
        }
        function bar() {
        // call-stack is: `baz` -> `bar`
        // so, our call-site is in `baz`
        console.log( "bar" );
        foo(); // <-- call-site for `foo`
        }
        function foo() {
        // call-stack is: `baz` -> `bar` -> `foo`
        // so, our call-site is in `bar`
        console.log( "foo" );
        }
        baz(); // <-- call-site for `baz`



        //Default This binding
        function foo(){
            console.log(this.a);
            }
            var a = 2;
            foo(); //2