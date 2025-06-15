// --- GETTING HTML ELEMENTS —

const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const questionText = document.getElementById('question-text');
const answerArea = document.getElementById('answer-area');
const feedback = document.getElementById('feedback');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const scoreText = document.getElementById('score-text');
const totalQuestionsText = document.getElementById('total-questions-text');
const questionImage = document.getElementById('question-image');
const questionSound = document.getElementById('question-sound');


// --- QUIZ QUESTIONS (100 KREATYWNYCH PYTAŃ - WORLD TRAVELER'S JOURNAL) ---
const questions = [
    // PART 1: THE PREPARATION
    {
        question: "Journal Entry: First things first. Before I can go anywhere, I need to ___ a flight and a hotel room.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "book",
        tolerance: 1
    },
    {
        question: "Journal Entry: I'm packing my ___. It's the big bag where I'll put all my clothes.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "suitcase",
        tolerance: 2
    },
    {
        question: "This official document with my photo proves my identity and nationality. I can't travel abroad without my ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "passport",
        tolerance: 2
    },
    {
        question: "Some countries require a special stamp in your passport before you can enter. This is called a ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "visa",
        tolerance: 1
    },
    {
        question: "A short trip, often for just a weekend, is called a city ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "break",
        tolerance: 1
    },
    {
        question: "I bought travel ___ just in case I get sick or my flight is cancelled.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "insurance",
        tolerance: 2
    },
    {
        question: "The money used in a particular country is its ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "currency",
        tolerance: 2
    },
    {
        question: "A journey by sea for pleasure is called a ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "cruise",
        tolerance: 1
    },
    {
        question: "My flight is not direct. There is a one-hour ___ in Amsterdam, where I have to change planes.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "stopover",
        tolerance: 2 // layover is also correct
    },
    {
        question: "What do you call a holiday where the flight, hotel, and meals are all included in one price?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "package holiday",
        tolerance: 2
    },

    // PART 2: IN TRANSIT (At the Airport & On the Move)
    {
        question: "Journal Entry: I've arrived at the airport. First, I need to go to the ___ desk to leave my big suitcase.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "check-in",
        tolerance: 2
    },
    {
        question: "The small bag I take on the plane with me is called ___ luggage or a carry-on.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "hand",
        tolerance: 1
    },
    {
        question: "This document is my ticket to get on the plane. It shows my seat number and gate.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "boarding pass",
        tolerance: 2
    },
    {
        question: "After check-in, I must go through the ___ check, where they scan my bags.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "security",
        tolerance: 2
    },
    {
        question: "The area where I wait for my flight after the security check is the ___ lounge.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "departure",
        tolerance: 2
    },
    {
        question: "The plane is leaving from ___ number B24.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "gate",
        tolerance: 1
    },
    {
        question: "When the plane leaves the ground, it's called ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "take-off",
        tolerance: 2
    },
    {
        question: "What is the opposite of 'take-off' for an airplane?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "landing",
        tolerance: 2
    },
    {
        question: "For a train journey, I wait on the ___ for the train to arrive.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "platform",
        tolerance: 2
    },
    {
        question: "What do you call a single 'car' or 'wagon' of a train?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "carriage",
        tolerance: 2
    },
    {
        question: "A large vehicle that transports many passengers by road, often between cities.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "coach",
        tolerance: 1
    },
    {
        question: "The person who flies the plane is the ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "pilot",
        tolerance: 1
    },
    {
        question: "The people who work on a plane serving passengers are the cabin ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "crew",
        tolerance: 1
    },
    {
        question: "The walkway you use to get from the gate onto the airplane is the ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "jet bridge",
        tolerance: 2
    },
    {
        question: "A journey by ship, especially a long one.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "voyage",
        tolerance: 1
    },

    // PART 3: THE DESTINATION (Accommodation & Activities)
    {
        question: "Journal Entry: I have arrived at my hotel. I need to go to the ___ to get my room key.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "reception",
        tolerance: 2
    },
    {
        question: "The first thing I must do at a hotel is ___. The last thing I do before leaving is ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "check in, check out",
        tolerance: 3
    },
    {
        question: "A room for one person is a ___ room. A room for two people is a ___ room.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "single, double",
        tolerance: 2
    },
    {
        question: "My room doesn't have a traditional key. It has a plastic ___ card.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "key",
        tolerance: 1
    },
    {
        question: "A cheaper type of accommodation, popular with young backpackers, where you might share a room.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "hostel",
        tolerance: 1
    },
    {
        question: "The activity of visiting famous or interesting places in a city is called ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "sightseeing",
        tolerance: 2
    },
    {
        question: "A famous building or site that you visit, like the Eiffel Tower, is a ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "landmark",
        tolerance: 2
    },
    {
        question: "A small gift you buy to remember your trip is a ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "souvenir",
        tolerance: 2
    },
    {
        question: "Trying the traditional food of a place is trying the local ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "cuisine",
        tolerance: 2
    },
    {
        question: "A person who shows tourists around is a tour ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "guide",
        tolerance: 1
    },

    // PART 4: MEMORIES & MISHAPS
    {
        question: "Journal Entry: The view from the mountain was ___. I couldn't speak.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "breathtaking",
        tolerance: 2
    },
    {
        question: "The small village was very pretty and charming, like a painting. It was ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "picturesque",
        tolerance: 2
    },
    {
        question: "The market was full of people and noise. It was very ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "bustling",
        tolerance: 2 // 'crowded' also fits
    },
    {
        question: "Oh no, I don't know where I am! I think I ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "got lost",
        tolerance: 2
    },
    {
        question: "My flight was delayed, so I ___ my connecting flight.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "missed",
        tolerance: 1
    },
    {
        question: "My suitcase didn't arrive at the airport. I have to report my ___ luggage.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "lost",
        tolerance: 1
    },
    {
        question: "I'm feeling sick from the movement of the boat. I think I have travel ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "sickness",
        tolerance: 2
    },
    {
        question: "My passport is no longer valid. It has ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "expired",
        tolerance: 2
    },
    {
        question: "What is the opposite of 'arrival'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "departure",
        tolerance: 2
    },
    {
        question: "If a flight is not on time, it is ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "delayed",
        tolerance: 2
    }
];



