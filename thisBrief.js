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

//Implicit Binding

function foo() {
    console.log( this.a );
    }
    
    var obj = {
        a: 2,
        foo: foo
    }
    obj.foo();//2

//top/last level of an object property reference chain matters to the call-site
function foo() {
    console.log( this.a );
    }
    var obj2 = {
    a: 42,
    foo: foo
    };
    var obj1 = {
    a: 2,
    obj2: obj2
    };
    obj1.obj2.foo();//42

    //implicit loss

    function foo() {
        console.log(this.a);
    }

    var obj = {
        a: 5,
        foo: foo
    }

    var bar = obj.foo;
    var a = "Hello!";
    bar();


// Implicit binding

function foo() {
    console.log( this.a );
    }

    var obj = {
    a: 2
    };

    foo.call( obj ); // 2

//Hard binding using call()

function foo() {
    console.log(this.a);
}

var obj = {
    a:5
}

var bar = function(){
    foo.call(obj);
}

bar(); //print 5

setTimeout(bar,1000);//print 2

bar.call(window);

//wrap function with hard binding
function foo(something) {
    console.log( this.a, something );
    return this.a + something;
}
var obj = {
a: 2
};
var bar = function() {
return foo.apply( obj, arguments );
};
var b = bar( 3 ); // 2 3
console.log( b ); // 5

//Alternate way to binding
function foo(something) {
    console.log( this.a, something );
    return this.a + something;
}

function bind(fn,obj){
    return function () {
        return fn.apply(obj,arguments);
    };
}

var obj = {
    a: 5
};

var bar = bind(foo,obj);

var ba = bar(10);
console.log(ba);

//New binding
function foo(a) {
    this.a = a;
}

var obj = {
    foo:foo
};

var obj2 = {};
obj.foo(5);
console.log(obj.a);

obj.foo.call(obj2,3);
console.log(obj2.a);

var bar = new foo(10);
console.log(obj.a);
console.log(bar.a);
 
//Check is hard binding_is_more_precedent_than_new_binding

function foo(something) {
    this.a = something;
    }
    var obj1 = {};
    var bar = foo.bind( obj1 );
    bar( 2 );
    console.log( obj1.a ); // 2
    var baz = new bar( 3 );
    console.log( obj1.a ); // 2
    console.log( baz.a ); // 3

    