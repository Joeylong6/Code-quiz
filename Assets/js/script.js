var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["1.strings", "2.booleans", "3.alerts", "4.numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["1.quotes", "2.curly brackets", "3.parentheses", "4.square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["1.numbers and strings", "2.other arrays", "3.booleans", "4.all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["1.commas", "2.curly brackets", "3.quotes", "4.parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["1.Javascript", "2.terminal / bash", "3.for loops", "4.console log"],
        answer: "console log"
    },

]; 


// Declaring variables 
var UserFinalScore = 0;
var totalSecondsToCompleteQuiz = 75;
var timePenalty = 15;
var myCounter = 0;
var myCounterChoices=0;
var quizH1Question = questions[myCounter].title;
var userQuizChoices =  questions[myCounter].choices;

       

// using queryselector to assign elements to variables 
var highScoresElement=document.getElementById("highScores");
var timerDisplay = document.getElementById("timerDisplay");
var quizStartButton = document.getElementById("quizStartButton");
var questionsQuizDivElement = document.getElementById("questionsQuizDivElement");
var containerOfQuizElements = document.getElementById("containerOfQuizElements");




quizStartButton.addEventListener("click", quizQuestion);
   
  
 // function to render the quiz question to screen 
function quizQuestion() {

// emptying the text in the div element
    questionsQuizDivElement.innerHTML = "";


// creating an H1 element for my Title  
var h1ElementForQuizTitle = document.createElement("h1");
h1ElementForQuizTitle.setAttribute("id", "h1ElementForQuiztitle");
h1ElementForQuizTitle.textContent = quizH1Question;
containerOfQuizElements.appendChild(h1ElementForQuizTitle);
       
// creating HTML button element for my choices
for(var i = 0; i <userQuizChoices.length; i++){
var choicesButton = document.createElement("button");
choicesButton.classList.add("options")
choicesButton.setAttribute( "id", "choicesButton");
choicesButton.setAttribute("type", "button");
console.log(userQuizChoices);
choicesButton.textContent = userQuizChoices[i];
containerOfQuizElements.append(choicesButton)
//starting the timer for the quiz

}

document.querySelectorAll('.options').forEach(item => {
    item.addEventListener('click', event => {
     
    var userClicked = item.innerHTML;

    compareChoicesWithAnswers(userClicked)

    })
  })

//starting the timer for the quiz
var interval = setInterval(function(){
    document.getElementById('timerDisplay').innerHTML="time: "+ totalSecondsToCompleteQuiz;
    totalSecondsToCompleteQuiz--;
    if (totalSecondsToCompleteQuiz === 0){
      clearInterval(interval);
  
      alert("You're out of time!");

      endOfTheQuiz()
    }
  }, 1000);

  myCounter++
}
    







function getNextQuizQuestion(){

 if(myCounter<=questions.length) {
    
    quizQuestion ()
    compareChoicesWithAnswers()
}
else {

    endOfTheQuiz()
};
};



