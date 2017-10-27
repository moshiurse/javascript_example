var heightM = 175;
var heightS = 189;

var ageM = 25;
var ageS = 20;

var scoreM = heightM + 5 * ageM;
var scoreS = heightS + 5 * ageS;

if(scoreM >scoreS){
    console.log("M wins ! Point is "+scoreM);
}else if(scoreM < scoreS){
    console.log("S wins ! Point is "+scoreS);
}else if(scoreM === scoreS){
    console.log("Draw!!");
}

var heightP = 185;
var ageP = 22;
var scoreP = heightP + 5 * ageP;

if(scoreM >scoreS && scoreM > scoreP){
    console.log("M wins ! Point is "+scoreM);
}else if(scoreS < scoreM && scoreS > scoreP){
    console.log("S wins ! Point is "+scoreS);
}else if(scoreP > scoreS && scoreP > scoreM){
    console.log("P wins ! Point is "+scoreP);
}
else{
    console.log("Draw!!");
}