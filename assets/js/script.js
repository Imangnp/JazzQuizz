/*jshint esversion: 6 */ 

// Available Questions and answers
const questions = [
    {
      question: 'What city is considered the birthplace of jazz?',
      answers: [
        'New York',
        'New Orleans',
        'Chicago'
      ],
      correctAnswer: 1
    },
  
    {
        question: 'Who is sometimes referred to as the Queen of Jazz?',
        answers: [
          'Ella Fitzgerald',
          'Aretha Franklin',
          'Billie Holiday'
        ],
        correctAnswer: 0
    },
  
    {
        question: 'What instrument did Miles Davis play?',
        answers: [
          'Piano',
          'Saxophone',
          'Trumpet'
        ],
        correctAnswer: 2
    },
  
    {
        question: 'What jazz soloist was known as "Yardbird"? ',
        answers: [
            'Charlie Parker',
            'Lester Young',
            'Stan Getz'
        ],
        correctAnswer: 0
    },
  
    {
        question: 'What kind of flower did Billie Holiday wear onstage?',
        answers: [
            'Gardenia',
            'Rose',
            'Hibiscus'
        ],
        correctAnswer: 0
    },
  
    {
        question: 'When is International Jazz Day celebrated? ',
        answers: [
            'June 30',
            'April 30',
            'May 30'
        ],
        correctAnswer: 1
    },    
    {
        question: 'How many songs did Duke Ellington write?',
        answers: [
            '125',
            '500',
            '1000'
        ],
        correctAnswer: 2
    }, 
    {
        question: '"So What" is the first track of which Miles Davis album?',
        answers: [
            'Milestones',
            'Kind of Blue',
            'Birth of the Cool'
        ],
        correctAnswer: 1
    }, 
    {
        question: 'What was the first published jazz composition?',
        answers: [
            'CrossRoad Blues',
            'Sidewalk Blues',
            'Jelly Roll Blues'
        ],
        correctAnswer: 2
    },  
    {
        question: 'Who was the first violinist to play jazz?',
        answers: [
            'Regina Carter',
            'Billy Bang',
            'Stuff Smith'
        ],
        correctAnswer: 2
    },
  ];

// The constants to get elements from the DOM
const logo = document.getElementById("logo");
const homePageContainer = document.getElementById("homePageContainer");
const rulesPageContainer = document.getElementById("rulesPageContainer");
const quizPageContainer = document.getElementById("quizPageContainer");
const scorePageContainer = document.getElementById("scorePageContainer");
const questionCounter = document.getElementById("questionCounter");
const progress = document.getElementById("progress");
const questionsNum = 10;

// keeps the start score
let score = 0 ;


// Background music and play/pause button(icon)
let music = new Audio("../assets/audio/background-music.mp3");
music.volume = 0.1;  
let musicButton = document.getElementById("musicButton");


/**
   * To show the Rules page this function hides the Home page
   * and loads the Rules page
*/
function showRules() {
    homePageContainer.classList.add("hide");
    rulesPageContainer.classList.remove("hide");   
}

/**
   * To start the game by Play Now button this function hides the Home page 
   * and loads the quiz page 
*/
function playNow() {
    // Removing CSS classes to hide Home page and Rules page
    logo.classList.add("hide");
    homePageContainer.classList.add("hide");
    rulesPageContainer.classList.add("hide");   
    quizPageContainer.classList.remove("hide");
    quizController();
    // These lines are written from project-portfolio-2 slack channel
    musicButton.addEventListener("click", function() {
        if (music.paused == true) {
            music.play();
            musicButton.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        } else {
            music.pause();
            musicButton.innerHTML = `<i class="fa-solid fa-play"></i>`;
        }
    });
        
    // Plays jazz music
    music.play();
}

/**
   * Gets the questions and answers from the array and deploys them 
   * inside the quiz page by using innerHTML
*/
function showQuestion(questionIndex) {
    let questionText = document.getElementById('questionText');
    let answer1Label = document.getElementById('answer1Label');
    let answer2Label = document.getElementById('answer2Label');
    let answer3Label = document.getElementById('answer3Label');
    
    questionText.innerHTML = questions[questionIndex].question;
    answer1Label.innerHTML = questions[questionIndex].answers[0];
    answer2Label.innerHTML = questions[questionIndex].answers[1];
    answer3Label.innerHTML = questions[questionIndex].answers[2];
}

/**
   * Compares selected option to available answers and 
   * Checks for correct/wrong answer.
*/
function checkAnswer(questionIndex) {
    let answer1 = document.getElementById('answer1Radio');
    let answer2 = document.getElementById('answer2Radio');
    let answer3 = document.getElementById('answer3Radio');
    let scoreCounter = document.getElementById('scoreText');
    let answer = null;
    if (answer1.checked) {
        answer = 0;
    } else if (answer2.checked) {
       answer = 1;
    } else if (answer3.checked) {
        answer = 2;
    }

    // Add up scores for correct answers
    if (answer == questions[questionIndex].correctAnswer) {
        score = score + 10;
        scoreCounter.innerHTML = `${score}`;
    } 

    answer1.checked = false;
    answer2.checked = false;
    answer3.checked = false;
}

/**
   * This function updates the number of current question by text
   * and also shows that on the progress bar.
  */
function updateQuestionProgress(questionIndex) {
    questionCounter.innerText = (questionIndex + 1) + "/" + questionsNum;
    progress.style.width = `${((questionIndex + 1) / questionsNum) * 100}%`;
}

/**
   * Calling this function by clicking on confirm button and it 
   * loads the next available question. When all questions are over 
   * it will lead to the Score page.
*/
function quizController() {
    let questionIndex = 0;
    showQuestion(questionIndex);
    // Let to confirm the selected answer
    let confirmButton = document.getElementById('confirmButton');
     confirmButton.addEventListener('click', function() {
        if(questionIndex < questions.length - 1) {
            checkAnswer(questionIndex);
            questionIndex++;
            // Updates progress bar
            updateQuestionProgress(questionIndex);
            showQuestion(questionIndex);
            disableConfirm();
        } else {
            checkAnswer(questionIndex);
            showResults();
            questionIndex = 0;
        }
    });
}

/**
   * These functions help to disable the confirm button when the user 
   * havn't choosen any answer yet. And again it anable The button after 
   * an answer been selected.
*/
function disableConfirm() {
    let confirmButton = document.getElementById('confirmButton');
    confirmButton.disabled = true;
    confirmButton.style.cursor = 'not-allowed';
}

function enableConfirm() {
    let confirmButton = document.getElementById('confirmButton');
    confirmButton.disabled = false;
    confirmButton.style.cursor = 'pointer';
}

/**
   * Loads the Score page and shows the quiz's results score by 
   * hiding other pages. Score is a number between 0 - 100 .
*/
function showResults() {
    homePageContainer.classList.add("hide");
    rulesPageContainer.classList.add("hide");   
    quizPageContainer.classList.add("hide");
    scorePageContainer.classList.remove("hide");
    let finalScore = document.getElementById("finalScore");
    finalScore.innerHTML= score ;
}