// --- STATE VARIABLES AND EVENT LISTENERS ---
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

submitBtn.addEventListener('click', handleSubmit);
nextBtn.addEventListener('click', handleNext);
restartBtn.addEventListener('click', restartQuiz);

// --- FUNCTIONS ---

/**
 * Calculates the Levenshtein distance between two strings (for typo tolerance).
 */
function levenshteinDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0) {
                costs[j] = j;
            } else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                        newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    }
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0) {
            costs[s2.length] = lastValue;
        }
    }
    return costs[s2.length];
}

function startQuiz() {
    // Losowe ułożenie pytań dla lepszej regrywalności
    questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    resultsContainer.classList.add('hide');
    quizContainer.classList.remove('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    resetState();

    // Handle Image
    if (question.image) {
        questionImage.src = question.image;
        questionImage.classList.remove('hide');
    } else {
        questionImage.classList.add('hide');
    }

    // Handle Sound
    if (question.sound) {
        questionSound.src = question.sound;
        questionSound.classList.remove('hide');
    } else {
        questionSound.classList.add('hide');
        questionSound.src = ""; // Clear the source
    }

    // ZMIANA: Usunięto licznik "Pytanie X/Y" z tekstu pytania
    questionText.innerText = question.question;
    totalQuestionsText.innerText = questions.length;

    if (question.type === 'multiple-choice') {
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option;
            button.classList.add('answer-btn');
            button.addEventListener('click', () => selectMultipleChoiceAnswer(button));
            answerArea.appendChild(button);
        });
    } else if (question.type === 'open-ended') {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'open-answer-input';
        input.placeholder = 'Wpisz swoją odpowiedź...';
        input.setAttribute('autocomplete', 'off'); // Zapobiega podpowiedziom
        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (!submitBtn.classList.contains('hide')) {
                    handleSubmit();
                }
            }
        });
        answerArea.appendChild(input);
        input.focus(); // Automatycznie ustawia kursor w polu
    }
}

function resetState() {
    feedback.innerText = '';
    feedback.className = 'feedback';
    nextBtn.classList.add('hide');
    submitBtn.classList.remove('hide');
    answerArea.innerHTML = '';
    selectedAnswer = null;
    nextBtn.innerText = 'Następne pytanie'; // Resetuje tekst przycisku
}

function selectMultipleChoiceAnswer(button) {
    // Nie pozwala na zmianę odpowiedzi po jej zatwierdzeniu
    if (submitBtn.classList.contains('hide')) {
        return;
    }
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    selectedAnswer = button.innerText;
}

function handleSubmit() {
    const currentQuestion = questions[currentQuestionIndex];
    let userAnswer;
    let isCorrect = false;

    if (currentQuestion.type === 'multiple-choice') {
        userAnswer = selectedAnswer;
        if (userAnswer) {
            isCorrect = userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase();
        }
    } else if (currentQuestion.type === 'open-ended') {
        const input = document.getElementById('open-answer-input');
        userAnswer = input.value.trim();
        if (userAnswer) {
            const correctAnswer = currentQuestion.answer;
            const tolerance = currentQuestion.tolerance || 0;
            const distance = levenshteinDistance(userAnswer, correctAnswer);
            isCorrect = distance <= tolerance;
        }
    }

    if (!userAnswer) {
        alert("Proszę podać odpowiedź!");
        return;
    }

    if (isCorrect) {
        score++;
        feedback.innerText = "Dobrze!";
        feedback.classList.add('correct');
    } else {
        feedback.innerText = `Źle. Poprawna odpowiedź to: ${currentQuestion.answer}`;
        feedback.classList.add('incorrect');
    }

    showAnswerStatus(currentQuestion, isCorrect);
    submitBtn.classList.add('hide');

    if (currentQuestionIndex < questions.length - 1) {
        nextBtn.classList.remove('hide');
    } else {
        nextBtn.innerText = 'Zobacz wyniki'; // Zmiana tekstu dla ostatniego pytania
        nextBtn.classList.remove('hide');
    }
}

function showAnswerStatus(question, isCorrect) {
    if (question.type === 'multiple-choice') {
        const buttons = document.querySelectorAll('.answer-btn');
        buttons.forEach(button => {
            if (button.innerText.toLowerCase() === question.answer.toLowerCase()) {
                button.classList.add('correct');
            }
            if (button.classList.contains('selected') && !isCorrect) {
                button.classList.add('incorrect');
            }
            button.disabled = true;
        });
    } else if (question.type === 'open-ended') {
        const input = document.getElementById('open-answer-input');
        input.disabled = true;
        if (isCorrect) {
            input.classList.add('correct');
        } else {
            input.classList.add('incorrect');
        }
    }
}

function handleNext() {
    questionSound.pause(); // Zatrzymuje dźwięk przy przejściu dalej
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.classList.add('hide');
    resultsContainer.classList.remove('hide');
    scoreText.innerText = score;
}

function restartQuiz() {
    startQuiz();
}

// --- INITIALIZE QUIZ ---
startQuiz();