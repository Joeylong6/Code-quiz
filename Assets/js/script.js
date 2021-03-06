var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["1.strings", "2.booleans", "3.alerts", "4.numbers"],
    answer: "3.alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: [
      "1.quotes",
      "2.curly brackets",
      "3.parentheses",
      "4.square brackets",
    ],
    answer: "3.parentheses",
  },
  {
    title: "Arrays in Javascript can be used to store ____.",
    choices: [
      "1.numbers and strings",
      "2.other arrays",
      "3.booleans",
      "4.all of the above",
    ],
    answer: "4.all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["1.commas", "2.curly brackets", "3.quotes", "4.parenthesis"],
    answer: "3.quotes",
  },
  {
    title:
      "A very useful tool for used during development and debugging for printing content to the debugger is:",
    choices: [
      "1.Javascript",
      "2.terminal / bash",
      "3.for loops",
      "4.console log",
    ],
    answer: "4.console log",
  },
];

// Declaring the variables
var UserFinalScore = 0;
var totalSecondsToCompleteQuiz = 30;
var timePenalty = 15;
var myCounter = 0;
var myCounterChoices = 0;

// using getElementById to assign html elements to variables
var highScoresElement = document.getElementById("highScores");
var timerDisplay = document.getElementById("timerDisplay");
var quizStartButton = document.getElementById("quizStartButton");
var questionsQuizDivElement = document.getElementById(
  "questionsQuizDivElement"
);
var containerOfQuizElements = document.getElementById(
  "containerOfQuizElements"
);

quizStartButton.addEventListener("click", startTimer);

// function to start the timer and invoke funciton to render first question to screen
function startTimer() {
  var interval = setInterval(function () {
    document.getElementById(
      "timerDisplay"
    ).innerHTML = totalSecondsToCompleteQuiz;
    totalSecondsToCompleteQuiz--;
    if (totalSecondsToCompleteQuiz === 0) {
      clearInterval(interval);
      alert("You're out of time!");

      endOfTheQuiz();
    }
  }, 1000);

  displayQuestion();
}

// if (myCounter >= questions.length) {
//   // All done will append last page with user stats
//   endOfTheQuiz();
// } else {
//   displayQuestion(myCounter);
// }

function displayQuestion() {
  console.log(myCounter);
  console.log();
  var quizH1Question = questions[myCounter].title;
  var userQuizChoices = questions[myCounter].choices;
  // emptying the text in the div element
  containerOfQuizElements.innerHTML = "";

  // creating an H1 element for my Title
  var h1ElementForQuizTitle = document.createElement("h1");
  h1ElementForQuizTitle.setAttribute("id", "h1ElementForQuizTitle");
  h1ElementForQuizTitle.textContent = quizH1Question;

  containerOfQuizElements.appendChild(h1ElementForQuizTitle);

  // creating HTML button element for my choices
  for (var i = 0; i < userQuizChoices.length; i++) {
    var choicesButton = document.createElement("button");
    choicesButton.setAttribute("id", "choicesButton");
    choicesButton.setAttribute("type", "button");
    choicesButton.textContent = userQuizChoices[i];

    containerOfQuizElements.appendChild(choicesButton);
  }

  // //adding a click event to the choices button
  document
    .getElementById("choicesButton")
    .addEventListener("click", function (e) {
      alert("clicked on btn");
      if (e.target && e.target.id == "choicesButton") {
        containerOfQuizElements.innerHTML = "";
        var userClicked = e.target.innerText;
        console.log(userClicked);
        compareChoicesWithAnswers(userClicked);
        myCounter++;
        //  checking how many questions are left in the quiz
        if (myCounter <= questions.length) {
          displayQuestion();
        } else {
          endOfTheQuiz();
        }
      }
    });
}

function compareChoicesWithAnswers(userClicked) {
  // var usersAnswerToQuizQuestion = userClicked;
  if (userClicked == questions[myCounter].answer) {
    displayQuestion();

    // creating a Horizontal line and  div element to hold the right or wrong answer from the program
    var createHrElement = document.createElement("hr");
    createHrElement.setAttribute("width", "300px");
    containerOfQuizElements.appendChild(createHrElement);
    var createDivElementToCommunicateWithUser = document.createElement("div");
    createDivElementToCommunicateWithUser.setAttribute("id", "correctOrWrong");
    createDivElementToCommunicateWithUser.textContent = "Correct !";

    containerOfQuizElements.appendChild(createDivElementToCommunicateWithUser);
  } else {
    displayQuestion();

    var createHrElement = document.createElement("hr");
    createHrElement.setAttribute("width", "300px");
    containerOfQuizElements.appendChild(createHrElement);
    var createDivElementToCommunicateWithUser = document.createElement("div");
    createDivElementToCommunicateWithUser.setAttribute("id", "correctOrWrong");
    createDivElementToCommunicateWithUser.textContent = "Wrong !";

    containerOfQuizElements.appendChild(createDivElementToCommunicateWithUser);

    // taking 15 seconds off the clock as penalty for answering wrongly
    totalSecondsToCompleteQuiz = totalSecondsToCompleteQuiz - timePenalty;
  }
}