function compareChoicesWithAnswers(userClicked) {

  
    
    // var usersAnswerToQuizQuestion = userClicked;

    if (userClicked == questions[myCounter].answer) {

        quizQuestion()

        var createHrElement= document.createElement("hr");
        createHrElement.setAtrribute("width", "300px")
        containerOfQuizElements.append(createHrElement)
        var createDivElementToCommunicateWithUser = document.createElement("div");
        createDivElementToCommunicateWithUser.setAttribute("id", "correctOrWrong");
        createDivElementToCommunicateWithUser.textContent = "Correct !";
        containerOfQuizElements.append(createDivElementToCommunicateWithUser);
       
        
    }
    else {
        
        quizQuestion()

        var createHrElement= document.createElement("hr");
        createHrElement.setAtrribute("width", "300px")
        containerOfQuizElements.append(createHrElement)
        var createDivElementToCommunicateWithUser = document.createElement("div");
        createDivElementToCommunicateWithUser.setAttribute("id", "correctOrWrong");
        createDivElementToCommunicateWithUser.textContent = "Wrong !";
       containerOfQuizElements.append(createDivElementToCommunicateWithUser);

        totalSecondsToCompleteQuiz = totalSecondsToCompleteQuiz - penalty;

  
        
    };
 
    };


    function endOfTheQuiz() {
        containerOfQuizElements.innerHTML = "";
        
      
    
        var creatingH1Element = document.createElement("h1");
        creatingH1Element.setAttribute("id", "creatingH1Element");
        creatingH1Element.textContent = "All done!"
    
        questionsQuizDivElement.appendChild(creatingH1Element);
    
        // Paragraph
        var creatingPElement = document.createElement("p");
        creatingPElement.setAttribute("id", "creatingPElement");
    
        questionsQuizDivElement.appendChild(creatingPElement);
    
        // Calculates time remaining and replaces it with score
        if (totalSecondsToCompleteQuiz >= 0) {
            var timeRemaining = totalSecondsToCompleteQuiz;
            creatingP2Element = document.createElement("p");
            clearInterval(timerDisplay);
            creatingPElement.textContent = "Your final score is " + timeRemaining;
    
            containerOfQuizElements.appendChild(creatingP2Element);
        }
    
        // Creating a label element which will have an input field of text
        
        var creatingFormElement=document.createElement("form");
        creatingFormElement=setAttribute("method","post");
        creatingFormElement("action,","submit.php");
        
        
        // var creatingLabelElement = document.createElement("label");
        // creatingLabelElement.setAttribute("id", "creatingLabelElement");
        // creatingLabelElement.textContent.toUpperCase = "Enter initials:";
    
        // containerOfQuizElements.appendChild(creatingLabelElement);
    
    
        var creatingInputElement = document.createElement("input");
        creatingInputElement.setAttribute("type", "text");
        creatingInputElement.setAttribute("id", "initials");
        
    
        containerOfQuizElements.appendChild(creatingInputElement);
    
        // creating a submission button 
        var creatingSubmitButton = document.createElement("button");
        creatingSubmitButton.setAttribute("type", "submit");
        creatingSubmitButton.setAttribute("value","submit");
        creatingSubmitButton.setAttribute("id", "Submit");
        creatingSubmitButton.textContent = "Submit";
    
        containerOfQuizElements.appendChild(creatingSubmitButton);
    
        // Event listener to capture initials and local storage for initials and score
        creatingSubmitButton.addEventListener("click", printHighscores)
    }
        
        
        // function to render the final score to the browser
        
        function printHighscores () {

        questionsQuizDivElement.innerHTML="";
        containerOfQuizElements.innerHTML="";
        highScoresElement.innerHTML="";
        timerDisplay.innerHTML="";

        var highScoresH1Title= document.createElement("h1");
        highScoresH1Title.setAttribute("id","highScoresTitle");
        highScoresH1Title.innerHTML="Highscores";
        containerOfQuizElements.appendChild(highScoresH1Title);

        var paraToRenderUserFinalScore=document.createElement("p");
        paraToRenderUserFinalScore.setAttribute("id", "paraToRenderUserFinalScore");
        questionsQuizDivElement.appendChild(paraToRenderUserFinalScore);
        paraToRenderUserFinalScore.textContent= UserFinalScore;


        var creatingGoBackButton = document.createElement("button");
        creatingGoBackButton.setAttribute("type","button");
        creatingGoBackButton.setAttribute("id","goBackbutton");
        creatingGoBackButton.textContent = "Go Back";
        containerOfQuizElements.append(creatingGoBackButton);

        creatingGoBackButton.addEventListener("click", function () {
            window.location.replace("./index.html");
        });
        
        var creatingClearHighScoresButton = document.createElement("button");
        creatingClearHighScoresButton.setAttribute("type", "button");
        creatingClearHighScoresButton.setAttribute("id", "clearHighScoresButton");
        creatingClearHighScoresButton.textContent = "Clear Highscores";
        containerOfQuizElements.append(creatingClearHighScoresButton);
        creatingGoBackButton.addEventListener("click", function () {
            localStorage.clear();
        });


// will 
        var userInitials = event.target.value;
            
        var userFinalScore = {
                initials: userInitials,
                score: timeRemaining,
            }
            localStorage.setItem("userFinalScore",JSON.stringify(userFinalScore)); 
            localStorage.getItem( "userFinalScore",JSON.parse(userFinalScore));
            document.write
            
            
            
            
        };



            
        
