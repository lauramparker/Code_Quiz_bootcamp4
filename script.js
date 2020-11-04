//Variables

    //general navigation assignments
    var startButton = document.querySelector ("#startButton");   //startbutton in html/css
    var nextButton = document.querySelector ("#nextButton");   //nextbutton toggles? to next question
    var viewHighScores = document.querySelector ("#scoresButton");   //view highscores button
    
        //timer variables
    var secondsRemaining = document.querySelector ("#timeLeft");   //displayed time remaining
    var totalSeconds = 60;
    
    
    
        //question & answer variables
    //var quizQuestion: [] array of questions?
    //object? with quiz questions. Lists with quiz answers as buttons? This might need to be a dynamic element.
    // 
    
    
    
    //Elements
    var body = document.querySelector("body"); //just to shorten appending to body
    
    var headlines = document.createElement("h1"); //header elements
        headlines.textContent = "Take the Quiz!"; //text content, need to REVISIT
        body.appendChild(headlines);
    
    var questionContainer = document.createElement("container");
        body.appendChild(questionContainer);
    
    var question = document.createElement("h3"); //question lines in subheading font
        question.textContent = "Can you answer this???";
        questionContainer.appendChild(question);
    
    
    
    //Wrapper for answer choices
    var choiceEl = document.createElement("div"); // will need to center the div choiceEl, text-align center to center elements in the div
        questionContainer.appendChild(choiceEl);
    
    //var choiceList = document.createElement("nl");
    
    //creating answer buttons 1-4
    var choiceOne = document.createElement("button"); 
        choiceEl.appendChild(choiceOne); //appending answer choices to the choice div box
        choiceOne.textContent = "Choice A";
    
    var choiceTwo = document.createElement("button");
        choiceEl.appendChild(choiceTwo);
        choiceTwo.textContent = "Choice B";
    
    var choiceThree = document.createElement("button");
        choiceEl.appendChild(choiceThree);
        choiceThree.textContent = "Choice C";
    
    var choiceFour = document.createElement("button");
        choiceEl.appendChild(choiceFour);
        choiceFour.textContent = "Choice D";
    
    
    
    //Functions
    
    function startGame () { //function start game .. calls startTimer and startQuestions
    
    }
    
    
    function startTimer () { //start timer. calls setInterval function countdown here - how long is quiz?
    
    }
    
    
    function countDown() {  //Countdown function. timer requires nested function. 
        function setInterval (function() { 
            if (totalSeconds <=0) {
                clearInterval(totalSeconds=0) 
            }
                    totalSecondsDisplay.innerHTML = totalSeconds
            totalSeconds -=1
        }, 1000) //time left?
    
    }
    
    
    
    
    //function startQuestions () { loops over questions
    
    }
    
    
    
    //Events
    
    startButton.addEventListener("click", countDown); //starts game with countdown clock