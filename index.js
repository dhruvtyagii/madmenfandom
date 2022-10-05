let readlineSync = require('readline-sync');
console.log('Mad Men tv show quiz?');
console.log();

var userName = readlineSync.question("May I know your Name?");
console.log("welcome  " + userName + '!!');

let score = 0;

function play(question, answer) {
  let userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Well Done");
    console.log();
    score += 1;
  }
  else {
    console.log('You lost a point :(');
    console.log();
    score = score - 1;
  }
}
console.log('');
console.log('Ready to Play? ');
console.log('');
console.log('Your current score is ' + score);
console.log('');
console.log('-1 for every wrong answer ');
console.log('');

let questions = [
  {
    question: "Who plays Don Draper? ",
    answer: "Jon Hamm"
  },
  {
    question: "What is Don Draper's first wife's name?  ",
    answer: "Anna Draper"
  },
  {
    question: "Who is Betty's daughter's father?  ",
    answer: "Pete Cambell"
  },
  {
    question: "Who is Roger Sterling's best friend?",
    answer: "Donald Draper"
  },
  {
    question: "What is the full form of mad men?  ",
    answer: "Madison Avenue Men"
  }
];

//LOOP aorund the above object

for (let i = 0; i < questions.length; i++) {
  let currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log('Game Over, your Score .');
console.log('You scored : ' + score);
