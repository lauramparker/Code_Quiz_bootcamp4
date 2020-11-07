//VARIABLES

    //player information

    //general navigation assignments
    var startButton = document.getElementById("startButton");   //startbutton in html/css
    var answerList = document.getElementById("answerList");   //ordered list for answer choices
    var viewHighScores = document.getElementById("scoresButton");   //view highscores button
    var userAnswer = null;
    var userScore = 0;


    
    //timer variables
    var timerDiv = document.querySelector ("#timeLeft"); //div containing the timer
    var secondsRemaining = document.querySelector ("#timer");   //displayed time remaining
    var totalSeconds = 60; //global variable, changes in countdown
      
    
    //question & answer variables
    var choice1; //global variables to use in multiple answer choice functions (makeChoiceButtons & displayChoices)
    var choice2;
    var choice3;
    var choice4;


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

    if (totalSeconds ===0) {
        endGame();
    };
  
};


// Start displaying questions after Start Quiz is clicked

function displayQuestion() {
    
    var questionEl= document.getElementById("quizQuestion");
           questionEl.innerHTML=this.question;

};


// Display and append answer choice buttons

function makeChoiceButtons() { //use question objects to populate. var or let or const??
                
    choice1=document.createElement("button");
        document.getElementById("first").appendChild(choice1);
        choice1.innerHTML=firstQuestion.choiceone;  
                
    choice2=document.createElement("button");
        document.getElementById("second").appendChild(choice2);
        choice2.innerHTML=firstQuestion.choicetwo;
                
    choice3=document.createElement("button");
        document.getElementById("third").appendChild(choice3);
        choice3.innerHTML=firstQuestion.choicethree;
                
    choice4=document.createElement("button");
        document.getElementById("fourth").appendChild(choice4);
        choice4.innerHTML=firstQuestion.choicefour;

};


function displayChoices() {

    choice1.innerHTML=this.choiceone;  
            
    choice2.innerHTML=this.choicetwo;
            
    choice3.innerHTML=this.choicethree;
            
    choice4.innerHTML=this.choicefour;

    //add for i loop to assign the data attribute of correct??

};


//this function interprets the answer choice and sends to wrongAnswer or rightAnswer functions
function readAnswers() { 
        
    var correctAnswer=this.getAttribute('data-correct');
    if (correctAnswer.onclick){
        rightAnswer();
    };
    //if ()///////
};



// Alert wrong answer choice. Subtract time if wrong;

function wrongAnswer() {
    alert="Wrong!";
    totalSeconds=totalSeconds-10; //and subtract time from timer

};


// Alert right answer choice. Add to user score;

function rightAnswer() {
    alert="Correct!";
    userScore++;
    //and add a point to the score

};


// function endGame..calls 3) function storeScores and 4) displayEnd

function endGame () {
   
    var userScore = localStorage.getItem("scores");
    
    alert="Game Over";

    localStorage.setItem("scores", userScore);

    
    // reset??
    
};   



//3) function storeScore
     
//function storeScores () {

   // };


    
   

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
startButton.addEventListener("click", makeChoiceButtons); 
startButton.addEventListener("click", displayQuestion.call(firstQuestion));

//document.getElementById("answerList").addEventListener("click", displayChoices(secondQuestion));

//document.getElementById("startButton").onclick = displayQuestion.call(firstQuestion); 
//document.getElementById("startButton").onclick = displayChoices.call(firstQuestion);


document.querySelectorAll("li").click(displayChoices(secondQuestion)); //does this need the parent node??



  //  choice1.onclick = wrongAnswer;
    //choice2.onclick = wrongAnswer;
   // choice3.onclick = rightAnswer;
   // choice4.onclick = wrongAnswer;

    

makeChoiceButtons.call(secondQuestion);
displayQuestion.call(secondQuestion);


makeChoiceButtons.call(thirdQuestion);
displayQuestion.call(thirdQuestion);


makeChoiceButtons.call(fourthQuestion);
displayQuestion.call(fourthQuestion);


makeChoiceButtons.call(fifthQuestion);
displayQuestion.call(fifthQuestion);

