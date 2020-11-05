//VARIABLES

    //player information

    //general navigation assignments
    var startButton = document.getElementById("startButton");   //startbutton in html/css
    var nextButton = document.querySelector ("#nextButton");   //nextbutton toggles? to next question
    var viewHighScores = document.querySelector ("#scoresButton");   //view highscores button
     //graps div with welcome and start button
    
    //timer variables
    var timerDiv = document.querySelector ("#timeLeft"); //div containing the timer
    var secondsRemaining = document.querySelector ("#timer");   //displayed time remaining
    var totalSeconds = 60; //global variable, changes in countdown
      
    
    //question & answer variables
    //var arrayQuestion: [] array of questions?;
    //object? with quiz questions. Lists with quiz answers as buttons? This might need to be a dynamic element.

    var answerChoice1 = document.querySelector ("#choice1"); //First answer Choice
    var answerChoice2 = document.querySelector ("#choice2"); //Second answer Choice
    var answerChoice3 = document.querySelector ("#choice3"); //Third answer Choice
    var answerChoice4 = document.querySelector ("#choice4"); //Fourth answer Choice
    



        //Elements
  
    
    //Wrapper for answer choices
    //var choiceEl = document.createElement("div"); // will need to center the div choiceEl, text-align center to center elements in the div
       // questionContainer.appendChild(choiceEl);
    
   // var choiceList = document.createElement("nl");
    
    //creating answer buttons 1-4
    //var choiceOne = document.createElement("button"); 
      //  choiceEl.appendChild(choiceOne); //appending answer choices to the choice div box
        //choiceOne.textContent = "Choice A";
    
      
    
    
//FUNCTIONS
    
// function startGame () //function start game ... includes 1) countDown function (var) and 2) startQuestions functions
       
function startGame () {    
    
    document.getElementById("startButton").style.display="none";   //makes start button disappear
    document.getElementById("welcome").style.display="none";   //makes welcome message disappear

    //1) var countDown, set Interval function() //Countdown function. calls setInterval function and then displays seconds remaining 

    var countDown= setInterval(function () {  
        totalSeconds--; //subtracts 1 from totalSeconds
        timer.textContent = totalSeconds;

        if(totalSeconds === 0) {
            clearInterval(countDown);
            endGame();
        }

    }, 1000);

      
    //document.getElementById("quizQuestion").style.display="none";
}


//2) function startQuestions () {  
    
function startQuestions() {  //loops over questions; dynamically changes text in the question & answer choices. Reassigns content of html #quizQuestion  
    let questionEl= document.getElementById("quizQuestion");
    questionEl.textContent="This is the first question";
}




// function endGame..calls 3) function storeScores and 4) displayEnd

function endGame () {
    alert="Oh no! Out of time, game over.";
};   


    //3) function storeScore
     
    function storeScores () {

    };



    //4) function displayEnd

    function displayEnd () {
        const notime= document.createElement("p"); //Revisit. this could be an end container like start container.
        notime.textContent="Oh no! Out of time, game over.";
        timeleft.appendChild(notime);
        timer.textContent= 60;

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
startButton.addEventListener("click", startQuestions);