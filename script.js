var timeEl = document.querySelector(".timer");
var highscoreButton = document.querySelector("#highscores");
var startButton = document.querySelector("#start-button");
var header = document.querySelector("h1");
var mainEl = document.querySelector("main");


var question1 = {
    question: "Who likes short shorts?",
    choices: ["We do", "You do", "I do", "They do"],
    answer: "We do"
}
        
var question2 = {
    question: "What is the best berry",
    choices: ["Straw", "Blue", "Rasp", "Black"],
    answer: "Straw"

}
var question3 = {
    question: "Do you have $20 dollars?",
    choices: ["Yes", "No", "Maybe", "I can give you about $3.50"],
    answer: "I can give you about $3.50"
}
var question4 = {
    question: "Is this quiz over?",
    choices: ["Probably", "Why are you asking me?", "Yes", "No"],
    answer: "Probably"

}
var questions = [
    question1, question2, question3, question4
]
var secondsLeft = 60;
var correct = 0; 
var incorrect = 0;

startButton.addEventListener("click", function() {
    var header = document.querySelector("h1");
    header.remove();
    startButton.remove();
    timeLeft();
    askQuestions();
    showChoices();
    
});

//need timer and time bank
var timer = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left ";
    console.log
    if(secondsLeft === 0) {
        clearInterval(timer);
        // endQuiz();
    }
    
}, 1000);
return;

//function to start quiz
var questionIndex = 0;
var questionBox = questions[questionIndex];
console.log(questions[questionIndex].question);
function askQuestions() {
    
    // for(var i=0; i < questionBox.question.length; i++)
    var questionElement = document.createElement("h2");
    questionElement.textContent = (questions[questionIndex].question);
    mainEl.appendChild(questionElement);
    console.log(questionElement);
}

function showChoices () {
    var choicesBox = questions[questionIndex]
    for(var j=0; j< choicesBox.choices.length; j++) {
      var choicesElement = document.createElement("button");
      choicesElement.setAttribute("class", "choices");
      choicesElement.textContent = choicesBox.choices[j];
      mainEl.appendChild(choicesElement);
   
   } 
}


// function startQuiz() {
//     var start = document.getElementById('start')
//     var answersDiv = document.querySelector(".answers")
//     answersDiv.getElementsByClassName.display='block'
//     start.style.display="none";
//     document.getElementById("timer").textContent=time;
//     timer.setInterval(runTimer,1000)
//     console.log("startQuiz")
//     runQuiz()

// }

//make function to get questions and match with answers



//timer function

