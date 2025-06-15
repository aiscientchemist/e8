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
const questionSound = 'null';


// --- QUIZ QUESTIONS (100 KREATYWNYCH PYTAŃ - PRESENT PERFECT EXPLORER'S JOURNAL) ---
const questions = [
    // PART 1: PACKING THE GEAR (The Basics)
    {
        question: "Journalist: 'Tell me, explorer. What's the most amazing thing you ___ (see)?'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "have seen",
        tolerance: 2
    },
    {
        question: "You reflect on your travels. 'I ___ (be) to every continent except Antarctica.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "have been",
        tolerance: 2
    },
    {
        question: "Journalist: 'Has your partner traveled with you?' You reply: 'No, she ___ (not / leave) the country.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "has not left",
        tolerance: 3
    },
    {
        question: "Form a question the journalist might ask: '___ you ever ___ (find) a lost city?'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "Have you ever found",
        tolerance: 3
    },
    {
        question: "Correct the sentence from a trainee's notes: 'The explorer have wrote many books.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "The explorer has written many books",
        tolerance: 5
    },
    {
        question: "What is the past participle of 'do'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "done",
        tolerance: 1
    },
    {
        question: "Choose the correct form: 'We ___ visited the pyramids.'",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["has", "is", "have", "are"],
        answer: "have"
    },
    {
        question: "What is the past participle of 'go'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "gone",
        tolerance: 1
    },
    {
        question: "Correct the mistake: 'He has went to the Amazon rainforest.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "He has gone to the Amazon rainforest",
        tolerance: 5
    },
    {
        question: "Form a question: 'How many countries ___ she ___ (travel) to?'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "has she traveled",
        tolerance: 3
    },

    // PART 2: MAPPING THE WORLD (Life Experience)
    {
        question: "Journalist: '___ you ever ___ (eat) something strange on your travels?'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "Have you ever eaten",
        tolerance: 3
    },
    {
        question: "You look at a map of the poles. 'I ___ (never / see) a polar bear in the wild.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "have never seen",
        tolerance: 3
    },
    {
        question: "You show the journalist a photo. 'This is the highest mountain I ___ ever ___ (climb).'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "have ever climbed",
        tolerance: 3
    },
    {
        question: "Journalist: 'Tell me about your failures.' You reply: 'I ___ (make) many mistakes, but I ___ (learn) from them all.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "have made, have learned",
        tolerance: 3
    },
    {
        question: "You point to an artifact. 'I ___ (keep) this stone since my first expedition.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "have kept",
        tolerance: 2
    },
    {
        question: "Which question is correct for asking about life experience?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["Did you ever go to China?", "Have you ever been to China?", "Were you ever in China?"],
        answer: "Have you ever been to China?"
    },
    {
        question: "You look at your worn-out boots. 'These boots ___ (be) with me on countless adventures.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "have been",
        tolerance: 2
    },
    {
        question: "Journalist: 'Is it true you speak ten languages?' You smile. 'No, I ___ (only / learn) six fluently.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "have only learned",
        tolerance: 3
    },
    {
        question: "You open your journal. 'I ___ (write) about every single trip I ___ (take).'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "have written, have taken",
        tolerance: 3
    },
    {
        question: "What is the past participle of 'to break'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "broken",
        tolerance: 1
    },

    // PART 3: THE LATEST DISCOVERY (Recent Past & Present Result)
    {
        question: "Journalist: 'You look tired!' You reply: 'Yes, I ___ (just / return) from the jungle.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "have just returned",
        tolerance: 3
    },
    {
        question: "Your assistant enters. 'Sir, the lab results ___ (arrive).'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "have arrived",
        tolerance: 2
    },
    {
        question: "You look at the strange plant on your desk. 'Its leaves ___ (change) color since this morning!'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "have changed",
        tolerance: 2
    },
    {
        question: "Journalist: '___ you ___ (publish) your findings yet?'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "Have you published",
        tolerance: 3
    },
    {
        question: "Your response: 'No, I ___ (not / write) the final report yet.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "haven't written",
        tolerance: 2
    },
    {
        question: "You can't find your map. 'Oh no! I think I ___ (lose) it!'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "have lost",
        tolerance: 2
    },
    {
        question: "The phone rings. 'Good news! The museum ___ (already / agree) to display your artifact.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "has already agreed",
        tolerance: 3
    },
    {
        question: "Which word is often used with the Present Perfect for very recent past actions?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["ago", "yesterday", "just", "last"],
        answer: "just"
    },
    {
        question: "Journalist: 'Why are your hands dirty?' You reply: 'I ___ (work) in the garden with the new plants.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "have been working",
        tolerance: 3 // Present Perfect Continuous also fits perfectly here
    },
    {
        question: "Your leg is in a cast. 'I can't go on the next expedition because I ___ (break) my leg.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "have broken",
        tolerance: 2
    },

    // PART 4: THE ONGOING EXPEDITION (Unfinished Time & Nuance)
    {
        question: "Which sentence is correct?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["I have lived here since 5 years.", "I have lived here for 5 years.", "I lived here since 5 years."],
        answer: "I have lived here for 5 years."
    },
    {
        question: "Choose the correct verb tense: 'I ___ (visit) the Amazon in 2015.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "visited",
        tolerance: 1
    },
    {
        question: "Choose the correct verb tense: 'I ___ (visit) the Amazon three times.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "have visited",
        tolerance: 2
    },
    {
        question: "You look at your journal. 'I ___ (not / write) anything in this journal since last Tuesday.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "haven't written",
        tolerance: 2
    },
    {
        question: "'For' is used with a period of time, and 'since' is used with a ___ in time.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "point",
        tolerance: 1
    },
    {
        question: "Correct the mistake: 'She has been a scientist since ten years.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "She has been a scientist for ten years",
        tolerance: 6
    },
    {
        question: "You look at the calendar. 'I ___ (read) three books this month.' (The month is not finished).",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "have read",
        tolerance: 2
    },
    {
        question: "When did you ___ (start) your career? (Question about a specific past time)",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "start",
        tolerance: 1
    },
    {
        question: "Final reflection: 'My entire life, I ___ (look) for adventure.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "have looked",
        tolerance: 2
    },
    {
        question: "The Present Perfect tense connects the ___ to the ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "past, present",
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