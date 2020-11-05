//VARIABLES

    //player information

    //general navigation assignments
    var startButton = document.querySelector ("#startButton");   //startbutton in html/css
    var nextButton = document.querySelector ("#nextButton");   //nextbutton toggles? to next question
    var viewHighScores = document.querySelector ("#scoresButton");   //view highscores button
    
    //timer variables
    var secondsRemaining = document.querySelector ("#timeLeft");   //displayed time remaining
    var totalSeconds = 60;
      
    
    //question & answer variables
    var arrayQuestion: [] array of questions?;
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
    
    // function startGame () { //function start game .. calls startTimer and startQuestions
    
   
  //  function startTimer () { //start timer. calls setInterval function countdown here - how long is quiz?
    
    
    //function countDown() {  //Countdown function. timer requires nested function. 
        function countDown = setInterval (function() { 
            if (totalSeconds <=0) {
                clearInterval(totalSeconds=0) 
            }
                    totalSecondsDisplay.innerHTML = totalSeconds
            totalSeconds -=1
        }, 1000)//time left?

        document.getElementById("timeLeft") //string? convert to number?
    
        
    
    function startQuestions () {  //loops over questions; dynamically changes text in the question & answer choices. Reassigns content of html #quizQuestion
        
        document.quizQuestion.textContent="Can you answer the first question?";
    
    

    
    
    //EVENTS
    
    //User enters name or player id
    //User stores score on local storage
    //User's highest score is reflected in the highest scores table

    
    //User clicks start button
    startButton.addEventListener("click", countDown); //starts game with countdown clock
        //start Container disappears after Start button clicked
        //question Container appears after Start button clicked


    //Quiz Questions are displayed with 4 answer choices    
    //User answers questions
    //Incorrect questions subtract time from clock
    //When last question is answered, game is over
    //When clock hits 0, game is over