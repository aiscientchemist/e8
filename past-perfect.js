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


// --- QUIZ QUESTIONS (100 KREATYWNYCH PYTAŃ - PAST PERFECT TIME TRAVELER'S LOG) ---
const questions = [
    // PART 1: TIME MACHINE CALIBRATION (Mastering the Form)
    {
        question: "Calibration Test 1: Complete the sentence. 'Before my first jump, I ___ (read) the manual.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had read",
        tolerance: 2
    },
    {
        question: "Calibration Test 2: Make this sentence negative. 'She had seen a dinosaur.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "She hadn't seen a dinosaur",
        tolerance: 3
    },
    {
        question: "Calibration Test 3: Form a question. '___ you ___ (finish) the calculations before you left?'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "Had you finished",
        tolerance: 3
    },
    {
        question: "Calibration Test 4: What is the past participle of the verb 'to go'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "gone",
        tolerance: 1
    },
    {
        question: "Calibration Test 5: Correct the mistake. 'He have already left.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "He had already left",
        tolerance: 3
    },
    {
        question: "Calibration Test 6: Complete the sentence. 'They ___ (never / be) to the future before.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had never been",
        tolerance: 3
    },
    {
        question: "Calibration Test 7: Which sentence is correct?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["I had ate before I came.", "I had eaten before I came.", "I have eaten before I came."],
        answer: "I had eaten before I came."
    },
    {
        question: "Calibration Test 8: What is the past participle of 'begin'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "begun",
        tolerance: 1
    },
    {
        question: "Calibration Test 9: Form a negative question. '___ he ___ (not / tell) you the secret?'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "Hadn't he told",
        tolerance: 3
    },
    {
        question: "Calibration Test 10: Complete the sentence. 'The system ___ (shut) down before the paradox occurred.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had shut",
        tolerance: 2
    },
    {
        question: "Calibration Test 11: The Past Perfect is formed with 'had' and the...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "past participle",
        tolerance: 2
    },
    {
        question: "Calibration Test 12: What is the past participle of 'write'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "written",
        tolerance: 1
    },
    {
        question: "Calibration Test 13: Correct the mistake. 'We was already finished.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "We had already finished",
        tolerance: 3
    },
    {
        question: "Calibration Test 14: Form a question. 'What ___ she ___ (do) to cause the timeline split?'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had she done",
        tolerance: 2
    },
    {
        question: "Calibration Test 15: What is the past participle of 'take'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "taken",
        tolerance: 1
    },

    // PART 2: FIRST JUMPS (Observing Past States)
    {
        question: "Log Entry 1889: I arrived in Paris to see the Eiffel Tower's opening. The engineers ___ (already / complete) the construction.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had already completed",
        tolerance: 3
    },
    {
        question: "Log Entry 1492: I went to the harbor, but Columbus was not there. His ships ___ (just / leave).",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had just left",
        tolerance: 2
    },
    {
        question: "Log Entry 1969: I landed on the moon. It was an amazing feeling, as no human ___ (ever / walk) there before me... except Armstrong.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had ever walked",
        tolerance: 3
    },
    {
        question: "Log Entry, Ancient Rome: The streets were chaotic. I realized a huge chariot race ___ (just / finish).",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had just finished",
        tolerance: 3
    },
    {
        question: "Log Entry, Egypt: The pyramid was magnificent. The pharaoh who built it ___ (die) centuries earlier.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had died",
        tolerance: 2
    },
    {
        question: "I couldn't get a ticket for the first Globe Theatre performance. They ___ (already / sell) all of them.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had already sold",
        tolerance: 3
    },
    {
        question: "The ground was wet when I arrived in the Jurassic period. It ___ (rain) earlier.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had rained",
        tolerance: 2
    },
    {
        question: "I was late for the coronation. The new queen ___ (already / receive) the crown.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had already received",
        tolerance: 3
    },
    {
        question: "I visited Shakespeare's home. I was sad because he ___ (write) his last play years before.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had written",
        tolerance: 2
    },
    {
        question: "I tried to meet Leonardo da Vinci, but he ___ (just / move) to France.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had just moved",
        tolerance: 3
    },
    // ... (15 more 'First Jumps' questions)

    // PART 3: ANALYZING TIMELINES (The Main Mission)
    {
        question: "Mission Log: By the time the volcano erupted, most of the citizens of Pompeii ___ (not / escape).",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had not escaped",
        tolerance: 3
    },
    {
        question: "Mission Log: After the apple ___ (fall) on his head, Newton started to think about gravity.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had fallen",
        tolerance: 2
    },
    {
        question: "Mission Log: The Titanic hit the iceberg after it ___ (receive) several warnings.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had received",
        tolerance: 2
    },
    {
        question: "Mission Log: The war ended because the two leaders ___ (sign) a peace treaty.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had signed",
        tolerance: 2
    },
    {
        question: "Which action happened first? 'The meeting started after we had arrived.'",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["The meeting started", "We arrived"],
        answer: "We arrived"
    },
    {
        question: "Mission Log: By the time I arrived at the battle, the soldiers ___ (already / begin) to fight.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had already begun",
        tolerance: 3
    },
    {
        question: "Mission Log: She didn't know what to do. She ___ (never / see) a time machine before.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had never seen",
        tolerance: 3
    },
    {
        question: "Combine the sentences using 'after': 'First, they invented the wheel. Then, civilization advanced quickly.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "After they had invented the wheel, civilization advanced quickly.",
        tolerance: 6
    },
    {
        question: "Mission Log: When I spoke to the king, I could tell that someone ___ (give) him bad advice.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had given",
        tolerance: 2
    },
    {
        question: "Which action happened second? 'By the time I found my camera, the dinosaur had disappeared.'",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["I found my camera", "The dinosaur disappeared"],
        answer: "I found my camera"
    },
    // ... (25 more 'Analyzing Timelines' questions)

    // PART 4: PARADOX PREVENTION (Advanced Logic)
    {
        question: "Paradox Alert: A man said he got the scar in a war that ___ (not / happen) yet. This is impossible.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had not happened",
        tolerance: 3
    },
    {
        question: "Timeline Analysis: The letter was sent on Monday. It arrived on Wednesday. So, by Tuesday, he ___ (not / receive) it.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had not received",
        tolerance: 3
    },
    {
        question: "What is the past participle of 'to break'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "broken",
        tolerance: 1
    },
    {
        question: "Paradox Check: He couldn't remember my name, even though I was sure we ___ (meet) before.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had met",
        tolerance: 2
    },
    {
        question: "Timeline Analysis: The fire started at 10 PM. The alarm went off at 10:05 PM. By the time the alarm went off, the fire ___ (already / start).",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had already started",
        tolerance: 3
    },
    {
        question: "What is the past participle of 'to choose'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "chosen",
        tolerance: 1
    },
    {
        question: "Paradox Check: The key didn't work. I realized that someone ___ (change) the lock.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had changed",
        tolerance: 2
    },
    {
        question: "The Past Perfect describes an action that was completed ___ another past action.",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["before", "after", "during", "instead of"],
        answer: "before"
    },
    {
        question: "Timeline Analysis: She passed the exam because she ___ (study) very hard.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had studied",
        tolerance: 2
    },
    {
        question: "Final Mission Debrief: To understand the past, you must first understand what ___ (come) before. Is this concept clear?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "had come",
        tolerance: 2
    }
    // ... (10 more 'Paradox Prevention' questions)
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