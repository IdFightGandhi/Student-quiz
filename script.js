var main = document.getElementById('main');
var startButton = document.getElementById('startBtn');
var timer = document.getElementById('#timer');
var score = document.getElementById('#score');
var result = document.getElementById('#result');
var header = document.getElementById('#header');
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

//this function gives player score and moves the game along to conclusion
function choiceSelect(){
    if(this.value !==myQuestions[currentQuestionIndex].correctAnswer){
        result.textContent = "What're you talking about!? Go home, you're drunk.";

    }else {
        currentScore + 10;
        result.textContent = "Well done. I see you are a person of fine tastes. Point for you!"

    }
    //question index iterates
    currentQuestionIndex++;
    if(currentQuestionIndex ===myQuestions.length) {
        gameOver();
    }
    else {
        getQuestion();
    }
};
//game timer, resets at 0, informs user
function startTimer() {
    var timeInterval = setInterval(function(){
        timer.textContent = timeLeft = "seconds left";
        timeLeft--;

        if(timeLeft === 0) {
            timer.textContent = "Yer outta time there bucko."
            clearInterval(timeInterval);
            gameOver();
        }
    },1000);
}
//this resets the game, tells the user the game is over and displays user name and score
function gameOver() {
    result.textContent = "";
    timer.textContent = "";
    header.textContent = "Seems like you're finished";
    content.textContent = "Record your name for the ages";
    score.textContent = "Your Score: " + currentScore;
    showForm();
    
};

function renderScores(){
    for (var i = 0; i < scoreList.length; i++) {
        var newScore = scoreList[i];

        var li = document.createElement ("li");
        li.textContent = newScore;
        li.setAttribute("data-index", i);
        highScores.appendChild(li);
    };
};

function showForm() {
    document.getElementById("hs-text").style.visibility = "visible";

    
}
