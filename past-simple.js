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


// --- QUIZ QUESTIONS (100 KREATYWNYCH PYTAŃ - PAST SIMPLE MUSEUM OF HISTORY) ---
const questions = [
    // PART 1: CURATOR TRAINING (Mastering the Form)
    {
        question: "Curator's Note: Complete the sentence. 'Yesterday, I ___ (visit) the new Egyptian exhibit.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "visited",
        tolerance: 1
    },
    {
        question: "Curator's Note: Complete the sentence. 'She ___ (see) the ancient Roman statue.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "saw",
        tolerance: 1
    },
    {
        question: "Curator's Note: Make this sentence negative. 'He found the hidden treasure.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "He didn't find the hidden treasure",
        tolerance: 4
    },
    {
        question: "Curator's Note: Form a question. '___ you ___ (go) to the museum last week?'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "Did you go",
        tolerance: 2
    },
    {
        question: "Archive Correction: Correct the mistake. 'She did not liked the painting.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "She did not like the painting",
        tolerance: 4
    },
    {
        question: "Curator's Note: Choose the correct past form of 'begin'.",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["begun", "began", "beginned", "begined"],
        answer: "began"
    },
    {
        question: "Curator's Note: Complete the negative. 'We ___ (not know) the artifact's origin.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "didn't know",
        tolerance: 2
    },
    {
        question: "Curator's Note: What is the past form of 'buy'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "bought",
        tolerance: 1
    },
    {
        question: "Archive Correction: Correct the mistake. 'Did he wrote this book?'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "Did he write this book",
        tolerance: 4
    },
    {
        question: "Curator's Note: Form a question. 'What ___ they ___ (discover) in the tomb?'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "did they discover",
        tolerance: 3
    },
    {
        question: "Curator's Note: What is the past form of 'think'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "thought",
        tolerance: 1
    },
    {
        question: "Curator's Note: Complete the sentence. 'The artist ___ (paint) this portrait in 1888.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "painted",
        tolerance: 1
    },
    {
        question: "Archive Correction: Correct the mistake. 'They came not to the exhibition opening.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "They did not come to the exhibition opening",
        tolerance: 6
    },
    {
        question: "Curator's Note: Which question is correct?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["Where you did go?", "Where did you went?", "Where did you go?"],
        answer: "Where did you go?"
    },
    {
        question: "Curator's Note: What is the past form of 'take'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "took",
        tolerance: 1
    },

    // PART 2: THE ANCIENT WORLD EXHIBIT
    {
        question: "Exhibit Plaque: The ancient Romans ___ (build) aqueducts to transport water.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "built",
        tolerance: 1
    },
    {
        question: "Exhibit Plaque: The Egyptians ___ (invent) a form of writing called hieroglyphs.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "invented",
        tolerance: 1
    },
    {
        question: "Tour Guide Question: What language ___ the ancient Greeks ___ (speak)?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "did the ancient Greeks speak",
        tolerance: 5
    },
    {
        question: "Exhibit Plaque: The philosopher Socrates ___ (not write) any books himself.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "did not write",
        tolerance: 3
    },
    {
        question: "Exhibit Plaque: The Vikings ___ (sail) to North America long before Columbus.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "sailed",
        tolerance: 1
    },
    {
        question: "Tour Guide Question: Where ___ the first Olympic Games ___ (take) place?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "did the first Olympic Games take",
        tolerance: 6
    },
    {
        question: "Exhibit Plaque: Julius Caesar ___ (come), he ___ (see), and he ___ (conquer).",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "came, saw, conquered",
        tolerance: 3
    },
    {
        question: "Exhibit Plaque: The ancient Chinese ___ (develop) the compass, gunpowder, and paper.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "developed",
        tolerance: 2
    },
    {
        question: "Tour Guide Question: ___ the Egyptians ___ (believe) in an afterlife?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "Did the Egyptians believe",
        tolerance: 4
    },
    {
        question: "Exhibit Plaque: The city of Troy ___ (fall) after a long siege.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "fell",
        tolerance: 1
    },

    // PART 3: THE AGE OF DISCOVERY WING
    {
        question: "Historical Record: Leonardo da Vinci ___ (paint) the Mona Lisa in the 16th century.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "painted",
        tolerance: 1
    },
    {
        question: "Historical Record: When ___ Christopher Columbus ___ (reach) the Americas?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "did Christopher Columbus reach",
        tolerance: 4
    },
    {
        question: "Historical Record: Shakespeare ___ (write) about 39 plays.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "wrote",
        tolerance: 1
    },
    {
        question: "Historical Record: Isaac Newton ___ (discover) the law of universal gravitation.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "discovered",
        tolerance: 2
    },
    {
        question: "Historical Record: The Industrial Revolution ___ (begin) in Great Britain.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "began",
        tolerance: 1
    },
    {
        question: "Historical Record: He ___ (not invent) the telephone; Alexander Graham Bell did.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "did not invent",
        tolerance: 3
    },
    {
        question: "Historical Record: Marie Curie ___ (win) Nobel Prizes in two different scientific fields.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "won",
        tolerance: 1
    },
    {
        question: "Historical Record: The Wright brothers ___ (fly) the first successful airplane in 1903.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "flew",
        tolerance: 1
    },
    {
        question: "Historical Record: Why ___ the Titanic ___ (sink)?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "did the Titanic sink",
        tolerance: 4
    },
    {
        question: "Historical Record: The French Revolution ___ (change) society forever.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "changed",
        tolerance: 1
    },

    // PART 4: VERIFYING THE ARCHIVES
    {
        question: "Archive Verification: Which sentence is correct?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["I buyed a book yesterday.", "I did buy a book yesterday.", "I bought a book yesterday."],
        answer: "I bought a book yesterday."
    },
    {
        question: "Archive Verification: Find the mistake. 'She not answer the question.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "She did not answer the question",
        tolerance: 5
    },
    {
        question: "Curator's Task: You need to ask a visitor about their experience. Form a question about yesterday.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "Did you enjoy the museum",
        tolerance: 4 // Allows for variations
    },
    {
        question: "Archive Verification: 'Last year, we ___ (travel) to Japan.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "travelled",
        tolerance: 2 // 'traveled' is also correct
    },
    {
        question: "Archive Verification: What is the past form of 'to read'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "read",
        tolerance: 0 // Spelling is the same, pronunciation is different
    },
    {
        question: "Archive Verification: Which negative sentence is correct?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["He no came.", "He didn't came.", "He didn't come."],
        answer: "He didn't come."
    },
    {
        question: "Curator's Task: Combine the events. 'He ___ (finish) his research, then he ___ (publish) his findings.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "finished, published",
        tolerance: 3
    },
    {
        question: "Archive Verification: He told me that he ___ (lose) his ticket two days ago.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "lost",
        tolerance: 1
    },
    {
        question: "Curator's Task: Form a question about a past ability. '___ Mozart ___ (play) the piano when he was five?'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "Did Mozart play",
        tolerance: 3
    },
    {
        question: "Final Exhibit Check: The Past Simple is used for ___ actions in the past. (completed / ongoing)",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "completed",
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