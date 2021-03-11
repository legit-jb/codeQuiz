// GIVEN I am taking a code quiz
// WHEN I click the start button
var jbutton = document.getElementById("input");
var questionSide = document.getElementById("questionSide");
var stage = document.getElementById("textarea");

function instructions() {
    var directions = "Answer the following code related questions. Any wrong answers will subtract time from the timer. Did I mention the timer? Yeah, there's a timer."


    stage.textContent = directions;
    jbutton.textContent = "start";
}
// end instructions function

function init() {
    instructions();
}
// end init function

init();

jbutton.addEventListener("click", startQuiz);

function startQuiz() {
    stage.textContent = "";

    var answers1 = ["strings", "booleans", "alerts", "numbers"];
    var question1 = {
        header: "Question 1",
        question: "Commonly used data types DO NOT include:",
        answers: answers1,
        correct: answers1[2]
    }
    // end question1

    var answers2 = ["quotes", "curly brackets", "parentheses", "square brackets"];
    var question2 = {
        header: "Question 2",
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: answers2,
        correct: answers2[2]
    }
    // end question2

    var answers3 = ["numbers and strings", "other arrays", "booleans", "all of the above"];
    var question3 = {
        header: "Question 3",
        question: "Arrays in JavaScript can be used to store ____.",
        answers: answers3,
        correct: answers3[3]
    }
    // end question3

    var answers4 = ["commas", "curly brackets", "quotes", "parentheses"];
    var question4 = {
        header: "Question 4",
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: answers4,
        correct: answers4[2]
    }
    // end question4

    var answers5 = ["JavaScript", "terminal / bash", "for loops", "console.log"]
    var question5 = {
        header: "Question 5",
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: answers5,
        correct: answers5[3]
    }
    // end question5

    var questions = [question1, question2, question3, question4, question5];

    jbutton.textContent = "next";
    
    for (i=0; i<questions.length; i++) {
        var thisQuestion = questions [i];
        console.log (thisQuestion.question);
        questionSide.textContent = thisQuestion.question;
    }
    // end if loop
}
// end startQuiz function








// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score