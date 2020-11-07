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
    
    document.getElementById("startButton").style.visibility="hidden";   //hides start button
    document.getElementById("welcome").style.visibility="hidden";
    document.getElementById("instructions").style.visibility="hidden";   //hides welcome message, but element still there

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

function displayQuestion(questionObject) {
    
    var questionEl= document.getElementById("quizQuestion");
           questionEl.textContent=questionObject.question;

};


// Display and append answer choice buttons

function makeChoiceButtons() { //use question objects to populate. var or let or const??
                
    choice1=document.createElement("button");
        document.getElementById("first").appendChild(choice1);
       // choice1.textContent=firstQuestion.choiceone;  
                
    choice2=document.createElement("button");
        document.getElementById("second").appendChild(choice2);
      //  choice2.textContent=firstQuestion.choicetwo;
                
    choice3=document.createElement("button");
        document.getElementById("third").appendChild(choice3);
      //  choice3.textContent=firstQuestion.choicethree;
                
    choice4=document.createElement("button");
        document.getElementById("fourth").appendChild(choice4);
       // choice4.textContent=firstQuestion.choicefour;

    displayQuestion(firstQuestion);
    displayChoices(firstQuestion);

};

//displays the Answer Choices

function displayChoices(questionObject) {  

    choice1.textContent=questionObject.choiceone;  
            
    choice2.textContent=questionObject.choicetwo;
            
    choice3.textContent=questionObject.choicethree;
            
    choice4.textContent=questionObject.choicefour;

    //need to assign the data-attribute" correct to the correct answer choice
 
        if (choiceone === correctchoice) {
            choiceone.setAttribute(data-correct, true)
        }
            else {
                if (choicetwo === correctchoice) {
                    choicetwo.setAttribute(data-correct, true)
            }
                else {
                    if (choicethree === correctchoice) {
                        choicethree.setAttribute(data-correct, true)
                }
                    else{
                        choicefour.setAttribute(data-correct, true)
                    };

        };

};


//this function interprets the answer choice and sends to wrongAnswer or rightAnswer functions

//function readAnswers(questionObject) { 
  
  //questionObject.getAttribute(data-correct).onclick=rightAnswer();

  //questionObject.getAttribute(data-correct).onclick=rightAnswer();

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

function endGame(userScore) {

    var done = document.getElementById("welcome").style.visibility="initial";
    var message = document.getElementById("instructions").style.visibility="initial";
    done.textContent= "All done!";
    message.textContent= "Your final score is" + userScore;

    storeScores (userScore);

    // NEED TO INPUT USER Initials with SUbmit form (prevent defualt) & userTurns... CALL function High scores

};





// stores top scores to local storage

function storeScores (userScore, userTurns) {
   
   var storeScore = localStorage.getItem("topScore"); //this should be an object key user:score
    
    if (userTurns === null) { 
        storeScore = userScore;

    } else {
        if (userScore > topScore) {
            storeScore === userScore;
        } else {
            storeScore === topScore
        };
    };
   
    localStorage.setItem("topScore", storeScore);
    
    
};   



//EVENTS
    

startButton.addEventListener("click", startGame); 

startButton.addEventListener("click", makeChoiceButtons); 

//startButton.addEventListener("click", function() {displayQuestion(firstQuestion)});


//while (totalSeconds > 0) {

  //  quizContainer.addEventListener("click", readAnswers);

    //if (totalSeconds ===0) { //Or LESS than zero (since we can subtract 10)
      //  endGame();
    //};

    

//}

    



//startButton.addEventListener("click", displayQuestion,thirdQuestion);

document.getElementById("quizContainer").addEventListener("click", displayChoices.call(secondQuestion));

//document.getElementById("startButton").onclick = displayQuestion.call(firstQuestion); 
//document.getElementById("startButton").onclick = displayChoices.call(firstQuestion);

//answerList.addEventListener("click", displayQuestion.call(secondQuestion));

//document.querySelectorAll("li").click(displayQuestion.call(secondQuestion)); //does this need the parent node?? query selector not working

    

//makeChoiceButtons.call(secondQuestion);
//displayQuestion.call(secondQuestion);


//makeChoiceButtons.call(thirdQuestion);
//displayQuestion.call(thirdQuestion);


//makeChoiceButtons.call(fourthQuestion);
//displayQuestion.call(fourthQuestion);


//makeChoiceButtons.call(fifthQuestion);
//displayQuestion.call(fifthQuestion);
