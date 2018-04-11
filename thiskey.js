console.log(this);

calculate(1997);

function calculate(year){
  console.log(2018-year);
  console.log(this);
}

var john = {
  name: "john",
  year: 1995,
  sex: "male",
  calculate : function(){
    console.log(this);

    // function innerfunction(){
    //   console.log(this);
    // }
    // innerfunction();
  }
}

john.calculate();


var mike = {
  name: "Mike",
  year: 1985
};

mike.calculate = john.calculate;
mike.calculate();
