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


// --- QUIZ QUESTIONS (100 KREATYWNYCH PYTAŃ - PAST CONTINUOUS MYSTERY) ---
const questions = [
    // PART 1: BASIC INVESTIGATION (Mastering the form)
    {
        question: "Complete the sentence: 'At 9 PM, I ___ (watch) the guests.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "was watching",
        tolerance: 2
    },
    {
        question: "Complete the sentence: 'The suspects ___ (talk) in the garden.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "were talking",
        tolerance: 2
    },
    {
        question: "Correct the mistake: 'She were reading a book.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "She was reading a book",
        tolerance: 3
    },
    {
        question: "Make this sentence negative: 'He was stealing the diamond.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "He wasn't stealing the diamond",
        tolerance: 3
    },
    {
        question: "Form a question: 'What ___ you ___ (do) at 9:05 PM?'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "were you doing",
        tolerance: 2
    },
    {
        question: "Choose the correct form: 'We ___ listening to the music.'",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["was", "is", "were", "are"],
        answer: "were"
    },
    {
        question: "Complete the negative: 'They ___ (not sleep) during the party.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "weren't sleeping",
        tolerance: 3
    },
    {
        question: "What is the '-ing' form of the verb 'run'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "running",
        tolerance: 1
    },
    {
        question: "Correct the mistake: 'I was stand near the window.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "I was standing",
        tolerance: 2
    },
    {
        question: "Form a question: '___ he ___ (wear) a black hat?'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "Was he wearing",
        tolerance: 2
    },
    {
        question: "Which sentence is correct?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["He was drive his car.", "He was droving his car.", "He was driving his car.", "He were driving his car."],
        answer: "He was driving his car."
    },
    {
        question: "Complete the sentence: 'The clock on the wall ___ (tick) loudly.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "was ticking",
        tolerance: 2
    },
    {
        question: "Make this negative: 'You were telling the truth.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "You weren't telling the truth",
        tolerance: 3
    },
    {
        question: "What is the '-ing' form of 'write'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "writing",
        tolerance: 1
    },
    {
        question: "Form a question: 'Where ___ they ___ (hide)?'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "were they hiding",
        tolerance: 2
    },
    {
        question: "Past Continuous describes an action that was...",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["finished", "in progress at a specific time", "a habit", "a future plan"],
        answer: "in progress at a specific time"
    },
    {
        question: "Complete the sentence: 'The detective ___ (take) notes.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "was taking",
        tolerance: 2
    },
    {
        question: "Correct the mistake: 'They was whispering in the corner.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "They were whispering",
        tolerance: 3
    },
    {
        question: "What is the '-ing' form of 'lie' (as in not telling the truth)?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "lying",
        tolerance: 1
    },
    {
        question: "Form a question: 'Why ___ she ___ (cry)?'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "was she crying",
        tolerance: 2
    },

    // PART 2: SETTING THE SCENE (Simultaneous Actions)
    {
        question: "At 9 PM, the band ___ (play) jazz and the guests ___ (dance).",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "was playing, were dancing",
        tolerance: 3
    },
    {
        question: "The host, Mr. Smith, ___ (greet) people at the door.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "was greeting",
        tolerance: 2
    },
    {
        question: "Outside, the rain ___ (fall) heavily and the wind ___ (blow).",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "was falling, was blowing",
        tolerance: 3
    },
    {
        question: "In the kitchen, the chefs ___ (prepare) the dessert.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "were preparing",
        tolerance: 2
    },
    {
        question: "Some people ___ (not pay) attention; they ___ (check) their phones.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "weren't paying, were checking",
        tolerance: 4
    },
    {
        question: "A few children ___ (run) around the garden, even though their parents ___ (tell) them not to.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "were running, were telling",
        tolerance: 3
    },
    {
        question: "The security guard ___ (stand) near the diamond display case.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "was standing",
        tolerance: 2
    },
    {
        question: "The lights in the ballroom ___ (shine) brightly.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "were shining",
        tolerance: 2
    },
    {
        question: "Two mysterious men ___ (whisper) by the fireplace.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "were whispering",
        tolerance: 2
    },
    {
        question: "What were the guests doing while the band was playing? They ___ (dance).",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "were dancing",
        tolerance: 2
    },
    // ... (15 more 'Setting the Scene' questions)

    // PART 3: THE INTERRUPTION (Past Continuous + when + Past Simple)
    {
        question: "Suspect 1's alibi: 'I ___ (read) a book when the lights ___ (go) out.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "was reading, went",
        tolerance: 2
    },
    {
        question: "Suspect 2's alibi: 'We ___ (have) a drink when we ___ (hear) a loud crash.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "were having, heard",
        tolerance: 2
    },
    {
        question: "The security guard's alibi: 'I ___ (watch) the cameras when the screen suddenly ___ (turn) black.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "was watching, turned",
        tolerance: 3
    },
    {
        question: "The host's alibi: 'I ___ (talk) to a guest when someone ___ (scream).'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "was talking, screamed",
        tolerance: 3
    },
    {
        question: "What was the background action in this sentence: 'She was walking down the stairs when she saw the empty display case.'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "She was walking down the stairs",
        tolerance: 4
    },
    {
        question: "What was the interrupting action in this sentence: 'He was trying to open the window when the alarm went off.'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "the alarm went off",
        tolerance: 3
    },
    {
        question: "Complete the alibi: 'The chef ___ (cut) vegetables when the power ___ (fail).'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "was cutting, failed",
        tolerance: 2
    },
    {
        question: "Choose the correct sentence:",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["I listened music when the phone rang.", "I was listening to music when the phone was ringing.", "I was listening to music when the phone rang."],
        answer: "I was listening to music when the phone rang."
    },
    {
        question: "Complete the alibi: 'They ___ (leave) the party when they ___ (notice) the police cars arriving.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "were leaving, noticed",
        tolerance: 3
    },
    {
        question: "What tense do we usually use for the SHORTER, INTERRUPTING action?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["Past Continuous", "Past Simple", "Present Perfect", "Future Simple"],
        answer: "Past Simple"
    },
    // ... (25 more 'Interruption' questions)

    // PART 4: CRACKING THE CASE (Advanced Use)
    {
        question: "Use 'while' to connect two ongoing actions: 'The detective ___ (think). The suspects ___ (wait).'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "While the detective was thinking, the suspects were waiting.",
        tolerance: 5
    },
    {
        question: "'While' is used for two ___ actions, while 'when' often introduces a ___ action.",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["long, short", "short, long", "past, present", "present, past"],
        answer: "long, short"
    },
    {
        question: "Which question is grammatically correct for an alibi?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["What did you do at 9:10 PM?", "What were you doing at 9:10 PM?", "What have you done at 9:10 PM?"],
        answer: "What were you doing at 9:10 PM?"
    },
    {
        question: "Complete the sentence with 'while' or 'when': 'I was looking for clues ___ I found a footprint.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "when",
        tolerance: 1
    },
    {
        question: "Complete the sentence with 'while' or 'when': 'The thief was escaping ___ the guard was sleeping.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "while",
        tolerance: 1
    },
    {
        question: "Detective's thought: 'So, Lady Eleanor ___ (chat) with the ambassador at the exact moment the crime happened.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "was chatting",
        tolerance: 2
    },
    {
        question: "Detective's thought: 'This is strange. The witness said he ___ (not wear) a hat, but the security camera shows he was.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "wasn't wearing",
        tolerance: 3
    },
    {
        question: "Combine the ideas: 'He (run) through the garden. He (trip) on a stone.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "He was running through the garden when he tripped on a stone.",
        tolerance: 6
    },
    {
        question: "Imagine you are the thief. What's your alibi? 'I'm sorry, detective. At 9 PM, I ___ (sleep) in my room.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "was sleeping",
        tolerance: 2
    },
    {
        question: "Final question, detective. The Past Continuous sets the scene for the main event. True or False?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["True", "False"],
        answer: "True"
    }
    // ... (10 more 'Cracking the Case' questions)
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