// GIVEN I am taking a code quiz
// WHEN I click the start button
var time = true;
const setlimit = 15;
var timeLimit = setlimit;
var quesitonSide = document.getElementById("questionSide");
var answerSide = document.getElementById("answerSide");
var instructions = "Answer the following code related questions. Any wrong answers will subtract time from the timer. Did I mention the timer? Yeah, there's a timer.";
var round = 1;

function cleanup(elementA, elementB) {
    console.log(elementB);
    console.log(elementA);
    elementA.remove();
    elementB.remove();

    if (round <= questions.length && timeLimit > 0) {
        showQuestion();
    }
    else {
        gameOver();
    }
}

function gameOver() {
    timeLimit = 0;
    var directions = document.createElement("p");
    directions.textContent = "GAME OVER";
    quesitonSide.appendChild(directions);

    // make a start button
    var startBtn = document.createElement("button");
    startBtn.innerHTML = "START AGAIN";
    answerSide.appendChild(startBtn);
    // add listener to start button to execute startQuiz function upon click
    startBtn.addEventListener("click", function () {
        round = 1;
        timeLimit = setlimit;
        cleanup (startBtn, directions);
        timer();
    })
}


// Here we make the question objects which stor the question, answers (as an array) and the correct answer

var answers1 = ["strings", "booleans", "alerts", "numbers"];
var question1 = {
    header: "Question 1",
    question: "Commonly used data types DO NOT include:",
    answers: answers1,
    correct: 2
    // correct is the INDEX of the answer array not the count
}
// end question1

var answers2 = ["quotes", "curly brackets", "parentheses", "square brackets"];
var question2 = {
    header: "Question 2",
    question: "The condition in an if / else statement is enclosed within ____.",
    answers: answers2,
    correct: 2
    // correct is the INDEX of the answer array not the count
}
// end question2

var answers3 = ["numbers and strings", "other arrays", "booleans", "all of the above"];
var question3 = {
    header: "Question 3",
    question: "Arrays in JavaScript can be used to store ____.",
    answers: answers3,
    correct: 3
    // correct is the INDEX of the answer array not the count
}
// end question3

var answers4 = ["commas", "curly brackets", "quotes", "parentheses"];
var question4 = {
    header: "Question 4",
    question: "String values must be enclosed within ____ when being assigned to variables.",
    answers: answers4,
    correct: 2
    // correct is the INDEX of the answer array not the count
}
// end question4

var answers5 = ["JavaScript", "terminal / bash", "for loops", "console.log"]
var question5 = {
    header: "Question 5",
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: answers5,
    correct: 3
    // correct is the INDEX of the answer array not the count
}
// end question5
// end of question objects

// question objects are stored in an array so they can be used in an incrematal way
var questions = [question1, question2, question3, question4, question5];

// int starts the whole thing at load
function init() {
    showInstructions();
}
// end init function
init();

// show intructions for the quiz
function showInstructions() {

    // make insreuctions for the quiz
    var directions = document.createElement("p");
    directions.textContent = instructions;
    quesitonSide.appendChild(directions);

    // make a start button
    var startBtn = document.createElement("button");
    startBtn.innerHTML = "START";
    answerSide.appendChild(startBtn);

    // add listener to start button to execute startQuiz function upon click
    startBtn.addEventListener("click", function () {
        cleanup(startBtn, directions);
        timer();
    })
}
// end show instructions function

function showQuestion() {

    var i = round - 1;
    var answersWrapper = document.createElement("div");
    answerSide.appendChild(answersWrapper);

    var questionWrapper = document.createElement("div");
    questionSide.appendChild(questionWrapper);

    var thisQuestion = questions[i];
    questionWrapper.textContent = thisQuestion.question;

    round++;

        // show question for loop 
        console.log("this is round " + round);
        console.log("this is i " + i);
        // show answers loop
        for (j = 0; j < thisQuestion.answers.length; j++) {
            // make buttons with answer
            var btn = document.createElement("button");
            btn.textContent = thisQuestion.answers[j];
            answersWrapper.appendChild(btn);
            btn.id = j;
        }

        // end show answers loop
        answersWrapper.addEventListener('click', (event) => {
            if (event.target.id == thisQuestion.correct) {
                // cleanup (answersWrapper, questionWrapper);
                console.log("correct");
            } else {
                // cleanup (answersWrapper, questionWrapper);
                console.log("incorrect");
            }
            cleanup(answersWrapper, questionWrapper);
        })
        // end eventlistener 
}
// end starQuiz function


function timer() {

    var myVar = setInterval(myTimer, 1000);
    function myTimer() {
        if (timeLimit > 0) {
            document.getElementById("countdown").innerHTML = timeLimit;
            timeLimit--;
        } else {
            timeLimit = 0;
            clearTimeout(myVar);
            document.getElementById("countdown").innerHTML = timeLimit;
            gameOver;
        }
        // end if else statement
    }
    // end myTimer function
}
// end timer function




// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score





function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if (time < 9) { //if timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if (time < 0) { //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for (i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for (i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}
