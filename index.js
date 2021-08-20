var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is Your Name? ");
console.log("Hi " + userName, ", Lets Check How Well Do You Know About Me!")
var score = 0;

var questions = [
  {
    question: "What is my Daily Outfit? ",
    answer: "Kurta Pajama",
  },{
    question: "Which bike do I ride? ",
    answer: "Activa",
  },{
    question:"Which brand phone do I use? ",
    answer: "Realme",
  },{
    question: "Name of a famous Monument I live nearby? ",
    answer: "Charminar",
  },{
    question: "What do I love reading about? ",
    answer: "Finance",
  }
];

for (var i = 0; i < questions.length; i++) {
	console.log(" ")
	var qs = readlineSync.question(questions[i].question);
	if (questions[i].answer.toUpperCase() === qs.toUpperCase()) {
		console.log("You are Right");
		console.log("Your Score : ", (score = score + 1));
	} else {
		console.log("You are wrong");
	}
}
console.log("---------------------------")
console.log("Your Final Score is : " + score)