function endOfTheQuiz() {
  containerOfQuizElements.innerHTML = "";
  // creating a h1 element of All done!
  var creatingH1Element = document.createElement("h1");
  creatingH1Element.setAttribute("id", "creatingH1Element");
  creatingH1Element.innerHTML = "All done!";

  document.getElementById("containerOfQuizElements").append(creatingH1Element);
  // containerQuizDivElement.append(creatingH1Element);

  // Calculates time remaining and renders it to the screen as the score
  if (totalSecondsToCompleteQuiz >= 0) {
    var timeRemaining = totalSecondsToCompleteQuiz;
    creatingPElement = document.createElement("p");
    clearInterval(timerDisplay);
    creatingPElement.textContent = "Your final score is " + timeRemaining;

    containerOfQuizElements.appendChild(creatingPElement);
  }

  // Creating a label element which will have an input field of text
  var creatingLabelElement = document.createElement("label");
  creatingLabelElement.setAttribute("id", "creatingLabelElement");
  creatingLabelElement.textContent.toUpperCase = "Enter initials:";

  containerOfQuizElements.appendChild(creatingLabelElement);

  //creating the input element of the label to receive the initials of user
  var creatingInputElement = document.createElement("input");
  creatingInputElement.setAttribute("type", "text");
  creatingInputElement.setAttribute("id", "initials");
  creatingInputElement.textcontent = "";

  containerOfQuizElements.appendChild(creatingInputElement);

  // creating a submission button
  var creatingSubmitButton = document.createElement("button");
  creatingSubmitButton.setAttribute("type", "submit");
  creatingSubmitButton.setAttribute("value", "submit");
  creatingSubmitButton.setAttribute("id", "Submit");
  creatingSubmitButton.textContent = "Submit";

  containerOfQuizElements.appendChild(creatingSubmitButton);

  // Event listener to capture initials and put them in local storage for initials and score
  creatingSubmitButton.addEventListener("click", printHighScoresPage);
  localStorage.setItem("userFinalScore", JSON.stringify(userFinalScore));
}

// function to render the final score to the browser and hold the highscores

function printHighScoresPage() {
  // clearing all text on page
  questionsQuizDivElement.innerHTML = "";
  containerOfQuizElements.innerHTML = "";
  highScoresElement.innerHTML = "";
  timerDisplay.innerHTML = "";

  // creating the h1 element of High Scores
  var highScoresH1Title = document.createElement("h1");
  highScoresH1Title.setAttribute("id", "highScoresTitle");
  highScoresH1Title.innerHTML = "Highscores";

  containerOfQuizElements.appendChild(highScoresH1Title);

  // rendering the users initials and final time score to the screen
  var paraToRenderUserFinalScore = document.createElement("p");
  paraToRenderUserFinalScore.setAttribute("id", "paraToRenderUserFinalScore");
  questionsQuizDivElement.appendChild(paraToRenderUserFinalScore);
  paraToRenderUserFinalScore.textContent = printUserDetailsOnHighScoresPage;

  containerOfQuizElements.appendChild(paraToRenderUserFinalScore);

  // creating a go back button
  var creatingGoBackButton = document.createElement("button");
  creatingGoBackButton.setAttribute("type", "button");
  creatingGoBackButton.setAttribute("id", "goBackButton");
  creatingGoBackButton.textContent = "Go Back";

  containerOfQuizElements.appendChild(creatingGoBackButton);

  // taking the user back to the initial page
  creatingGoBackButton.addEventListener("click", function () {
    window.location.replace("./index.html");
  });

  // creating a clear highscores button
  var creatingClearHighScoresButton = document.createElement("button");
  creatingClearHighScoresButton.setAttribute("type", "button");
  creatingClearHighScoresButton.setAttribute("id", "clearHighScoresButton");
  creatingClearHighScoresButton.textContent = "Clear Highscores";

  containerOfQuizElements.appendChild(creatingClearHighScoresButton);

  creatingClearHighScoresButton.addEventListener("click", function () {
    localStorage.clear();
  });
}

// will get the user details printed on the HighScores page
function printUserDetailsOnHighScoresPage() {
  var userInitials = event.target.value;

  var userFinalScore = {
    initials: userInitials,
    score: timeRemaining,
  };

  localStorage.getItem("userFinalScore", JSON.parse(userFinalScore));
}
