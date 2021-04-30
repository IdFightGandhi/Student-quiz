var questions = [
    {
        Question:"Which bear is best?",
        Answers:["Black Bear","Brown Bear","Polar Bear","Battlestar Galactica"],
        Correct:"Battlestar Galactica"
    },
    {
        Question:"Why is Game of Thrones the best TV show ever?",
        Answers:["Writing","Characters","Nudity","It Isn't"],
        Correct:"It Isn't"
    },
    {
        Question:"Which of these is not a city?",
        Answers:["Seattle","Shanghai","Sidney","Weed"],
        Correct:["Sidney"]
    },
    {
        Question:"How many licks does it take to get to the center of a tootsie-roll pop?",
        Answers:["415","364","522","The World May Never Know"],
        Correct:["Battlestar Galactica"]
    },
    
]
//need timer and time bank
var timer;
var time = 60;
var current = 0;

//function to start quiz
function startQuiz() {
    var start = document.getElementById('start')
    var answersDiv = document.querySelector(".answers")
    answersDiv.getElementsByClassName.display='block'
    start.style.display="none";
    document.getElementById("timer").textContent=time;
    timer.setInterval(runTimer,1000)
    console.log("startQuiz")
    runQuiz()

}

//make function to get questions and match with answers

function runQuiz(){

    var i = current
    document.querySelector(".question").textContent=questions[i].Question
    document.querySelector("#Choice1").textContent=questions[i].Answers[0]
    document.querySelector("#Choice2").textContent=questions[i].Answers[1]
    document.querySelector("#Choice3").textContent=questions[i].Answers[2]
    document.querySelector("#Choice4").textContent=questions[i].Answers[3]

}

//timer function