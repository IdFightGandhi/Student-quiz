var main = document.getElementById('main');
var startButton = document.getElementById('startBtn');
var timer = document.getElementById('timer');
var score = document.getElementById('score');
var result = document.getElementById('result');
var enterStats = document.getElementById('hs-text').style.visibility = "hidden";
var highScores = document.getElementById('hScores');
var hsList = [];
var currentScore = 0;
var timeLeft = 30;

// this is the array of questions that will be used
var myQuestions = [
    {
        question1: "What is the most annoying TV series ever written?",
        answers: {

            a: "Gossip Girl",
            b: "How I Met Your Mother",
            c: "The Big Bang Theory",
            d: "A guy on Public Access screaming at you",
            e: "Game of Thrones"
        },
        correctAnswer: 'e',

        question2: "Who was the worst person in the popular Netflix documentary, 'Tiger King'",
        answers: {

            a: "Carole Baskin",
            b: "Joe Exotic",
            c: "Allen Glover",
            d: "That weird guy who owned the other Exotic Zoo but like, it was a sex cult...?",
            e: "Game of Thrones"
        },
        correctAnswer: 'e',

        question3: "What is the worst flavor of Gatorade?",
        answers: {

            a: "Cherry",
            b: "Cucumber-Lime",
            c: "Blueberry",
            d: "Strrawberry",
            e: "Game of Thrones"
        },
        correctAnswer: 'e',

        question4: "Which of these is a primary cause of Climate Change?",
        answers: {

            a: "Car Emissions",
            b: "Transport Ships",
            c: "Industrial Farms",
            d: "Fossil Fuels",
            e: "Game of Thrones"
        },
        correctAnswer: 'e',

    }
];

// This function will be the index for the question set
var currentQuestionIndex = 0;

function getQuestion() {
    content.textContent = "";
    result.textContent = "";
    var currentQuestion = myQuestions[currentQuestionIndex];
    score.textContent = currentScore;
    timer.textContent = timeLeft;

    for( var i = 0; i < currentQuestion.length; i++) {
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute('value', currentQuestion.choices[i];
        choiceButton.textContent = currentQuestion.choices[i];
        choiceButton.onclick = choiceSelect;
        content.appendChild(choiceButton);
    }

}

//This is the quiz timer
//function startTimer(duration, display){
//    var timer 
//    var countdown 




function generateQuiz(questions, quizContainer, resultsContainer, submitBtn){
    function showQuestions(questions, quizContainer){
        //questions here

        var output = [];
        var answers;

        for(var i=0; i < questions.length; i ++){

            //reset the answer list
            answers =[];



        }

    }

}

function showResults(questions, quizContainer){
    // this will contain the user's choces and display score at the end
}

showQuestions(questions, quizContainer);

//button to submit answers and get score
submitButton.onclick = function(){
    showResults(questions,quizContainer, resultsContainer);
}


