var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

]; 

// Declaring variables 
var QuizScore = 0;
var indexForQuestions = 0;

// Start working code 
// using queryselector to assign elements to variables 
var currentTimeDisplayed = document.querySelector("#currentTimeDisplayed");
var quizStartButton = document.querySelector("#quizStartButton");
var questionsQuizDivElement = document.querySelector("#questionsQuiz");
var containerOfQuizElements = document.querySelector("#containerOfQuizElements");

// Seconds left is 15 seconds per question:
var totalSecondsToCompleteQuiz = 75;
// Holds interval time
var timerDisplay = 0;
// Holds penalty time
var timePenalty = 15;
// Creates new element
var quizChoicesOl = document.createElement("quizChoicesOl");


// When the start button is clicked, the timer will start and the first question will be shown 
quizStartButton.addEventListener("click", function () {

    // checking whether the display value is set to zero 
    if ( timerDisplay === 0) {
        timerDisplay = setInterval(function () {
            totalSecondsToCompleteQuiz--;
            currentTimeDiplayed.textContent = "Time: " + totalSecondsToCompleteQuiz;

            if (totalSecondsToCompleteQuiz <= 0) {
                clearInterval(timerDisplay);
                allDone();
                currentTimeDisplayed.textContent = "Time's up!";
            }
        }, 1000);
    }
    diplayingQuizQuestionsToScreen();
});

// This function will display the question title and choices to the page: 
function displayingQuizQuestionsToScreen(indexForQuestions) {

    // This will clear any existing data on the screen
    questionsQuizDivElement.innerHTML = "";
    quizChoicesOl.innerHTML = "";

    // Using a for loop to iterate through all the info in array
    for (i = 0; i < questions.length; i++) {
        // This will append the title of the question 
        var userQuestionTitle = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsQuizDivElement.textContent = userQuestionTitle;
    }

}
// New for each for question choices
userChoices.forEach(function (newQuizQuestion) {
   
    var quizChoiceListItem = document.createElement("li");
    quizChoiceListItem.textContent = newQuizQuestion;
    questionsQuizDivElement.appendChild(orderedListQuizChoices);
    orderedListQuizChoices.appendChild(quizChoicelistItem);
    quizChoiceListItem.addEventListener("click", compareChoicesWithAnswers);
})

//Function to compare the choices with the correct answer
function compareChoicesWithAnswers(event) {
    var usersAnswerToQuizQuestion = event.target;

    if (usersAnswerToQuizQuestion.matches("li")) {

        var createDivElementToCommunicateWithUser = document.createElement("div");
        createDivElementToCommunicateWithUser.setAttribute("id", "createDivElementToCommunicateWithUser");
        // Checking whether the user's answer against the correct answer 
        if (usersAnswerToQuizQuestion.textContent == questions[indexForQuestions].answer) {
            score++;
            createDivElementToCommunicateWithUser.textContent = "Correct!";
           
        } else {
            // If the answer is incorrect the timer will deduct 15s and print the word "Wrong"
            totalSecondsToCompleteQuiz = totalSecondsToCompleteQuiz - timePenalty;
            createDivElementToCommunicateWithUser.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
        }

    }

    // This will have a new question load until the length of questions has been reached
    indexForQuestions = indexForQuestions + 1;

    if (indexForQuestions <= questions.length) {
        displayingQuizQuestionsToScreen(indexForQuestions);
        
    } else {
        endOfTheQuiz();
        // createDivElementToCommunicateWithUser.textContent = "All done !" + " " + "Your final score is " + score + "/" + questions.length + " Correct!";
    }
    questionsQuizDivElement.appendChild(createDivElementToCommunicateWithUser);

}

// This function will append the final page 
function endOfTheQuiz() {
    questionsQuizDivElement.innerHTML = "";
    quizChoicesUl.innerHTML = "";

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

        questionsQuizDivElement.appendChild(creatingP2Element);
    }

    // Creating a label element which will have an input field of text
    var creatingLabelElement = document.createElement("label");
    creatingLabelElement.setAttribute("id", "creatingLabelElement");
    creatingLabelElement.textContent = "Enter initials:";

    questionsQuizDivElement.appendChild(creatingLabelElement);


    var creatingInputElement = document.createElement("input");
    creatingInputElement.setAttribute("type", "text");
    creatingInputElement.setAttribute("id", "initials");
    creatingInputElement.textContent = "";

    questionsQuizDivElement.appendChild(creatingInputElement);

    // creating a submission button 
    var creatingSubmitButton = document.createElement("button");
    creatingSubmitButton.setAttribute("type", "submit");
    creatingSubmitButton.setAttribute("id", "Submit");
    creatingSubmitButton.textContent = "Submit";

    questionsQuizDivElement.appendChild(createSubmit);

    // Event listener to capture initials and local storage for initials and score
    creatingSubmitButton.addEventListener("click", function () {
        var UserInitials = creatingInputElement.value;

        if (UserInitials !== true) {

            console.log("Please enter your initials");

        } else {
            var UserFinalScore = {
                initials: UserInitials,
                score: timeRemaining
            }
            console.log(UserFinalScore);
            var allUserScores = localStorage.getItem("allUserScores");
            if (allUserScores === null) {
                allUserScores = [];
            } else {
                allUserScores = JSON.parse(allUserScores);
            }
            allUserScores.push(UserFinalScore);
            var newUserScore = JSON.stringify(allUserScores);
            localStorage.setItem("allUserScores",newUSerScore);
            // Takes the user to the Highscores page 
            window.location.assign("./HighScores.html");
        }
    });

}

