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
        question: 'How many songs did Duke Ellington write??',
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




const homePageContainer = document.getElementById("homePageContainer");
const rulesPageContainer = document.getElementById("rulesPageContainer");
const quizPageContainer = document.getElementById("quizPageContainer");





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

}

/**
   * Gets the questions and answers from the array and deploys them 
   * inside the quiz page by using innerHTML
  */
function showQuestion(questionIndex) {
    let questionText = document.getElementById('questionText')
    let answer1Label = document.getElementById('answer1Label')
    let answer2Label = document.getElementById('answer2Label')
    let answer3Label = document.getElementById('answer3Label')
    
    questionText.innerHTML = questions[questionIndex].question;
    answer1Label.innerHTML = questions[questionIndex].answers[0];
    answer2Label.innerHTML = questions[questionIndex].answers[1];
    answer3Label.innerHTML = questions[questionIndex].answers[2];
}

function checkAnswer(questionIndex) {
    let answer1 = document.getElementById('answer1Radio');
    let answer2 = document.getElementById('answer2Radio');
    let answer3 = document.getElementById('answer3Radio');
    let scoreCounter = document.getElementById('scoreText');
    let answer = null

}

function quizController() {
    let questionIndex = 0;
    showQuestion(questionIndex);
}