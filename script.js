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
        var firstQuestion= {
        question: "Commonly used data types DO NOT include:",
        choiceone: "strings",
        choicetwo: "booleans",
        choicethree: "alerts",
        choicefour: "numbers",
        correctchoice: "alerts",
    };

    var secondQuestion= {
        question:  "The condition in an if / else statement is enclosed within____.",
        choiceone: "quotes",
        choicetwo: "curly brackets",
        choicethree: "parenthesis",
        choicefour: "square brackets",
        correctchoice: "curly brackets",
    };

    var thirdQuestion= {
        question:  "Arrays in JavaScript can be used to store____",
        choiceone: "numbers and strings",
        choicetwo: "other arrays",
        choicethree: "booleans",
        choicefour: "all of the above",
        correctchoice: "all of the above",
    };

    var fourthQuestion= {
        question:  "String values must be enclosed within____ when being assigned to variables.",
        choiceone: "commas",
        choicetwo: "curly brackets",
        choicethree: "quotes",
        choicefour: "parenthesis",
        correctchoice: "parenthesis",
    };

    var fifthQuestion= {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choiceone: "JavaScript",
        choicetwo: "terminal/bash",
        choicethree: "for loops",
        choicefour: "console.log",
        correctchoice: "console.log",
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


// Start displaying questions after Start Quiz is clicked

function displayQuestion() {

    var questionEl= document.getElementById("quizQuestion");
           questionEl.innerHTML=this.question;

};


// Display and append answer choice buttons

function makeChoiceButtons() { //use question objects to populate
                
    var choice1=document.createElement("button");
        document.getElementById("first").appendChild(choice1);
        choice1.innerHTML=this.choiceone;  
                
    var choice2=document.createElement("button");
        document.getElementById("second").appendChild(choice2);
        choice2.innerHTML=this.choicetwo;
                
    var choice3=document.createElement("button");
        document.getElementById("third").appendChild(choice3);
        choice3.innerHTML=this.choicethree;
                
    var choice4=document.createElement("button");
        document.getElementById("fourth").appendChild(choice4);
        choice4.innerHTML=this.choicefour;

};


// Confirm user answer choice. Subtract time if wrong; Add point if right

function confirmAnswer() {

    var userAnswer = //button that was clicked;

        if (userAnswer == this.correctchoice) {
            alert="Correct!";
            //and add a point to the score
        } else {
            alert="Wrong!"
            //and subtract time from timer

        };

}


function runGame() {

    displayQuestion.call(this);
    makeChoiceButtons.call(this);
    confirmAnswer(this);

}




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

    
    //Quiz Questions are displayed with 4 answer choices    
    //User answers questions
    //Incorrect questions subtract time from clock
    //When last question is answered, game is over
    //When clock hits 0, game is over


startButton.addEventListener("click", startGame); 


makeChoiceButtons.call(firstQuestion);
displayQuestion.call(firstQuestion);
confirmAnswer(firstQuestion);

makeChoiceButtons.call(secondQuestion);
displayQuestion.call(secondQuestion);
confirmAnswer(secondQuestion);

makeChoiceButtons.call(thirdQuestion);
displayQuestion.call(thirdQuestion);
confirmAnswer(thirdQuestion);

makeChoiceButtons.call(fourthQuestion);
displayQuestion.call(fourthQuestion);
confirmAnswer(fourthQuestion);

makeChoiceButtons.call(fifthQuestion);
displayQuestion.call(fifthQuestion);

