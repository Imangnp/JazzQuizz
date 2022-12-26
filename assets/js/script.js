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





/**
   * To show the Rules page this function hides the Home page
   * and loads the Rules page
  */
function showRules() {
    homePageContainer.classList.add("hide");
    rulesPageContainer.classList.remove("hide");   
}