// --- Quiz Data ---
// Array of question objects. Each object has a question, options, and the index of the correct answer.
const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Madrid", "Paris"],
        correctAnswer: 3 // Index 3 corresponds to "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: 1 // Index 1 corresponds to "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3 // Index 3 corresponds to "Pacific Ocean"
    }
];

// --- State Variables ---
let currentQuestionIndex = 0;
let score = 0;

// --- DOM References ---
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultsElement = document.getElementById('results');
const quizAreaElement = document.getElementById('question-area'); // Use question area to hide/show
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');


// --- Functions ---

// Function to load a question
function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = ''; // Clear previous options

        currentQuestion.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.id = 'option' + index; // Unique ID for each radio button
            radioInput.name = 'answer'; // Same name for all radios in a group
            radioInput.value = index; // Store the index as the value

            const label = document.createElement('label');
            label.htmlFor = 'option' + index;
            label.textContent = option;

            optionDiv.appendChild(radioInput);
            optionDiv.appendChild(label);
            optionsElement.appendChild(optionDiv);
        });

    } else {
        // Quiz finished
        displayResults();
    }
}

// Function to check the selected answer
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    // Check if an option is selected
    if (selectedOption) {
        const selectedAnswerIndex = parseInt(selectedOption.value);
        const correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;

        if (selectedAnswerIndex === correctAnswerIndex) {
            score++;
        }
        return true; // Indicate that an answer was selected
    } else {
        // No answer selected, optionally give feedback or just move on
        console.log("No answer selected."); // For debugging
        return false; // Indicate that no answer was selected
    }
}

// Function to move to the next question or finish
function nextQuestion() {
    const answered = checkAnswer(); // Check the answer for the current question

    // Always move to the next question regardless of whether an answer was selected,
    // but only increment score if an answer was correct.
    currentQuestionIndex++;
    loadQuestion(); // Load the next question or display results if finished
}

// Function to display results
function displayResults() {
    quizAreaElement.classList.add('hidden'); // Hide question area
    nextButton.classList.add('hidden'); // Hide the button
    resultsElement.classList.remove('hidden'); // Show results area

    scoreElement.textContent = score;
    totalQuestionsElement.textContent = questions.length;
}

// --- Event Listener ---
nextButton.addEventListener('click', nextQuestion);

// --- Initialization ---
// Load the first question when the page loads
loadQuestion();