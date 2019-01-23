(function() {
    function question(ques, answers, correct) {
    this.ques = ques;
    this.answers = answers;
    this.correct = correct;

}

question.prototype.displayQuestion =
    function () {
    console.log(this.ques);

    for (var i= 0; i< this.answers.length; i++){
        console.log(i + " " + this.answers[i]);
    }

}

question.prototype.checkAns  = function (ans, callback) {
        var sc;
    if (ans === this.correct){
        console.log('Right Ans! Congrats');
        sc = callback(true);
    }else {
        console.log('wrong Ans! Please try again');
        sc = callback(false);
    }
    this.displayScore(sc);
}

question.prototype.displayScore = function (score) {
    console.log('Your current score is ' + score);
    console.log('----------------------------------');
}

var q1 = new question('Whats your name? ', ['moshiur', 'shuvo'], 0);
var q2 = new question('Whats your Age? ', [22,25], 0);
var q3 = new question('Whats your Department? ', ['CSE', 'SWE'], 1);

var questions = [q1, q2, q3];

function score() {
    var sc = 0;

    return function (correct) {
        if (correct){
            sc++;
        }
        return sc;
    }
}

var keepscore = score();

function nextQuestion() {

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var ans = prompt('Please give the correct answer!');

    if (ans !== 'exit'){
        questions[n].checkAns(parseInt(ans), keepscore);

        nextQuestion();

    }


}
    nextQuestion();

})();