//VARIABLES

    //player information

    //general navigation assignments
    var startButton = document.getElementById("startButton");   //startbutton in html/css
    var nextButton = document.querySelector ("#nextButton");   //nextbutton toggles? to next question
    var viewHighScores = document.querySelector ("#scoresButton");   //view highscores button

    
    //timer variables
    var timerDiv = document.querySelector ("#timeLeft"); //div containing the timer
    var secondsRemaining = document.querySelector ("#timer");   //displayed time remaining
    var totalSeconds = 60; //global variable, changes in countdown
      
    
    //question & answer variables
    var arrayQuestion = [
        "Commonly used data types DO NOT include:",
        "The condition in an if / else statement is enclosed within____.",
        "Arrays in JavaScript can be used to store____",
        "String values must be encolsed within____ when being assigned to variables.",
        "A very useful tool used during development and debugging for printing content to the debugger is:",
    ];
    
    //var question1Choices = ["strings","booleans","alerts","numbers"];

   // var question2Choices = ["quotes","curly brackets","parenthesis","square brackets"];

    //var question3Choices = ["numbers and strings","other arrays","booleans","all of the above"];

    //var question4Choices = ["commas","curly brackets","quotes","parenthesis"];

   // var question5Choices = ["JavaScript","terminal/bash","for loops","console.log"];


    var firstquestion= {
        question: "Commonly used data types DO NOT include:",
        choiceone: "strings",
        choicetwo: "booleans",
        choicethree: "alerts",
        choicefour: "numbers",
        correctchoice: "alerts",
    };
    
//FUNCTIONS
    
// function startGame () //function start game includes 1) countDown var and setInterval function 
       
function startGame () {    
    
    document.getElementById("startButton").style.display="none";   //makes start button disappear
    document.getElementById("welcome").style.display="none";
    document.getElementById("instructions").style.display="none";   //makes welcome message disappear

    //var countDown, set Interval function() //Countdown function. calls setInterval function and then displays seconds remaining 

    var countDown= setInterval(function () {  
        totalSeconds--; //subtracts 1 from totalSeconds
        timer.textContent = totalSeconds;

        if(totalSeconds === 0) {
            clearInterval(countDown);
            endGame();
        }

    }, 1000);
  
};


 
// Append choice buttons to document


function makeChoiceButtons(choicesArray) {
                
    var choice1=document.createElement("button");
       // document.getElementById("first").appendChild(choice1);
        choice1.innerHTML=choicesArray[0];  //make questions object sets and combine all choice buttons, questions, answer choices into one function for setting the question?
                
                var choice2=document.createElement("button");
                    //document.getElementById("second").appendChild(choice2);
                    choice2.innerHTML=choicesArray[1];
                
                var choice3=document.createElement("button");
                    //document.getElementById("third").appendChild(choice3);
                    choice3.innerHTML=choicesArray[2];
                
                var choice4=document.createElement("button");
                   // document.getElementById("fourth").appendChild(choice4);
                    choice4.innerHTML=choicesArray[3];

            };


// Start displaying questions after Start Quiz is clicked

function displayQuestion() {

    var questionEl= document.getElementById("quizQuestion");
      for (let i=0; i<arrayQuestion.length; i++) {
           questionEl.textContent=arrayQuestion(0);
        };

};




//function startQuestions () {  
    
  




// function endGame..calls 3) function storeScores and 4) displayEnd

function endGame () {
    alert="Oh no! Out of time, game over.";
};   


    //3) function storeScore
     
    function storeScores () {

    };


    
   

//EVENTS
    
    //User enters name or player id
    //User stores score on local storage
    //User's highest score is reflected in the highest scores table

    
    //User clicks start button
    //startButton.addEventListener("click", countDown); //starts game with countdown clock
        //start Container disappears after Start button clicked
        //question Container appears after Start button clicked


    //Quiz Questions are displayed with 4 answer choices    
    //User answers questions
    //Incorrect questions subtract time from clock
    //When last question is answered, game is over
    //When clock hits 0, game is over


startButton.addEventListener("click", startGame); 
startButton.addEventListener("click", makeChoiceButtons);
startButton.addEventListener("click", displayQuestion);



function setQuestion() {

    var questionEl= document.getElementById("quizQuestion");
        questionEl.innerHTML=[firstquestion,question];


};

setQuestion();

