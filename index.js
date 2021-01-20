// //assignment 1

var readlineSync = require('readline-sync');
console.log("Welcome This is Quiz App Let's see how well do you now about me ")
const chalk = require('chalk');
const lineBreak = chalk.red('----------------------')


var userName = readlineSync.question(chalk.blueBright("whats your Name ?"));
console.log("Hi " , chalk.blue(userName) );

console.log(lineBreak)


console.log("This quiz is not lengthy so Its just take your one minute ");

// var userAge = readlineSync.questionInt(" what's Your Age ? ");
var scoree = 0;
console.log(lineBreak)


// //////////////////////////////////////////
// // console.log("neocamp exercise 6")

// // if(userAge > 25){
// //   console.log("your age is greater ")

// // }
// // else{
// //   console.log("your Age is lesser ")
// // }

// // var userQuestion = readlineSync.question(" where are you From ?")

// // if (userQuestion === 'Bokaro'){
// //   console.log("yes You are right ")
// //   score = score + 1;
// // }
// // else{
// //   console.log("you are wrong ")
// // }

// // console.log(userName + " your Higher Score is =" + score )

// //////////////////////////////////////////////////////////////////////

var questionsBank = [
  {
  question: " which state i liked the most ? ",
  answer: "assam"
  },
  {
  question:"what is my fav. movie  | tashkent files | or | ak vs ak |  ?  ",
  answer:"tashkent files"
  },
  {
  question: " where do i live ",
  answer: "delhi"
  },
  {
  question:"what language i love the most ? ",
   answer:"sanskrit"
  },
 {
  question:"which country i love the most ? ",
   answer:"india"
  }
];



function takeQuestion (question , answer )
{

var userQuestionask = readlineSync.question(chalk.green(question))


if(userQuestionask === answer)
{
  console.log(" yes your are right ")
  scoree = scoree+1;
}
else{
  console.log(" oops your are wrong  ")
}

  console.log(chalk.magenta("Your score is "), chalk.yellow(scoree ))

  console.log(lineBreak)

}

for (var i=0 ; i<questionsBank.length; i++)
{

var currentQuestions = questionsBank[i]
takeQuestion(currentQuestions.question ,currentQuestions.answer)

}

if(scoree > 3)
{
  console.log(scoree,"Interesting , you know me well - ")
}
else
{
console.log("your high score " ,scoree)

}
console.log("Thanks for Playing ")
