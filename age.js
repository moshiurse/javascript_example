var years = [1997, 2000, 2005, 1980, 1970];

var age = [];

for(var i=0; i<years.length; i++){
    age[i] = 2017 - years[i];
        console.log("Person " +(i+1) +" is "+age[i] + " years old")
}
console.log(age);

