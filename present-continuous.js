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


// --- QUIZ QUESTIONS (100 KREATYWNYCH PYTAŃ - PRESENT CONTINUOUS LIVE NEWS REPORT) ---
const questions = [
    // PART 1: GOING LIVE (The Basics)
    {
        question: "Anchor: 'Test your mic. What are you doing right now?' You say: 'I ___ (hold) the microphone.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "am holding",
        tolerance: 2
    },
    {
        question: "Anchor: 'Describe the weather.' You see clouds. 'The sun ___ (not / shine) at the moment.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "is not shining",
        tolerance: 3
    },
    {
        question: "Anchor: 'Ask your cameraman a question.' You ask: '___ you ___ (film) this?'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "Are you filming",
        tolerance: 2
    },
    {
        question: "Correct the sentence from a trainee reporter: 'The people is having fun.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "The people are having fun",
        tolerance: 4
    },
    {
        question: "Make this sentence negative: 'She is standing still.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "She is not standing still",
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
        question: "Choose the correct verb for this sentence: 'He ___ listening to the band.'",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["am", "is", "are", "be"],
        answer: "is"
    },
    {
        question: "Form a question: 'What ___ they ___ (wear)?'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "are they wearing",
        tolerance: 3
    },
    {
        question: "Correct the sentence: 'I are reporting live from the festival.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "I am reporting live",
        tolerance: 4
    },
    {
        question: "What is the '-ing' form of 'write'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "writing",
        tolerance: 1
    },

    // PART 2: THE FESTIVAL SCENE (Simultaneous Actions)
    {
        question: "Broadcast Note: 'Look! A famous musician ___ (play) the guitar on the main stage!'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "is playing",
        tolerance: 2
    },
    {
        question: "Broadcast Note: 'The crowd is huge. Thousands of people ___ (watch) the show.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "are watching",
        tolerance: 2
    },
    {
        question: "Broadcast Note: 'Children ___ (eat) ice cream, and their parents ___ (take) photos.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "are eating, are taking",
        tolerance: 3
    },
    {
        question: "Anchor: 'What are the food vendors doing?' You say: 'They ___ (sell) hot dogs and popcorn.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "are selling",
        tolerance: 2
    },
    {
        question: "Broadcast Note: 'A street artist ___ (paint) a portrait over there, and a magician ___ (do) tricks.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "is painting, is doing",
        tolerance: 3
    },
    {
        question: "Anchor: 'Is anyone complaining?' You say: 'No, it seems everyone ___ (have) a wonderful time.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "is having",
        tolerance: 2
    },
    {
        question: "Broadcast Note: 'Some teenagers ___ (dance) near the speakers.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "are dancing",
        tolerance: 2
    },
    {
        question: "Anchor: 'What's happening in the sky?' You see balloons. 'Colorful balloons ___ (float) above the crowd.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "are floating",
        tolerance: 2
    },
    {
        question: "Broadcast Note: 'A security guard ___ (walk) through the area to make sure everything is safe.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "is walking",
        tolerance: 2
    },
    {
        question: "Broadcast Note: 'Why ___ that child ___ (laugh) so loudly? Oh, he sees the clown!'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "is that child laughing",
        tolerance: 4
    },

    // PART 3: THE SPECIAL GUEST (Future Arrangements & Temporary Situations)
    {
        question: "News Update: 'The mayor is here, but she ___ (not / give) her speech right now. She is waiting.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "is not giving",
        tolerance: 3
    },
    {
        question: "News Update: 'She ___ (speak) to the public in about ten minutes. That's the plan.' (Future arrangement)",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "is speaking",
        tolerance: 2
    },
    {
        question: "News Update: 'This week, the city ___ (celebrate) its 200th anniversary.' (Temporary situation)",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "is celebrating",
        tolerance: 2
    },
    {
        question: "Anchor: 'When are you coming back to the studio?' You say: 'I ___ (return) after the mayor's speech.' (Future arrangement)",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "am returning",
        tolerance: 2
    },
    {
        question: "Broadcast Note: 'That man over there is very annoying. He ___ (always / shout) into his phone!'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "is always shouting",
        tolerance: 3
    },
    {
        question: "News Update: 'Next, the organizers ___ (launch) the fireworks.' (Future arrangement)",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "are launching",
        tolerance: 2
    },
    {
        question: "Broadcast Note: 'I ___ (stay) at a hotel downtown for the duration of the festival.' (Temporary situation)",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "am staying",
        tolerance: 2
    },
    {
        question: "Which sentence refers to a future plan?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["I am watching TV.", "I watch TV every day.", "I am meeting friends tomorrow."],
        answer: "I am meeting friends tomorrow."
    },
    {
        question: "News Update: 'My colleague, Jane, ___ (interview) the police chief later this evening.' (Future arrangement)",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "is interviewing",
        tolerance: 2
    },
    {
        question: "Broadcast Note: 'These traffic problems ___ (get) worse because of the festival.' (Developing situation)",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "are getting",
        tolerance: 2
    },

    // PART 4: THE FINAL REPORT (Mastery & Nuance)
    {
        question: "Final Report: 'Most people in this city ___ (work) on weekdays, but today, they ___ (celebrate).'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "work, are celebrating",
        tolerance: 3
    },
    {
        question: "Final Report: 'Look! The fireworks ___ (start) now!'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "are starting",
        tolerance: 2
    },
    {
        question: "Which question is correct?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["What you are doing?", "What are you doing?", "What do you do now?"],
        answer: "What are you doing?"
    },
    {
        question: "Final Report: 'The festival usually ___ (end) at 10 PM, but tonight it ___ (go) on a little longer.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "ends, is going",
        tolerance: 2
    },
    {
        question: "Which verb is a 'stative' verb and not typically used in the continuous form?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["run", "eat", "know", "talk"],
        answer: "know"
    },
    {
        question: "Correct the sentence: 'I am not understanding what you say.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "I don't understand what you are saying",
        tolerance: 5 // a bit tricky
    },
    {
        question: "Final Report: 'The mood here is fantastic. It ___ (get) more exciting every minute.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "is getting",
        tolerance: 2
    },
    {
        question: "Anchor: 'Thanks for the report. What ___ you ___ (do) next?'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "are you doing",
        tolerance: 3
    },
    {
        question: "Your response: 'I ___ (pack) up my equipment and then I ___ (head) back to the studio.' (Future arrangement)",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "am packing, am heading",
        tolerance: 3
    },
    {
        question: "Final thought: The Present Continuous is for actions that are temporary and happening ___ now.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "around",
        tolerance: 1
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