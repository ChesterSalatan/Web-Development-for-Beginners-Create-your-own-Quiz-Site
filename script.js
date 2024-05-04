const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestion, currentQuestionIndex;
let quizScore = 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setnextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestion = question.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setnextQuestion();
    quizScore = 0;
}

function setnextQuestion() {
    resetState();
    if (currentQuestionIndex < shuffledQuestion.length) {
        showQuestion(shuffledQuestion[currentQuestionIndex]);
    } else {
        
        questionContainerElement.innerHTML = '<h2>Quiz Complete</h2>';
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
        startButton.addEventListener('click', startGame); 
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });

    if (correct) {
        quizScore++;
    } else {
        answerButtonsElement.insertAdjacentHTML('beforeend', '<p>Try Again</p>');
    }

    if (shuffledQuestion.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
    } else {
        questionContainerElement.innerHTML = '<h2>Quiz Complete</h2>';
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
        startButton.addEventListener('click', startGame); 
    }

    document.getElementById('right-answers').innerText = quizScore;
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const question = [
    {
        question: 'Which tag is used to define the structure of an HTML document?',
        answers: [
            { text: '<title>', correct: false },
            { text: '<body>', correct: false },
            { text: '<head>', correct: false },
            { text: '<html>', correct: true },
        ],
    },
    {
        question: 'HTML stands for?',
        answers: [
            { text: 'How To Make Lumpia', correct: false },
            { text: 'Hyper Text Markup Language', correct: true },
            { text: 'Hyper Transfer Markup Language', correct: false },
            { text: 'High Tech Markup Language', correct: false },
        ],
    },
    {
        question: 'Which tag is used to add an image to an HTML page?',
        answers: [
            { text: '<img>', correct: true },
            { text: '<image>', correct: false },
            { text: '<picture>', correct: false },
            { text: '<src>', correct: false },
        ],
    },
    {
        question: 'Which tag is used to define a hyperlink in HTML?',
        answers: [
            { text: '<a>', correct: true },
            { text: '<h>', correct: false },
            { text: '<p>', correct: false },
            { text: '<b>', correct: false },
        ],
    },
    {
        question: 'True/False: The alt attribute in the <img> tag is required to provide alternative text for screen readers and when the image cannot be displayed.',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false },
        ],
    },
    {
        question: ' Which of the following element is responsible for making the text bold in HTML?',
        answers: [
            { text: '<b>', correct: true },
            { text: '<a>', correct: false },
             { text: '<pre>', correct: false },
             { text: '<br>', correct: false },
        ],
    },
    {
        question: 'The correct sequence of HTML tags for starting a webpage is?',
        answers: [
            { text: 'Head, Title, HTML, body', correct: false },
            { text: 'HTML, Body, Title, Head', correct: false },
             { text: 'HTML, Head, Title, Body', correct: false },
             { text: 'HTML, Head, Title, Body', correct: true },
        ],
    },
    {
        question: ' Which of the following tag is used for inserting the largest heading in HTML?',
        answers: [
            { text: '<h3>', correct: false },
            { text: '<h1>', correct: true },
             { text: '<h5>', correct: false },
             { text: '<h6>', correct: false },
        ],
    },
    {
        question: 'Which of the following element is responsible for making the text italic in HTML?',
        answers: [
            { text: '<italic>', correct: false },
            { text: '<i>', correct: true },
             { text: '<it>', correct: false },
             { text: '<pre>', correct: false },
        ],
    },
    {
        question: 'Which of the following tag is used to add rows in the table?',
        answers: [
            { text: '<td> and </td>', correct: false },
            { text: '<th> and </th>', correct: false },
             { text: '<tr> and </tr>', correct: true },
             { text: 'None of the above', correct: false },
        ],
    },
];