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


// --- QUIZ QUESTIONS (100 KREATYWNYCH PYTAŃ - LICZEBNIKI) ---
const questions = [
    // KATEGORIA: LICZEBNIKI GŁÓWNE (1-20)
    {
        question: "How do you write the number 7 in words?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "seven",
        tolerance: 1
    },
    {
        question: "What number comes after ten?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "eleven",
        tolerance: 1
    },
    {
        question: "How do you write the number 12 in words?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "twelve",
        tolerance: 1
    },
    {
        question: "What is the number between seventeen and nineteen?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "eighteen",
        tolerance: 2
    },
    {
        question: "Write the number 3 in words.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "three",
        tolerance: 1
    },
    {
        question: "What is six + five?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "eleven",
        tolerance: 1
    },
    {
        question: "Write the number 20 in words.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "twenty",
        tolerance: 1
    },
    {
        question: "How many sides does a triangle have?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "three",
        tolerance: 1
    },
    {
        question: "What number is 'nine'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "9",
        tolerance: 0
    },
    {
        question: "Write the number 15 in words.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "fifteen",
        tolerance: 1
    },
    {
        question: "What is twenty minus one?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "nineteen",
        tolerance: 2
    },
    {
        question: "How many fingers are on two hands?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "ten",
        tolerance: 1
    },
    {
        question: "Write the number 13 in words.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "thirteen",
        tolerance: 2
    },
    {
        question: "Which number is often considered unlucky?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "thirteen",
        tolerance: 2
    },
    {
        question: "What is eight + eight?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "sixteen",
        tolerance: 2
    },

    // KATEGORIA: LICZEBNIKI GŁÓWNE (20-100)
    {
        question: "How do you write the number 40 in words?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "forty",
        tolerance: 1
    },
    {
        question: "Write the number 21 in words.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "twenty-one",
        tolerance: 2
    },
    {
        question: "What number comes after fifty-nine?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "sixty",
        tolerance: 1
    },
    {
        question: "How do you write the number 88 in words?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "eighty-eight",
        tolerance: 2
    },
    {
        question: "What is one hundred minus ten?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "ninety",
        tolerance: 1
    },
    {
        question: "Write the number 33 in words.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "thirty-three",
        tolerance: 2
    },
    {
        question: "What is ten times ten?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "one hundred",
        tolerance: 2
    },
    {
        question: "How many years are in half a century?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "fifty",
        tolerance: 1
    },
    {
        question: "Write the number 99 in words.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "ninety-nine",
        tolerance: 2
    },
    {
        question: "What is 75 in words?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "seventy-five",
        tolerance: 2
    },
    {
        question: "Which number ends with '-ty': thirty or thirteen?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "thirty",
        tolerance: 1
    },
    {
        question: "What is forty + forty?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "eighty",
        tolerance: 1
    },
    {
        question: "How many minutes are in one hour?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "sixty",
        tolerance: 1
    },
    {
        question: "Write the number that is one less than thirty.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "twenty-nine",
        tolerance: 2
    },
    {
        question: "How do you write the number 50 in words?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "fifty",
        tolerance: 1
    },

    // KATEGORIA: DUŻE LICZEBNIKI I ZASADY
    {
        question: "How do you write 100 in words?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["one hundred", "one hundreds", "a hundreds", "one-hundred"],
        answer: "one hundred"
    },
    {
        question: "How do you write 1,000 in words?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "one thousand",
        tolerance: 2
    },
    {
        question: "How many zeros are in one million?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "six",
        tolerance: 1
    },
    {
        question: "Write the number 101 in words.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "one hundred and one",
        tolerance: 3
    },
    {
        question: "Write the number 250 in words.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "two hundred and fifty",
        tolerance: 3
    },
    {
        question: "Complete the phrase: 'There were ___ of people at the concert.'",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "hundreds",
        tolerance: 2
    },
    {
        question: "Write the number 5,000 in words.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "five thousand",
        tolerance: 2
    },
    {
        question: "What number is 'three hundred'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "300",
        tolerance: 0
    },
    {
        question: "Write the number 1,100 in words.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "one thousand one hundred",
        tolerance: 3
    },
    {
        question: "Which word connects the hundreds to the tens and ones in British English (e.g., 125)?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "and",
        tolerance: 1
    },
    {
        question: "How many years are in two millennia?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "two thousand",
        tolerance: 2
    },
    {
        question: "Write the number 999 in words.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "nine hundred and ninety-nine",
        tolerance: 4
    },
    {
        question: "If you have 'thousands of' something, do you have a specific number?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["Yes", "No"],
        answer: "No"
    },
    {
        question: "What is two hundred times three?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "six hundred",
        tolerance: 2
    },
    {
        question: "Which is bigger: one thousand or one hundred?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "one thousand",
        tolerance: 2
    },

    // KATEGORIA: LICZEBNIKI PORZĄDKOWE
    {
        question: "What is the ordinal number for 1?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "first",
        tolerance: 1
    },
    {
        question: "What is the ordinal number for 2?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "second",
        tolerance: 1
    },
    {
        question: "What is the ordinal number for 3?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "third",
        tolerance: 1
    },
    {
        question: "If you finish a race after the first person, you are...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "second",
        tolerance: 1
    },
    {
        question: "What is the ordinal number for 5?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "fifth",
        tolerance: 1
    },
    {
        question: "What is the ordinal number for 12?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "twelfth",
        tolerance: 1
    },
    {
        question: "Write the ordinal number for 20.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "twentieth",
        tolerance: 2
    },
    {
        question: "What is the ordinal number for 21?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "twenty-first",
        tolerance: 2
    },
    {
        question: "Which letter comes fourth in the alphabet?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "D",
        tolerance: 0
    },
    {
        question: "What is the ordinal number for 9?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "ninth",
        tolerance: 1
    },
    {
        question: "If today is the tenth, what is tomorrow?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "the eleventh",
        tolerance: 2
    },
    {
        question: "What is the ordinal number for 30?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "thirtieth",
        tolerance: 2
    },
    {
        question: "How do you write 'the 100th' anniversary?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "the hundredth",
        tolerance: 2
    },
    {
        question: "Which floor is above the seventh floor?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "the eighth",
        tolerance: 2
    },
    {
        question: "What ordinal number comes after 'ninety-ninth'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "hundredth",
        tolerance: 2
    },

    // KATEGORIA: DATY, UŁAMKI I ZASTOSOWANIA
    {
        question: "How do you write the fraction 1/2 in words?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "a half",
        tolerance: 1
    },
    {
        question: "How do you write the fraction 1/4 in words?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "a quarter",
        tolerance: 2
    },
    {
        question: "How do you write the fraction 1/3 in words?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "one third",
        tolerance: 2
    },
    {
        question: "How do you write the date 'December 25th' in full?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "the twenty-fifth of December",
        tolerance: 4
    },
    {
        question: "What is the first month of the year?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "January",
        tolerance: 2
    },
    {
        question: "If you have three parts of a pizza that was cut into four, you have three-___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "quarters",
        tolerance: 2
    },
    {
        question: "What is the day after the 21st of May?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "the twenty-second of May",
        tolerance: 4
    },
    {
        question: "What is the ordinal number for 1,000,000?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "millionth",
        tolerance: 2
    },
    {
        question: "How do you write the fraction 2/5 in words?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "two fifths",
        tolerance: 2
    },
    {
        question: "In a race, if you are in third place and you overtake the person in second, what is your new position?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "second",
        tolerance: 1
    },
    // here we are
    [
        {
            question: "Which professional operates on teeth?",
            type: 'multiple-choice',
            options: ["doctor", "nurse", "dentist", "surgeon"],
            answer: "dentist"
        },
        {
            question: "A medical professional who cares for teeth.",
            type: 'open-ended',
            answer: "dentist",
            tolerance: 1
        },
        {
            question: "What do you call a professional who helps people improve their speaking ability?",
            type: 'open-ended',
            answer: "speech therapist",
            tolerance: 2
        },
        {
            question: "A professional who treats speech and language disorders.",
            type: 'open-ended',
            answer: "speech therapist",
            tolerance: 2
        },
        {
            question: "Which professional is a medical doctor specializing in the nervous system?",
            type: 'multiple-choice',
            options: ["psychiatrist", "neurologist", "cardiologist", "dermatologist"],
            answer: "neurologist"
        },
        {
            question: "What is a professional who specializes in heart problems called?",
            type: 'open-ended',
            answer: "cardiologist",
            tolerance: 1
        },
        {
            question: "A medical doctor specializing in the heart and its diseases.",
            type: 'open-ended',
            answer: "cardiologist",
            tolerance: 1
        },
        {
            question: "Which professional specializes in skin conditions?",
            type: 'multiple-choice',
            options: ["nephrologist", "dermatologist", "pulmonologist", "geriatrician"],
            answer: "dermatologist"
        },
        {
            question: "A medical doctor who specializes in diseases of the skin.",
            type: 'open-ended',
            answer: "dermatologist",
            tolerance: 1
        },
        {
            question: "What do you call a professional who specializes in diseases of the kidney?",
            type: 'open-ended',
            answer: "nephrologist",
            tolerance: 1
        },
        {
            question: "A medical doctor specializing in kidney diseases.",
            type: 'open-ended',
            answer: "nephrologist",
            tolerance: 1
        },
        {
            question: "Which professional specializes in diseases of the lungs?",
            type: 'multiple-choice',
            options: ["cardiologist", "pulmonologist", "endocrinologist", "neurologist"],
            answer: "pulmonologist"
        },
        {
            question: "A medical doctor specializing in diseases of the respiratory system.",
            type: 'open-ended',
            answer: "pulmonologist",
            tolerance: 1
        },
        {
            question: "What is a professional who specializes in hormone disorders called?",
            type: 'open-ended',
            answer: "endocrinologist",
            tolerance: 1
        },
        {
            question: "A medical doctor specializing in the endocrine system.",
            type: 'open-ended',
            answer: "endocrinologist",
            tolerance: 1
        },
        {
            question: "Which professional specializes in conditions of the eyes?",
            type: 'multiple-choice',
            options: ["optician", "optometrist", "ophthalmologist", "all of the above"],
            answer: "all of the above"
        },
        {
            question: "A medical doctor who specializes in eye diseases and surgery.",
            type: 'open-ended',
            answer: "ophthalmologist",
            tolerance: 1
        },
        {
            question: "What do you call a professional who tests vision and prescribes glasses or contact lenses?",
            type: 'open-ended',
            answer: "optometrist",
            tolerance: 1
        },
        {
            question: "A professional who fits and sells eyeglasses and contact lenses.",
            type: 'open-ended',
            answer: "optician",
            tolerance: 1
        },
        {
            question: "Which professional specializes in foot problems?",
            type: 'multiple-choice',
            options: ["chiropractor", "physiotherapist", "podiatrist", "osteopath"],
            answer: "podiatrist"
        },
        {
            question: "A medical professional who treats disorders of the foot and ankle.",
            type: 'open-ended',
            answer: "podiatrist",
            tolerance: 1
        },
        {
            question: "What is a professional who treats back and joint pain by manipulating the spine called?",
            type: 'open-ended',
            answer: "chiropractor",
            tolerance: 1
        },
        {
            question: "A professional who treats mechanical problems of the body by manipulating the spine.",
            type: 'open-ended',
            answer: "chiropractor",
            tolerance: 1
        },
        {
            question: "Which professional specializes in muscle and joint pain using massage and manipulation?",
            type: 'multiple-choice',
            options: ["chiropractor", "physiotherapist", "osteopath", "massage therapist"],
            answer: "osteopath"
        },
        {
            question: "A professional who treats conditions by manipulating bones and muscles.",
            type: 'open-ended',
            answer: "osteopath",
            tolerance: 1
        },
        {
            question: "What do you call a professional who gives massages?",
            type: 'open-ended',
            answer: "massage therapist",
            tolerance: 2
        },
        {
            question: "A person whose job is to give massages professionally.",
            type: 'open-ended',
            answer: "massage therapist",
            tolerance: 2
        },
        {
            question: "Which professional works with data to analyze and interpret it?",
            type: 'multiple-choice',
            options: ["programmer", "developer", "data scientist", "system administrator"],
            answer: "data scientist"
        },
        {
            question: "A professional who analyzes and interprets complex data.",
            type: 'open-ended',
            answer: "data scientist",
            tolerance: 2
        },
        {
            question: "What is a professional who creates and manages databases called?",
            type: 'open-ended',
            answer: "database administrator",
            tolerance: 2
        },
        {
            question: "A person whose job is to manage and maintain databases.",
            type: 'open-ended',
            answer: "database administrator",
            tolerance: 2
        },
        {
            question: "Which professional writes code for websites?",
            type: 'multiple-choice',
            options: ["web designer", "graphic designer", "web developer", "UX designer"],
            answer: "web developer"
        },
        {
            question: "A person who writes and maintains the code for websites.",
            type: 'open-ended',
            answer: "web developer",
            tolerance: 2
        },
        {
            question: "What do you call a professional who focuses on the user's experience with a product or service?",
            type: 'open-ended',
            answer: "UX designer",
            tolerance: 2
        },
        {
            question: "A professional who designs how a user interacts with a product.",
            type: 'open-ended',
            answer: "UX designer",
            tolerance: 2
        },
        {
            question: "Which professional creates visual designs for interfaces?",
            type: 'multiple-choice',
            options: ["graphic designer", "UX designer", "UI designer", "web developer"],
            answer: "UI designer"
        },
        {
            question: "A person who designs the visual aspects of user interfaces for software or websites.",
            type: 'open-ended',
            answer: "UI designer",
            tolerance: 2
        },
        {
            question: "What is a professional who designs logos and branding called?",
            type: 'open-ended',
            answer: "graphic designer",
            tolerance: 2
        },
        {
            question: "A professional who creates visual concepts for branding and marketing.",
            type: 'open-ended',
            answer: "graphic designer",
            tolerance: 2
        },
        {
            question: "Which professional writes content for marketing purposes?",
            type: 'multiple-choice',
            options: ["journalist", "editor", "copywriter", "content writer"],
            answer: "copywriter"
        },
        {
            question: "A person who writes text for advertising and marketing.",
            type: 'open-ended',
            answer: "copywriter",
            tolerance: 1
        },
        {
            question: "What do you call a professional who manages a company's social media presence?",
            type: 'open-ended',
            answer: "social media manager",
            tolerance: 3
        },
        {
            question: "A professional who plans and executes social media strategies.",
            type: 'open-ended',
            answer: "social media manager",
            tolerance: 3
        },
        {
            question: "Which professional works in public relations?",
            type: 'multiple-choice',
            options: ["marketing specialist", "advertiser", "publicist", "sales representative"],
            answer: "publicist"
        },
        {
            question: "A person whose job is to create a positive public image for someone or something.",
            type: 'open-ended',
            answer: "publicist",
            tolerance: 1
        },
        {
            question: "What is a professional who writes press releases called?",
            type: 'open-ended',
            answer: "publicist",
            tolerance: 1
        },
        {
            question: "A professional who works in marketing, developing strategies.",
            type: 'open-ended',
            answer: "marketing strategist",
            tolerance: 2
        },
        {
            question: "Which professional manages a company's brand?",
            type: 'multiple-choice',
            options: ["marketing specialist", "advertising executive", "brand manager", "product manager"],
            answer: "brand manager"
        },
        {
            question: "A person responsible for managing the image and perception of a brand.",
            type: 'open-ended',
            answer: "brand manager",
            tolerance: 2
        },
        {
            question: "What do you call a professional who manages the development and marketing of a product?",
            type: 'open-ended',
            answer: "product manager",
            tolerance: 2
        },
        {
            question: "A professional who oversees the lifecycle of a product.",
            type: 'open-ended',
            answer: "product manager",
            tolerance: 2
        },
        {
            question: "Which professional works in sales, managing a team?",
            type: 'multiple-choice',
            options: ["salesperson", "account manager", "sales manager", "marketing manager"],
            answer: "sales manager"
        },
        {
            question: "A person who leads and motivates a sales team.",
            type: 'open-ended',
            answer: "sales manager",
            tolerance: 2
        },
        {
            question: "What is a professional who trains sales staff called?",
            type: 'open-ended',
            answer: "sales trainer",
            tolerance: 2
        },
        {
            question: "A professional who deals with customer accounts after a sale is made.",
            type: 'open-ended',
            answer: "account manager",
            tolerance: 2
        },
        {
            question: "Which professional works in a retail store, selling goods?",
            type: 'multiple-choice',
            options: ["cashier", "stockbroker", "sales assistant", "buyer"],
            answer: "sales assistant"
        },
        {
            question: "A person who assists customers and sells goods in a shop.",
            type: 'open-ended',
            answer: "sales assistant",
            tolerance: 2
        },
        {
            question: "What do you call a professional who operates a cash register and handles payments?",
            type: 'open-ended',
            answer: "cashier",
            tolerance: 1
        },
        {
            question: "A person who handles money transactions in a store.",
            type: 'open-ended',
            answer: "cashier",
            tolerance: 1
        },
        {
            question: "Which professional is responsible for purchasing goods for a store?",
            type: 'multiple-choice',
            options: ["sales manager", "buyer", "retail manager", "merchandiser"],
            answer: "buyer"
        },
        {
            question: "A person who buys goods for a business.",
            type: 'open-ended',
            answer: "buyer",
            tolerance: 1
        },
        {
            question: "What is a professional who plans the display of goods in a store called?",
            type: 'open-ended',
            answer: "merchandiser",
            tolerance: 1
        },
        {
            question: "A person who arranges goods in a store to make them look attractive.",
            type: 'open-ended',
            answer: "merchandiser",
            tolerance: 1
        },
        {
            question: "Which professional manages a retail store?",
            type: 'multiple-choice',
            options: ["sales manager", "buyer", "retail manager", "district manager"],
            answer: "retail manager"
        },
        {
            question: "A person who is in charge of running a retail store.",
            type: 'open-ended',
            answer: "retail manager",
            tolerance: 2
        },
        {
            question: "What do you call a professional who manages multiple retail stores in a region?",
            type: 'open-ended',
            answer: "district manager",
            tolerance: 2
        },
        {
            question: "A professional who manages a specific department within a large store.",
            type: 'open-ended',
            answer: "department manager",
            tolerance: 2
        },
        {
            question: "Which professional works in a bank, assisting customers with transactions?",
            type: 'multiple-choice',
            options: ["accountant", "financial advisor", "bank teller", "branch manager"],
            answer: "bank teller"
        },
        {
            question: "A person who serves customers at the counter in a bank.",
            type: 'open-ended',
            answer: "bank teller",
            tolerance: 2
        },
        {
            question: "What is a professional who manages a specific branch of a bank called?",
            type: 'open-ended',
            answer: "branch manager",
            tolerance: 2
        },
        {
            question: "A professional who provides financial advice to individuals or companies.",
            type: 'open-ended',
            answer: "financial consultant",
            tolerance: 2
        },
        {
            question: "Which professional works in accounting, often checking records?",
            type: 'multiple-choice',
            options: ["financial analyst", "treasurer", "auditor", "bookkeeper"],
            answer: "auditor"
        },
        {
            question: "A person who examines the financial records of a company.",
            type: 'open-ended',
            answer: "auditor",
            tolerance: 1
        },
        {
            question: "What do you call a professional who keeps track of a company's daily financial transactions?",
            type: 'open-ended',
            answer: "bookkeeper",
            tolerance: 1
        },
        {
            question: "A professional whose job is to maintain financial records.",
            type: 'open-ended',
            answer: "bookkeeper",
            tolerance: 1
        },
        {
            question: "Which professional is responsible for managing a company's overall finances?",
            type: 'multiple-choice',
            options: ["accountant", "auditor", "financial manager", "treasurer"],
            answer: "financial manager"
        },
        {
            question: "A person responsible for the financial health of a company.",
            type: 'open-ended',
            answer: "financial manager",
            tolerance: 2
        },
        {
            question: "What is a professional who manages a company's cash and investments called?",
            type: 'open-ended',
            answer: "treasurer",
            tolerance: 1
        },
        {
            question: "A person whose job is to look after a company's money.",
            type: 'open-ended',
            answer: "treasurer",
            tolerance: 1
        },
        {
            question: "Which professional is an expert in economics?",
            type: 'multiple-choice',
            options: ["accountant", "statistician", "economist", "analyst"],
            answer: "economist"
        },
        {
            question: "A person who studies economics.",
            type: 'open-ended',
            answer: "economist",
            tolerance: 1
        },
        {
            question: "What do you call a professional who studies and applies statistics?",
            type: 'open-ended',
            answer: "statistician",
            tolerance: 1
        },
        {
            question: "A professional who collects and analyzes numerical data.",
            type: 'open-ended',
            answer: "statistician",
            tolerance: 1
        },
        {
            question: "Which professional calculates financial risks, especially for insurance?",
            type: 'multiple-choice',
            options: ["accountant", "economist", "actuary", "auditor"],
            answer: "actuary"
        },
        {
            question: "A professional who calculates risks for financial planning purposes.",
            type: 'open-ended',
            answer: "actuary",
            tolerance: 1
        },
        {
            question: "What is a professional who specializes in cybersecurity called?",
            type: 'open-ended',
            answer: "cybersecurity expert",
            tolerance: 2
        },
        {
            question: "A professional who protects computer systems and networks from cyberattacks.",
            type: 'open-ended',
            answer: "cybersecurity expert",
            tolerance: 2
        },
        {
            question: "Which professional investigates computer crimes?",
            type: 'multiple-choice',
            options: ["IT technician", "system administrator", "cyber forensic analyst", "programmer"],
            answer: "cyber forensic analyst"
        },
        {
            question: "A professional who investigates crimes involving computers.",
            type: 'open-ended',
            answer: "cyber forensic analyst",
            tolerance: 3
        },
        {
            question: "What do you call a professional who provides technical support?",
            type: 'open-ended',
            answer: "IT support technician",
            tolerance: 3
        },
        {
            question: "A person whose job is to help people with their computer problems.",
            type: 'open-ended',
            answer: "IT support technician",
            tolerance: 3
        },
        {
            question: "Which professional trains people to use computers or software?",
            type: 'multiple-choice',
            options: ["programmer", "developer", "IT trainer", "technician"],
            answer: "IT trainer"
        },
        {
            question: "A professional who teaches people about computers or software.",
            type: 'open-ended',
            answer: "IT trainer",
            tolerance: 2
        },
        {
            question: "What is a professional who writes technical documents, such as manuals?",
            type: 'open-ended',
            answer: "technical writer",
            tolerance: 2
        },
        {
            question: "A person whose job is to write technical information clearly.",
            type: 'open-ended',
            answer: "technical writer",
            tolerance: 2
        },
        {
            question: "Which professional works on the technical side of theatre or film production?",
            type: 'multiple-choice',
            options: ["director", "producer", "technician", "performer"],
            answer: "technician"
        },
        {
            question: "A person skilled in the technical aspects of a production.",
            type: 'open-ended',
            answer: "technician",
            tolerance: 1
        },
        {
            question: "What do you call a professional who manages the technical crew on a film set?",
            type: 'open-ended',
            answer: "technical director",
            tolerance: 2
        },
        {
            question: "A professional responsible for the technical aspects of a stage production.",
            type: 'open-ended',
            answer: "technical director",
            tolerance: 2
        },
        {
            question: "Which professional designs the sets and scenery for a production?",
            type: 'multiple-choice',
            options: ["costume designer", "lighting designer", "set designer", "art director"],
            answer: "set designer"
        },
        {
            question: "A person whose job is to design the physical environment for a play or film.",
            type: 'open-ended',
            answer: "set designer",
            tolerance: 2
        },
        {
            question: "What is the person responsible for the visual style and images in a film or TV show called?",
            type: 'open-ended',
            answer: "art director",
            tolerance: 2
        },
        {
            question: "A professional who oversees the artistic aspects of a film or production.",
            type: 'open-ended',
            answer: "art director",
            tolerance: 2
        },
        {
            question: "Which professional specializes in designing costumes for performances?",
            type: 'multiple-choice',
            options: ["fashion designer", "stylist", "costume designer", "wardrobe supervisor"],
            answer: "costume designer"
        },
        {
            question: "A person who designs or makes costumes for theatre, film, or dance.",
            type: 'open-ended',
            answer: "costume designer",
            tolerance: 2
        },
        {
            question: "What do you call the person who manages the costumes during a production?",
            type: 'open-ended',
            answer: "wardrobe supervisor",
            tolerance: 2
        },
        {
            question: "A professional who applies makeup for film, theatre, or fashion.",
            type: 'open-ended',
            answer: "makeup artist",
            tolerance: 2
        },
        {
            question: "Which professional works with hair for film, theatre, or fashion?",
            type: 'multiple-choice',
            options: ["hairdresser", "stylist", "hair artist", "wig maker"],
            answer: "hair artist"
        },
        {
            question: "A person whose job is to style or create hair for performances or shoots.",
            type: 'open-ended',
            answer: "hair artist",
            tolerance: 1
        },
        {
            question: "What is a professional who makes wigs called?",
            type: 'open-ended',
            answer: "wig maker",
            tolerance: 2
        },
        {
            question: "A professional who designs and applies prosthetic makeup.",
            type: 'open-ended',
            answer: "prosthetic makeup artist",
            tolerance: 3
        },
        {
            question: "Which professional designs the sound for a film or theatre production?",
            type: 'multiple-choice',
            options: ["sound engineer", "sound mixer", "sound designer", "composer"],
            answer: "sound designer"
        },
        {
            question: "A person who creates and designs the sound effects and overall soundscape for a film or play.",
            type: 'open-ended',
            answer: "sound designer",
            tolerance: 2
        },
        {
            question: "What do you call a professional who records sound on set?",
            type: 'open-ended',
            answer: "production sound mixer",
            tolerance: 3
        },
        {
            question: "A professional who operates the microphone boom.",
            type: 'open-ended',
            answer: "boom operator",
            tolerance: 2
        },
        {
            question: "Which professional specializes in visual effects using computers?",
            type: 'multiple-choice',
            options: ["animator", "graphic designer", "VFX artist", "editor"],
            answer: "VFX artist"
        },
        {
            question: "A person who creates visual effects using computer-generated imagery (CGI).",
            type: 'open-ended',
            answer: "VFX artist",
            tolerance: 2
        },
        {
            question: "What is a professional who creates animated sequences called?",
            type: 'open-ended',
            answer: "animator",
            tolerance: 1
        },
        {
            question: "A person who creates animation for films, TV, or games.",
            type: 'open-ended',
            answer: "animator",
            tolerance: 1
        },
        {
            question: "Which professional creates music for films or television?",
            type: 'multiple-choice',
            options: ["composer", "musician", "film composer", "sound designer"],
            answer: "film composer"
        },
        {
            question: "A professional who writes music for motion pictures or television shows.",
            type: 'open-ended',
            answer: "film composer",
            tolerance: 2
        },
        {
            question: "What do you call a professional who sings in an opera?",
            type: 'open-ended',
            answer: "opera singer",
            tolerance: 2
        },
        {
            question: "A professional vocalist who performs in operas.",
            type: 'open-ended',
            answer: "opera singer",
            tolerance: 2
        },
        {
            question: "Which professional plays a musical instrument, usually in an orchestra?",
            type: 'multiple-choice',
            options: ["conductor", "composer", "orchestra musician", "soloist"],
            answer: "orchestra musician"
        },
        {
            question: "A musician who performs as part of an orchestra.",
            type: 'open-ended',
            answer: "orchestra musician",
            tolerance: 2
        },
        {
            question: "What is a professional musician who performs alone called?",
            type: 'open-ended',
            answer: "soloist",
            tolerance: 1
        },
        {
            question: "A professional who performs alone, usually playing an instrument or singing.",
            type: 'open-ended',
            answer: "soloist",
            tolerance: 1
        },
        {
            question: "Which professional makes or repairs musical instruments?",
            type: 'multiple-choice',
            options: ["musician", "composer", "luthier", "instrumentalist"],
            answer: "luthier"
        },
        {
            question: "A professional who makes or repairs stringed instruments, such as violins or guitars.",
            type: 'open-ended',
            answer: "luthier",
            tolerance: 1
        },
        {
            question: "What do you call a professional who tunes pianos?",
            type: 'open-ended',
            answer: "piano tuner",
            tolerance: 2
        },
        {
            question: "A person whose job is to tune pianos.",
            type: 'open-ended',
            answer: "piano tuner",
            tolerance: 2
        },
        {
            question: "Which professional creates and leads dance performances?",
            type: 'multiple-choice',
            options: ["dancer", "singer", "choreographer", "director"],
            answer: "choreographer"
        },
        {
            question: "A person who creates and stages dances.",
            type: 'open-ended',
            answer: "choreographer",
            tolerance: 1
        },
        {
            question: "What is a professional who performs gymnastic feats called?",
            type: 'open-ended',
            answer: "acrobat",
            tolerance: 1
        },
        {
            question: "A person who performs acrobatic acts.",
            type: 'open-ended',
            answer: "acrobat",
            tolerance: 1
        },
        {
            question: "Which professional works in a circus making people laugh?",
            type: 'multiple-choice',
            options: ["acrobat", "performer", "clown", "ringmaster"],
            answer: "clown"
        },
        {
            question: "A comic performer, typically in a circus, who wears a funny costume and makeup.",
            type: 'open-ended',
            answer: "clown",
            tolerance: 1
        },
        {
            question: "What do you call the professional who introduces performers in a circus?",
            type: 'open-ended',
            answer: "ringmaster",
            tolerance: 1
        },
        {
            question: "The person in charge of a circus performance.",
            type: 'open-ended',
            answer: "ringmaster",
            tolerance: 1
        },
        {
            question: "Which professional designs parks and outdoor spaces?",
            type: 'multiple-choice',
            options: ["gardener", "botanist", "landscape architect", "forester"],
            answer: "landscape architect"
        },
        {
            question: "A professional who designs outdoor areas, such as parks and gardens.",
            type: 'open-ended',
            answer: "landscape architect",
            tolerance: 2
        },
        {
            question: "What is a professional who manages forests called?",
            type: 'open-ended',
            answer: "forester",
            tolerance: 1
        },
        {
            question: "A person responsible for the management and conservation of forests.",
            type: 'open-ended',
            answer: "forester",
            tolerance: 1
        },
        {
            question: "Which professional works cutting down trees?",
            type: 'multiple-choice',
            options: ["forester", "gardener", "logger", "landscaper"],
            answer: "logger"
        },
        {
            question: "A person whose job is to cut down trees for timber.",
            type: 'open-ended',
            answer: "logger",
            tolerance: 1
        },
        {
            question: "What do you call a professional who works with leather to make things?",
            type: 'open-ended',
            answer: "leatherworker",
            tolerance: 1
        },
        {
            question: "A person who makes or repairs things made of leather.",
            type: 'open-ended',
            answer: "leatherworker",
            tolerance: 1
        },
        {
            question: "Which professional makes or repairs shoes?",
            type: 'multiple-choice',
            options: ["tailor", "leatherworker", "shoemaker", "seamstress"],
            answer: "shoemaker"
        },
        {
            question: "A person whose job is to make or repair shoes.",
            type: 'open-ended',
            answer: "shoemaker",
            tolerance: 1
        },
        {
            question: "What is a professional who only repairs shoes called?",
            type: 'open-ended',
            answer: "cobbler",
            tolerance: 1
        },
        {
            question: "A professional who repairs shoes.",
            type: 'open-ended',
            answer: "cobbler",
            tolerance: 1
        },
        {
            question: "Which professional works with textiles, sewing clothes?",
            type: 'multiple-choice',
            options: ["fashion designer", "stylist", "seamstress", "pattern maker"],
            answer: "seamstress"
        },
        {
            question: "A woman whose job is to sew clothes, often for others.",
            type: 'open-ended',
            answer: "seamstress",
            tolerance: 1
        },
        {
            question: "What do you call a professional who designs clothing patterns?",
            type: 'open-ended',
            answer: "pattern maker",
            tolerance: 2
        },
        {
            question: "A professional who creates patterns for garments.",
            type: 'open-ended',
            answer: "pattern maker",
            tolerance: 2
        },
        {
            question: "Which professional cleans buildings or offices?",
            type: 'multiple-choice',
            options: ["janitor", "caretaker", "cleaner", "housekeeper"],
            answer: "cleaner"
        },
        {
            question: "A person whose job is to clean places.",
            type: 'open-ended',
            answer: "cleaner",
            tolerance: 1
        },
        {
            question: "What is a professional who cleans windows called?",
            type: 'open-ended',
            answer: "window cleaner",
            tolerance: 2
        },
        {
            question: "A person whose job is to clean windows.",
            type: 'open-ended',
            answer: "window cleaner",
            tolerance: 2
        },
        {
            question: "Which professional maintains buildings and grounds?",
            type: 'multiple-choice',
            options: ["cleaner", "janitor", "maintenance worker", "handyman"],
            answer: "maintenance worker"
        },
        {
            question: "A person whose job is to maintain and repair buildings and equipment.",
            type: 'open-ended',
            answer: "maintenance worker",
            tolerance: 2
        },
        {
            question: "What do you call a professional who provides basic repairs in a home?",
            type: 'open-ended',
            answer: "handyman",
            tolerance: 1
        },
        {
            question: "A person skilled in a range of household repairs.",
            type: 'open-ended',
            answer: "handyman",
            tolerance: 1
        },
        {
            question: "Which professional cleans streets?",
            type: 'multiple-choice',
            options: ["janitor", "waste collector", "street sweeper", "cleaner"],
            answer: "street sweeper"
        },
        {
            question: "A person whose job is to sweep streets.",
            type: 'open-ended',
            answer: "street sweeper",
            tolerance: 2
        },
        {
            question: "What is a professional who collects waste called?",
            type: 'open-ended',
            answer: "waste collector",
            tolerance: 2
        },
        {
            question: "A person whose job is to collect rubbish.",
            type: 'open-ended',
            answer: "waste collector",
            tolerance: 2
        },
        {
            question: "Which professional manages and operates a warehouse?",
            type: 'multiple-choice',
            options: ["packer", "forklift operator", "warehouse manager", "logistics manager"],
            answer: "warehouse manager"
        },
        {
            question: "A person responsible for the operations of a warehouse.",
            type: 'open-ended',
            answer: "warehouse manager",
            tolerance: 2
        },
        {
            question: "What do you call a professional who operates a forklift in a warehouse?",
            type: 'open-ended',
            answer: "forklift operator",
            tolerance: 2
        },
        {
            question: "A professional who drives a forklift.",
            type: 'open-ended',
            answer: "forklift operator",
            tolerance: 2
        },
        {
            question: "Which professional plans and manages the movement of goods?",
            type: 'multiple-choice',
            options: ["warehouse manager", "buyer", "logistics manager", "supply chain manager"],
            answer: "logistics manager"
        },
        {
            question: "A professional who manages the transportation and storage of goods.",
            type: 'open-ended',
            answer: "logistics manager",
            tolerance: 2
        },
        {
            question: "What is a professional who oversees the entire process of getting a product from raw materials to the customer called?",
            type: 'open-ended',
            answer: "supply chain manager",
            tolerance: 2
        },
        {
            question: "A person responsible for managing the supply chain.",
            type: 'open-ended',
            answer: "supply chain manager",
            tolerance: 2
        },
        {
            question: "Which professional works on construction sites, performing physical labour?",
            type: 'multiple-choice',
            options: ["architect", "engineer", "labourer", "foreman"],
            answer: "labourer"
        },
        {
            question: "A worker who does manual labour, especially on a construction site.",
            type: 'open-ended',
            answer: "labourer",
            tolerance: 1
        },
        {
            question: "What do you call a professional who supervises workers on a construction site?",
            type: 'open-ended',
            answer: "foreman",
            tolerance: 1
        },
        {
            question: "A person who is in charge of a group of workers.",
            type: 'open-ended',
            answer: "foreman",
            tolerance: 1
        },
        {
            question: "Which professional works with concrete on a construction site?",
            type: 'multiple-choice',
            options: ["bricklayer", "mason", "concreter", "plasterer"],
            answer: "concreter"
        },
        {
            question: "A person who works with concrete.",
            type: 'open-ended',
            answer: "concreter",
            tolerance: 1
        },
        {
            question: "What is a professional who installs different types of flooring called?",
            type: 'open-ended',
            answer: "flooring installer",
            tolerance: 2
        },
        {
            question: "A person whose job is to lay floor coverings.",
            type: 'open-ended',
            answer: "flooring installer",
            tolerance: 2
        },
        {
            question: "Which professional installs tiles?",
            type: 'multiple-choice',
            options: ["mason", "plasterer", "tiler", "painter"],
            answer: "tiler"
        },
        {
            question: "A person who lays tiles, especially on walls or floors.",
            type: 'open-ended',
            answer: "tiler",
            tolerance: 1
        },
        {
            question: "What do you call a professional who works with wood to build parts of buildings or furniture?",
            type: 'open-ended',
            answer: "carpenter",
            tolerance: 1
        },
        {
            question: "A person who builds or repairs wooden structures or furniture.",
            type: 'open-ended',
            answer: "carpenter",
            tolerance: 1
        },
        {
            question: "Which professional joins pieces of wood together?",
            type: 'multiple-choice',
            options: ["carpenter", "woodcarver", "joiner", "cabinetmaker"],
            answer: "joiner"
        },
        {
            question: "A skilled worker who joins pieces of wood, especially in making furniture or window frames.",
            type: 'open-ended',
            answer: "joiner",
            tolerance: 1
        },
        {
            question: "What is a professional who makes wooden cabinets called?",
            type: 'open-ended',
            answer: "cabinetmaker",
            tolerance: 1
        },
        {
            question: "A person whose job is to make wooden cabinets and furniture.",
            type: 'open-ended',
            answer: "cabinetmaker",
            tolerance: 1
        },
        {
            question: "Which professional carves wood, often decoratively?",
            type: 'multiple-choice',
            options: ["carpenter", "joiner", "woodcarver", "sculptor"],
            answer: "woodcarver"
        },
        {
            question: "A person who carves objects or designs from wood.",
            type: 'open-ended',
            answer: "woodcarver",
            tolerance: 1
        },
        {
            question: "What do you call a professional who works with stone, shaping or carving it?",
            type: 'open-ended',
            answer: "stonemason",
            tolerance: 1
        },
        {
            question: "A skilled worker who builds or repairs things made of stone.",
            type: 'open-ended',
            answer: "stonemason",
            tolerance: 1
        },
        {
            question: "Which professional makes or repairs roofs?",
            type: 'multiple-choice',
            options: ["builder", "mason", "roofer", "carpenter"],
            answer: "roofer"
        },
        {
            question: "A person whose job is to build or repair roofs.",
            type: 'open-ended',
            answer: "roofer",
            tolerance: 1
        },
        {
            question: "What is a professional who applies paint to walls and ceilings called?",
            type: 'open-ended',
            answer: "painter",
            tolerance: 1
        },
        {
            question: "A person whose job is to apply paint to surfaces.",
            type: 'open-ended',
            answer: "painter",
            tolerance: 1
        },
        {
            question: "Which professional installs and repairs heating and cooling systems?",
            type: 'multiple-choice',
            options: ["plumber", "electrician", "HVAC technician", "pipefitter"],
            answer: "HVAC technician"
        },
        {
            question: "A professional who works with heating, ventilation, and air conditioning systems.",
            type: 'open-ended',
            answer: "HVAC technician",
            tolerance: 2
        },
        {
            question: "What do you call a professional who assembles pipes?",
            type: 'open-ended',
            answer: "pipefitter",
            tolerance: 1
        },
        {
            question: "A skilled worker who installs or repairs piping systems.",
            type: 'open-ended',
            answer: "pipefitter",
            tolerance: 1
        },
        {
            question: "Which professional works with metals, joining them together?",
            type: 'multiple-choice',
            options: ["blacksmith", "metalworker", "welder", "engineer"],
            answer: "welder"
        },
        {
            question: "A person whose job is to join pieces of metal using heat.",
            type: 'open-ended',
            answer: "welder",
            tolerance: 1
        },
        {
            question: "What is a professional who makes or repairs things out of metal called?",
            type: 'open-ended',
            answer: "metalworker",
            tolerance: 1
        },
        {
            question: "A person who works with metal.",
            type: 'open-ended',
            answer: "metalworker",
            tolerance: 1
        },
        -------------------------------------
        // here we are
        {
            question: "Which professional cleans streets?",
            type: 'multiple-choice',
            options: ["janitor", "waste collector", "street sweeper", "cleaner"],
            answer: "street sweeper"
        },
        {
            question: "A person whose job is to sweep streets.",
            type: 'open-ended',
            answer: "street sweeper",
            tolerance: 2
        },
        {
            question: "What do you call a professional who collects waste?",
            type: 'open-ended',
            answer: "waste collector",
            tolerance: 2
        },
        {
            question: "A person whose job is to collect rubbish.",
            type: 'open-ended',
            answer: "waste collector",
            tolerance: 2
        },
        {
            question: "Which professional works in a warehouse, managing stock?",
            type: 'multiple-choice',
            options: ["packer", "forklift operator", "warehouse manager", "logistics manager"],
            answer: "warehouse manager"
        },
        {
            question: "A person responsible for the operations of a warehouse.",
            type: 'open-ended',
            answer: "warehouse manager",
            tolerance: 2
        },
        {
            question: "What do you call a professional who operates a forklift in a warehouse?",
            type: 'open-ended',
            answer: "forklift operator",
            tolerance: 2
        },
        {
            question: "A professional who drives a forklift.",
            type: 'open-ended',
            answer: "forklift operator",
            tolerance: 2
        },
        {
            question: "Which professional plans and manages the movement of goods?",
            type: 'multiple-choice',
            options: ["warehouse manager", "buyer", "logistics manager", "supply chain manager"],
            answer: "logistics manager"
        },
        {
            question: "A professional who manages the transportation and storage of goods.",
            type: 'open-ended',
            answer: "logistics manager",
            tolerance: 2
        },
        {
            question: "What is a professional who oversees the entire process of getting a product from raw materials to the customer called?",
            type: 'open-ended',
            answer: "supply chain manager",
            tolerance: 2
        },
        {
            question: "A person responsible for managing the supply chain.",
            type: 'open-ended',
            answer: "supply chain manager",
            tolerance: 2
        },
        {
            question: "Which professional works on construction sites, performing physical labour?",
            type: 'multiple-choice',
            options: ["architect", "engineer", "labourer", "foreman"],
            answer: "labourer"
        },
        {
            question: "A worker who does manual labour, especially on a construction site.",
            type: 'open-ended',
            answer: "labourer",
            tolerance: 1
        },
        {
            question: "What do you call a professional who supervises workers on a construction site?",
            type: 'open-ended',
            answer: "foreman",
            tolerance: 1
        },
        {
            question: "A person who is in charge of a group of workers.",
            type: 'open-ended',
            answer: "foreman",
            tolerance: 1
        },
        {
            question: "Which professional works with concrete on a construction site?",
            type: 'multiple-choice',
            options: ["bricklayer", "mason", "concreter", "plasterer"],
            answer: "concreter"
        },
        {
            question: "A person who works with concrete.",
            type: 'open-ended',
            answer: "concreter",
            tolerance: 1
        },
        {
            question: "What is a professional who installs different types of flooring called?",
            type: 'open-ended',
            answer: "flooring installer",
            tolerance: 2
        },
        {
            question: "A person whose job is to lay floor coverings.",
            type: 'open-ended',
            answer: "flooring installer",
            tolerance: 2
        },
        {
            question: "Which professional installs tiles?",
            type: 'multiple-choice',
            options: ["mason", "plasterer", "tiler", "painter"],
            answer: "tiler"
        },
        {
            question: "A person who lays tiles, especially on walls or floors.",
            type: 'open-ended',
            answer: "tiler",
            tolerance: 1
        },
        {
            question: "What do you call a professional who works with wood to build parts of buildings or furniture?",
            type: 'open-ended',
            answer: "carpenter",
            tolerance: 1
        },
        {
            question: "A person who builds or repairs wooden structures or furniture.",
            type: 'open-ended',
            answer: "carpenter",
            tolerance: 1
        },
        {
            question: "Which professional joins pieces of wood together?",
            type: 'multiple-choice',
            options: ["carpenter", "woodcarver", "joiner", "cabinetmaker"],
            answer: "joiner"
        },
        {
            question: "A skilled worker who joins pieces of wood, especially in making furniture or window frames.",
            type: 'open-ended',
            answer: "joiner",
            tolerance: 1
        },
        {
            question: "What is a professional who makes wooden cabinets called?",
            type: 'open-ended',
            answer: "cabinetmaker",
            tolerance: 1
        },
        {
            question: "A person whose job is to make wooden cabinets and furniture.",
            type: 'open-ended',
            answer: "cabinetmaker",
            tolerance: 1
        },
        {
            question: "Which professional carves wood, often decoratively?",
            type: 'multiple-choice',
            options: ["carpenter", "joiner", "woodcarver", "sculptor"],
            answer: "woodcarver"
        },
        {
            question: "A person who carves objects or designs from wood.",
            type: 'open-ended',
            answer: "woodcarver",
            tolerance: 1
        },
        {
            question: "What do you call a professional who works with stone, shaping or carving it?",
            type: 'open-ended',
            answer: "stonemason",
            tolerance: 1
        },
        {
            question: "A skilled worker who builds or repairs things made of stone.",
            type: 'open-ended',
            answer: "stonemason",
            tolerance: 1
        },
        {
            question: "Which professional makes or repairs roofs?",
            type: 'multiple-choice',
            options: ["builder", "mason", "roofer", "carpenter"],
            answer: "roofer"
        },
        {
            question: "A person whose job is to build or repair roofs.",
            type: 'open-ended',
            answer: "roofer",
            tolerance: 1
        },
        {
            question: "What is a professional who applies paint to walls and ceilings called?",
            type: 'open-ended',
            answer: "painter",
            tolerance: 1
        },
        {
            question: "A person whose job is to apply paint to surfaces.",
            type: 'open-ended',
            answer: "painter",
            tolerance: 1
        },
        {
            question: "Which professional installs and repairs heating and cooling systems?",
            type: 'multiple-choice',
            options: ["plumber", "electrician", "HVAC technician", "pipefitter"],
            answer: "HVAC technician"
        },
        {
            question: "A professional who works with heating, ventilation, and air conditioning systems.",
            type: 'open-ended',
            answer: "HVAC technician",
            tolerance: 2
        },
        {
            question: "What do you call a professional who assembles pipes?",
            type: 'open-ended',
            answer: "pipefitter",
            tolerance: 1
        },
        {
            question: "A skilled worker who installs or repairs piping systems.",
            type: 'open-ended',
            answer: "pipefitter",
            tolerance: 1
        },
        {
            question: "Which professional works with metals, joining them together?",
            type: 'multiple-choice',
            options: ["blacksmith", "metalworker", "welder", "engineer"],
            answer: "welder"
        },
        {
            question: "A person whose job is to join pieces of metal using heat.",
            type: 'open-ended',
            answer: "welder",
            tolerance: 1
        },
        {
            question: "What is a professional who makes or repairs things out of metal called?",
            type: 'open-ended',
            answer: "metalworker",
            tolerance: 1
        },
        {
            question: "A person who works with metal.",
            type: 'open-ended',
            answer: "metalworker",
            tolerance: 1
        },
        {
            question: "Which professional cleans streets?",
            type: 'multiple-choice',
            options: ["janitor", "waste collector", "street sweeper", "cleaner"],
            answer: "street sweeper"
        },
        {
            question: "A person whose job is to sweep streets.",
            type: 'open-ended',
            answer: "street sweeper",
            tolerance: 2
        },
        {
            question: "What do you call a professional who collects waste?",
            type: 'open-ended',
            answer: "waste collector",
            tolerance: 2
        },
        {
            question: "A person whose job is to collect rubbish.",
            type: 'open-ended',
            answer: "waste collector",
            tolerance: 2
        },
        {
            question: "Which professional works in a warehouse, managing stock?",
            type: 'multiple-choice',
            options: ["packer", "forklift operator", "warehouse manager", "logistics manager"],
            answer: "warehouse manager"
        },
        {
            question: "A person responsible for the operations of a warehouse.",
            type: 'open-ended',
            answer: "warehouse manager",
            tolerance: 2
        },
        {
            question: "What do you call a professional who operates a forklift in a warehouse?",
            type: 'open-ended',
            answer: "forklift operator",
            tolerance: 2
        },
        {
            question: "A professional who drives a forklift.",
            type: 'open-ended',
            answer: "forklift operator",
            tolerance: 2
        },
        {
            question: "Which professional plans and manages the movement of goods?",
            type: 'multiple-choice',
            options: ["warehouse manager", "buyer", "logistics manager", "supply chain manager"],
            answer: "logistics manager"
        },
        {
            question: "A professional who manages the transportation and storage of goods.",
            type: 'open-ended',
            answer: "logistics manager",
            tolerance: 2
        },
        {
            question: "What is a professional who oversees the entire process of getting a product from raw materials to the customer called?",
            type: 'open-ended',
            answer: "supply chain manager",
            tolerance: 2
        },
        {
            question: "A person responsible for managing the supply chain.",
            type: 'open-ended',
            answer: "supply chain manager",
            tolerance: 2
        },
        {
            question: "Which professional works on construction sites, performing physical labour?",
            type: 'multiple-choice',
            options: ["architect", "engineer", "labourer", "foreman"],
            answer: "labourer"
        },
        {
            question: "A worker who does manual labour, especially on a construction site.",
            type: 'open-ended',
            answer: "labourer",
            tolerance: 1
        },
        {
            question: "What do you call a professional who supervises workers on a construction site?",
            type: 'open-ended',
            answer: "foreman",
            tolerance: 1
        },
        {
            question: "A person who is in charge of a group of workers.",
            type: 'open-ended',
            answer: "foreman",
            tolerance: 1
        },
        {
            question: "Which professional works with concrete on a construction site?",
            type: 'multiple-choice',
            options: ["bricklayer", "mason", "concreter", "plasterer"],
            answer: "concreter"
        },
        {
            question: "A person who works with concrete.",
            type: 'open-ended',
            answer: "concreter",
            tolerance: 1
        },
        {
            question: "What is a professional who installs different types of flooring called?",
            type: 'open-ended',
            answer: "flooring installer",
            tolerance: 2
        },
        {
            question: "A person whose job is to lay floor coverings.",
            type: 'open-ended',
            answer: "flooring installer",
            tolerance: 2
        },
        {
            question: "Which professional installs tiles?",
            type: 'multiple-choice',
            options: ["mason", "plasterer", "tiler", "painter"],
            answer: "tiler"
        },
        {
            question: "A person who lays tiles, especially on walls or floors.",
            type: 'open-ended',
            answer: "tiler",
            tolerance: 1
        },
        {
            question: "What do you call a professional who works with wood to build parts of buildings or furniture?",
            type: 'open-ended',
            answer: "carpenter",
            tolerance: 1
        },
        {
            question: "A person who builds or repairs wooden structures or furniture.",
            type: 'open-ended',
            answer: "carpenter",
            tolerance: 1
        },
        {
            question: "Which professional joins pieces of wood together?",
            type: 'multiple-choice',
            options: ["carpenter", "woodcarver", "joiner", "cabinetmaker"],
            answer: "joiner"
        },
        {
            question: "A skilled worker who joins pieces of wood, especially in making furniture or window frames.",
            type: 'open-ended',
            answer: "joiner",
            tolerance: 1
        },
        {
            question: "What is a professional who makes wooden cabinets called?",
            type: 'open-ended',
            answer: "cabinetmaker",
            tolerance: 1
        },
        {
            question: "A person whose job is to make wooden cabinets and furniture.",
            type: 'open-ended',
            answer: "cabinetmaker",
            tolerance: 1
        },
        {
            question: "Which professional carves wood, often decoratively?",
            type: 'multiple-choice',
            options: ["carpenter", "joiner", "woodcarver", "sculptor"],
            answer: "woodcarver"
        },
        {
            question: "A person who carves objects or designs from wood.",
            type: 'open-ended',
            answer: "woodcarver",
            tolerance: 1
        },
        {
            question: "What do you call a professional who works with stone, shaping or carving it?",
            type: 'open-ended',
            answer: "stonemason",
            tolerance: 1
        },
        {
            question: "A skilled worker who builds or repairs things made of stone.",
            type: 'open-ended',
            answer: "stonemason",
            tolerance: 1
        },
        {
            question: "Which professional makes or repairs roofs?",
            type: 'multiple-choice',
            options: ["builder", "mason", "roofer", "carpenter"],
            answer: "roofer"
        },
        {
            question: "A person whose job is to build or repair roofs.",
            type: 'open-ended',
            answer: "roofer",
            tolerance: 1
        },
        {
            question: "What is a professional who applies paint to walls and ceilings called?",
            type: 'open-ended',
            answer: "painter",
            tolerance: 1
        },
        {
            question: "A person whose job is to apply paint to surfaces.",
            type: 'open-ended',
            answer: "painter",
            tolerance: 1
        },
        {
            question: "Which professional installs and repairs heating and cooling systems?",
            type: 'multiple-choice',
            options: ["plumber", "electrician", "HVAC technician", "pipefitter"],
            answer: "HVAC technician"
        },
        {
            question: "A professional who works with heating, ventilation, and air conditioning systems.",
            type: 'open-ended',
            answer: "HVAC technician",
            tolerance: 2
        },
        {
            question: "What do you call a professional who assembles pipes?",
            type: 'open-ended',
            answer: "pipefitter",
            tolerance: 1
        },
        {
            question: "A skilled worker who installs or repairs piping systems.",
            type: 'open-ended',
            answer: "pipefitter",
            tolerance: 1
        },
        {
            question: "Which professional works with metals, joining them together?",
            type: 'multiple-choice',
            options: ["blacksmith", "metalworker", "welder", "engineer"],
            answer: "welder"
        },
        {
            question: "A person whose job is to join pieces of metal using heat.",
            type: 'open-ended',
            answer: "welder",
            tolerance: 1
        },
        {
            question: "What is a professional who makes or repairs things out of metal called?",
            type: 'open-ended',
            answer: "metalworker",
            tolerance: 1
        },
        {
            question: "A person who works with metal.",
            type: 'open-ended',
            answer: "metalworker",
            tolerance: 1
        },
        {
            question: "Which professional works in the field of genetics?",
            type: 'multiple-choice',
            options: ["biologist", "microbiologist", "geneticist", "anatomist"],
            answer: "geneticist"
        },
        {
            question: "A scientist who studies genes and heredity.",
            type: 'open-ended',
            answer: "geneticist",
            tolerance: 1
        },
        {
            question: "What do you call a professional who studies tiny living organisms?",
            type: 'open-ended',
            answer: "microbiologist",
            tolerance: 1
        },
        {
            question: "A scientist who specializes in the study of microorganisms.",
            type: 'open-ended',
            answer: "microbiologist",
            tolerance: 1
        },
        {
            question: "Which professional studies the chemistry of living things?",
            type: 'multiple-choice',
            options: ["chemist", "biologist", "biochemist", "pharmacist"],
            answer: "biochemist"
        },
        {
            question: "A scientist who studies the chemical processes within living organisms.",
            type: 'open-ended',
            answer: "biochemist",
            tolerance: 1
        },
        {
            question: "What is a professional who studies the physical functions of living organisms called?",
            type: 'open-ended',
            answer: "physiologist",
            tolerance: 1
        },
        {
            question: "A scientist who studies the functions of living organisms.",
            type: 'open-ended',
            answer: "physiologist",
            tolerance: 1
        },
        {
            question: "Which professional studies cells?",
            type: 'multiple-choice',
            options: ["biologist", "geneticist", "cytologist", "anatomist"],
            answer: "cytologist"
        },
        {
            question: "A scientist who specializes in the study of cells.",
            type: 'open-ended',
            answer: "cytologist",
            tolerance: 1
        },
        {
            question: "What do you call a professional who studies the structure of the body?",
            type: 'open-ended',
            answer: "anatomist",
            tolerance: 1
        },
        {
            question: "A scientist who studies the structure of the body.",
            type: 'open-ended',
            answer: "anatomist",
            tolerance: 1
        },
        {
            question: "Which professional studies animal behaviour?",
            type: 'multiple-choice',
            options: ["zoologist", "biologist", "ethologist", "veterinarian"],
            answer: "ethologist"
        },
        {
            question: "A scientist who specializes in the study of animal behaviour.",
            type: 'open-ended',
            answer: "ethologist",
            tolerance: 1
        },
        {
            question: "What do you call a professional who studies animal life?",
            type: 'open-ended',
            answer: "zoologist",
            tolerance: 1
        },
        {
            question: "A scientist who studies animals.",
            type: 'open-ended',
            answer: "zoologist",
            tolerance: 1
        },
        {
            question: "Which professional studies the environment and ecosystems?",
            type: 'multiple-choice',
            options: ["geologist", "botanist", "ecologist", "biologist"],
            answer: "ecologist"
        },
        {
            question: "A scientist who studies the relationships between living organisms and their environment.",
            type: 'open-ended',
            answer: "ecologist",
            tolerance: 1
        },
        {
            question: "What do you call a professional who studies fossils?",
            type: 'open-ended',
            answer: "paleontologist",
            tolerance: 1
        },
        {
            question: "A scientist who studies fossils.",
            type: 'open-ended',
            answer: "paleontologist",
            tolerance: 1
        },
        {
            question: "Which professional studies rocks and minerals?",
            type: 'multiple-choice',
            options: ["geographer", "archaeologist", "geologist", "meteorologist"],
            answer: "geologist"
        },
        {
            question: "A scientist who studies the Earth's rocks and structure.",
            type: 'open-ended',
            answer: "geologist",
            tolerance: 1
        },
        {
            question: "What is a professional who studies minerals called?",
            type: 'open-ended',
            answer: "mineralogist",
            tolerance: 1
        },
        {
            question: "A scientist who specializes in the study of minerals.",
            type: 'open-ended',
            answer: "mineralogist",
            tolerance: 1
        },
        {
            question: "Which professional studies the Earth's physical features and atmosphere?",
            type: 'multiple-choice',
            options: ["geologist", "oceanographer", "geophysicist", "meteorologist"],
            answer: "geophysicist"
        },
        {
            question: "A scientist who studies the Earth's physical properties.",
            type: 'open-ended',
            answer: "geophysicist",
            tolerance: 1
        },
        {
            question: "What do you call a professional who studies maps?",
            type: 'open-ended',
            answer: "cartographer",
            tolerance: 1
        },
        {
            question: "A person who makes maps.",
            type: 'open-ended',
            answer: "cartographer",
            tolerance: 1
        },
        {
            question: "Which professional studies ancient languages and texts?",
            type: 'multiple-choice',
            options: ["historian", "archaeologist", "linguist", "philologist"],
            answer: "philologist"
        },
        {
            question: "A scholar who specializes in the study of historical languages and texts.",
            type: 'open-ended',
            answer: "philologist",
            tolerance: 1
        },
        {
            question: "What is a professional who studies languages called?",
            type: 'open-ended',
            answer: "linguist",
            tolerance: 1
        },
        {
            question: "A scientist who studies language.",
            type: 'open-ended',
            answer: "linguist",
            tolerance: 1
        },
        {
            question: "Which professional specializes in ancient inscriptions?",
            type: 'multiple-choice',
            options: ["archaeologist", "historian", "epigraphist", "paleographer"],
            answer: "epigraphist"
        },
        {
            question: "A person who studies ancient inscriptions.",
            type: 'open-ended',
            answer: "epigraphist",
            tolerance: 1
        },
        {
            question: "What do you call a professional who studies ancient writing and scripts?",
            type: 'open-ended',
            answer: "paleographer",
            tolerance: 1
        },
        {
            question: "A scholar who studies ancient writing systems.",
            type: 'open-ended',
            answer: "paleographer",
            tolerance: 1
        },
        {
            question: "Which professional translates spoken words?",
            type: 'multiple-choice',
            options: ["translator", "linguist", "interpreter", "transcriber"],
            answer: "interpreter"
        },
        {
            question: "A person who translates spoken language in real-time.",
            type: 'open-ended',
            answer: "interpreter",
            tolerance: 1
        },
        {
            question: "What is a professional who translates written text called?",
            type: 'open-ended',
            answer: "translator",
            tolerance: 1
        },
        {
            question: "A person whose job is to translate written material from one language to another.",
            type: 'open-ended',
            answer: "translator",
            tolerance: 1
        },
        {
            question: "Which professional teaches at a university?",
            type: 'multiple-choice',
            options: ["teacher", "lecturer", "professor", "tutor"],
            answer: "professor"
        },
        {
            question: "A senior academic title at a university.",
            type: 'open-ended',
            answer: "professor",
            tolerance: 1
        },
        {
            question: "What do you call a professional who gives lectures at a university but is not a professor?",
            type: 'open-ended',
            answer: "lecturer",
            tolerance: 1
        },
        {
            question: "A person who gives private lessons.",
            type: 'open-ended',
            answer: "tutor",
            tolerance: 1
        },
        {
            question: "Which professional works in a school, teaching children?",
            type: 'multiple-choice',
            options: ["tutor", "professor", "teacher", "lecturer"],
            answer: "teacher"
        },
        {
            question: "A person whose job is to teach children in a school.",
            type: 'open-ended',
            answer: "teacher",
            tolerance: 1
        },
        {
            question: "What is a professional who helps people learn a new skill called?",
            type: 'open-ended',
            answer: "instructor",
            tolerance: 1
        },
        {
            question: "A person who teaches a practical skill or subject.",
            type: 'open-ended',
            answer: "instructor",
            tolerance: 1
        },
        {
            question: "Which professional works with children, providing care?",
            type: 'multiple-choice',
            options: ["teacher", "tutor", "childcarer", "therapist"],
            answer: "childcarer"
        },
        {
            question: "A person whose job is to look after children.",
            type: 'open-ended',
            answer: "childcarer",
            tolerance: 1
        },
        {
            question: "What do you call a professional who looks after children in their own home?",
            type: 'open-ended',
            answer: "nanny",
            tolerance: 1
        },
        {
            question: "A professional who looks after children, usually in her own home, while the parents are at work.",
            type: 'open-ended',
            answer: "childminder",
            tolerance: 1
        },
        {
            question: "Which professional works with individuals or families facing social or personal problems?",
            type: 'multiple-choice',
            options: ["counsellor", "therapist", "social worker", "psychologist"],
            answer: "social worker"
        },
        {
            question: "A person whose job is to help people deal with personal or social problems.",
            type: 'open-ended',
            answer: "social worker",
            tolerance: 2
        },
        {
            question: "What is a professional who provides legal advice and representation?",
            type: 'open-ended',
            answer: "lawyer",
            tolerance: 1
        },
        {
            question: "A person who is qualified to give legal advice and represent people in court.",
            type: 'open-ended',
            answer: "lawyer",
            tolerance: 1
        },
        {
            question: "Which professional presides over a court of law?",
            type: 'multiple-choice',
            options: ["lawyer", "barrister", "judge", "prosecutor"],
            answer: "judge"
        },
        {
            question: "A public official appointed to decide cases in a court of law.",
            type: 'open-ended',
            answer: "judge",
            tolerance: 1
        },
        {
            question: "What do you call a lawyer who conducts criminal prosecutions?",
            type: 'open-ended',
            answer: "prosecutor",
            tolerance: 1
        },
        {
            question: "A lawyer who represents the state or government in criminal cases.",
            type: 'open-ended',
            answer: "prosecutor",
            tolerance: 1
        },
        {
            question: "Which professional represents clients in court (in the UK, often distinguished from a solicitor)?",
            type: 'multiple-choice',
            options: ["lawyer", "solicitor", "barrister", "attorney"],
            answer: "barrister"
        },
        {
            question: "A lawyer who has the right to argue cases in the higher courts.",
            type: 'open-ended',
            answer: "barrister",
            tolerance: 1
        },
        {
            question: "What is a lawyer (in the UK) who deals with legal matters outside of court called?",
            type: 'open-ended',
            answer: "solicitor",
            tolerance: 1
        },
        {
            question: "A lawyer who primarily handles legal transactions and advises clients, often without appearing in court.",
            type: 'open-ended',
            answer: "solicitor",
            tolerance: 1
        },
        {
            question: "Which professional investigates crimes?",
            type: 'multiple-choice',
            options: ["police officer", "detective", "forensic scientist", "criminologist"],
            answer: "detective"
        },
        {
            question: "A member of the police force who investigates crimes.",
            type: 'open-ended',
            answer: "detective",
            tolerance: 1
        },
        {
            question: "What do you call a professional who studies crime and criminals?",
            type: 'open-ended',
            answer: "criminologist",
            tolerance: 1
        },
        {
            question: "A scientist who uses scientific methods to investigate crimes.",
            type: 'open-ended',
            answer: "forensic scientist",
            tolerance: 2
        },
        {
            question: "Which professional works for the government?",
            type: 'multiple-choice',
            options: ["judge", "lawyer", "civil servant", "politician"],
            answer: "civil servant"
        },
        {
            question: "A person who works in a government department.",
            type: 'open-ended',
            answer: "civil servant",
            tolerance: 2
        },
        {
            question: "What is a person who holds political office called?",
            type: 'open-ended',
            answer: "politician",
            tolerance: 1
        },
        {
            question: "A person who works in politics.",
            type: 'open-ended',
            answer: "politician",
            tolerance: 1
        },
        {
            question: "Which professional makes laws?",
            type: 'multiple-choice',
            options: ["judge", "politician", "legislator", "advocate"],
            answer: "legislator"
        },
        {
            question: "A member of a legislature.",
            type: 'open-ended',
            answer: "legislator",
            tolerance: 1
        },
        {
            question: "What do you call a professional who represents or supports a cause or person?",
            type: 'open-ended',
            answer: "advocate",
            tolerance: 1
        },
        {
            question: "A person who publicly supports or recommends a particular cause or policy.",
            type: 'open-ended',
            answer: "advocate",
            tolerance: 1
        },
        {
            question: "Which professional performs religious ceremonies?",
            type: 'multiple-choice',
            options: ["monk", "nun", "priest", "clergyman"],
            answer: "clergyman"
        },
        {
            question: "A male member of the clergy, usually in a Christian church.",
            type: 'open-ended',
            answer: "priest",
            tolerance: 1
        },
        {
            question: "What is a general term for a religious leader?",
            type: 'open-ended',
            answer: "clergyman",
            tolerance: 1
        },
        {
            question: "A person ordained for religious duties.",
            type: 'open-ended',
            answer: "clergyman",
            tolerance: 1
        },
        {
            question: "Which professional works in a church?",
            type: 'multiple-choice',
            options: ["monk", "nun", "deacon", "all of the above"],
            answer: "all of the above"
        },
        {
            question: "What do you call a religious assistant to a priest or minister?",
            type: 'open-ended',
            answer: "deacon",
            tolerance: 1
        },
        {
            question: "A person ordained to assist a priest or minister.",
            type: 'open-ended',
            answer: "deacon",
            tolerance: 1
        },
        {
            question: "Which professional works in a monastery?",
            type: 'multiple-choice',
            options: ["priest", "nun", "monk", "clergyman"],
            answer: "monk"
        },
        {
            question: "A man who is a member of a religious community and lives in a monastery.",
            type: 'open-ended',
            answer: "monk",
            tolerance: 1
        },
        {
            question: "What is a professional who works in a convent called?",
            type: 'open-ended',
            answer: "nun",
            tolerance: 1
        },
        {
            question: "A woman who is a member of a religious community and lives in a convent.",
            type: 'open-ended',
            answer: "nun",
            tolerance: 1
        },
        {
            question: "Which professional works at a funeral home?",
            type: 'multiple-choice',
            options: ["counsellor", "embalmer", "funeral director", "priest"],
            answer: "funeral director"
        },
        {
            question: "A person who manages and arranges funerals.",
            type: 'open-ended',
            answer: "funeral director",
            tolerance: 2
        },
        {
            question: "What do you call a professional who prepares dead bodies for burial or cremation?",
            type: 'open-ended',
            answer: "embalmer",
            tolerance: 1
        },
        {
            question: "A person whose job is to embalm dead bodies.",
            type: 'open-ended',
            answer: "embalmer",
            tolerance: 1
        },
        {
            question: "Which professional works with the deceased?",
            type: 'multiple-choice',
            options: ["nurse", "therapist", "mortician", "social worker"],
            answer: "mortician"
        },
        {
            question: "A professional who prepares dead bodies for burial or cremation and arranges funerals.",
            type: 'open-ended',
            answer: "mortician",
            tolerance: 1
        },
        {
            question: "What is a professional who buries the dead called?",
            type: 'open-ended',
            answer: "gravedigger",
            tolerance: 1
        },
        {
            question: "A person whose job is to dig graves.",
            type: 'open-ended',
            answer: "gravedigger",
            tolerance: 1
        },
        {
            question: "Which professional works in a cemetery?",
            type: 'multiple-choice',
            options: ["gardener", "caretaker", "gravedigger", "all of the above"],
            answer: "all of the above"
        },
        {
            question: "What do you call a person who looks after a cemetery?",
            type: 'open-ended',
            answer: "caretaker",
            tolerance: 1
        },
        {
            question: "A professional who manages and maintains a cemetery.",
            type: 'open-ended',
            answer: "cemetery manager",
            tolerance: 2
        },
        {
            question: "Which professional works with grief?",
            type: 'multiple-choice',
            options: ["psychologist", "therapist", "grief counsellor", "social worker"],
            answer: "grief counsellor"
        },
        {
            question: "A professional who provides counselling for people who are grieving.",
            type: 'open-ended',
            answer: "grief counsellor",
            tolerance: 2
        },
        {
            question: "What is a professional who works with people in hospice care called?",
            type: 'open-ended',
            answer: "hospice nurse",
            tolerance: 2
        },
        {
            question: "A nurse who provides care for terminally ill patients.",
            type: 'open-ended',
            answer: "hospice nurse",
            tolerance: 2
        },
        {
            question: "Which professional provides palliative care?",
            type: 'multiple-choice',
            options: ["surgeon", "oncologist", "palliative care doctor", "general practitioner"],
            answer: "palliative care doctor"
        },
        {
            question: "A medical doctor specializing in providing care and support to people with serious illnesses.",
            type: 'open-ended',
            answer: "palliative care doctor",
            tolerance: 3
        },
        {
            question: "What do you call a medical doctor who specializes in cancer?",
            type: 'open-ended',
            answer: "oncologist",
            tolerance: 1
        },
        {
            question: "A medical doctor specializing in cancer.",
            type: 'open-ended',
            answer: "oncologist",
            tolerance: 1
        },
        {
            question: "Which professional is a general medical doctor?",
            type: 'multiple-choice',
            options: ["surgeon", "specialist", "general practitioner", "resident"],
            answer: "general practitioner"
        },
        {
            question: "A medical doctor who provides general medical care.",
            type: 'open-ended',
            answer: "general practitioner",
            tolerance: 2
        },
        {
            question: "What is a doctor who is training in a hospital after medical school called?",
            type: 'open-ended',
            answer: "resident",
            tolerance: 1
        },
        {
            question: "A physician who is undergoing specialized medical training.",
            type: 'open-ended',
            answer: "resident physician",
            tolerance: 2
        },
        {
            question: "Which professional specializes in children's health?",
            type: 'multiple-choice',
            options: ["geriatrician", "pediatrician", "family doctor", "general practitioner"],
            answer: "pediatrician"
        },
        {
            question: "A medical doctor specializing in the health and medical care of infants, children, and adolescents.",
            type: 'open-ended',
            answer: "pediatrician",
            tolerance: 1
        },
        {
            question: "What do you call a doctor who specializes in family medicine?",
            type: 'open-ended',
            answer: "family doctor",
            tolerance: 2
        },
        {
            question: "A medical doctor providing comprehensive healthcare for people of all ages.",
            type: 'open-ended',
            answer: "family doctor",
            tolerance: 2
        },
        {
            question: "Which professional works in sales, often contacting potential customers?",
            type: 'multiple-choice',
            options: ["cashier", "sales clerk", "sales representative", "manager"],
            answer: "sales representative"
        },
        {
            question: "A person whose job is to represent a company and sell its products or services, often to other businesses.",
            type: 'open-ended',
            answer: "sales representative",
            tolerance: 2
        },
        {
            question: "What do you call a professional who manages customer accounts after a sale?",
            type: 'open-ended',
            answer: "account manager",
            tolerance: 2
        },
        {
            question: "A person whose job is to handle complaints and inquiries from customers.",
            type: 'open-ended',
            answer: "customer service agent",
            tolerance: 3
        },
        {
            question: "Which professional works in marketing?",
            type: 'multiple-choice',
            options: ["salesperson", "advertiser", "marketing specialist", "publicist"],
            answer: "marketing specialist"
        },
        {
            question: "A person who specializes in marketing products or services.",
            type: 'open-ended',
            answer: "marketing specialist",
            tolerance: 2
        },
        {
            question: "What is a professional who creates advertisements called?",
            type: 'open-ended',
            answer: "advertiser",
            tolerance: 1
        },
        {
            question: "A person whose job is to promote people, products, or events through public relations.",
            type: 'open-ended',
            answer: "publicist",
            tolerance: 1
        },
        {
            question: "Which professional writes words for advertising campaigns?",
            type: 'multiple-choice',
            options: ["journalist", "editor", "copywriter", "scriptwriter"],
            answer: "copywriter"
        },
        {
            question: "What do you call a professional who plans and executes advertising strategies?",
            type: 'open-ended',
            answer: "advertising executive",
            tolerance: 2
        },
        {
            question: "A person who manages advertising accounts for clients.",
            type: 'open-ended',
            answer: "account executive",
            tolerance: 2
        },
        {
            question: "Which professional designs the layout and appearance of newspapers or magazines?",
            type: 'multiple-choice',
            options: ["writer", "editor", "journalist", "layout designer"],
            answer: "layout designer"
        },
        {
            question: "A person whose job is to arrange text and images on a page.",
            type: 'open-ended',
            answer: "layout designer",
            tolerance: 2
        },
        {
            question: "What is a professional who proofreads written text called?",
            type: 'open-ended',
            answer: "proofreader",
            tolerance: 1
        },
        {
            question: "A person whose job is to check facts in written material.",
            type: 'open-ended',
            answer: "fact checker",
            tolerance: 2
        },
        {
            question: "Which professional works in the IT sector, managing systems?",
            type: 'multiple-choice',
            options: ["programmer", "IT technician", "system administrator", "web designer"],
            answer: "system administrator"
        },
        {
            question: "What do you call a professional who provides technical support to computer users?",
            type: 'open-ended',
            answer: "IT support technician",
            tolerance: 3
        },
        {
            question: "A person whose job is to test software for errors.",
            type: 'open-ended',
            answer: "software tester",
            tolerance: 2
        },
        {
            question: "Which professional specializes in computer security?",
            type: 'multiple-choice',
            options: ["programmer", "network administrator", "cybersecurity expert", "data analyst"],
            answer: "cybersecurity expert"
        },
        {
            question: "A professional who protects computer systems from cyber threats.",
            type: 'open-ended',
            answer: "cybersecurity expert",
            tolerance: 2
        },
        {
            question: "What is a person who manages computer networks called?",
            type: 'open-ended',
            answer: "network administrator",
            tolerance: 2
        },
        {
            question: "A professional who works with databases.",
            type: 'open-ended',
            answer: "database administrator",
            tolerance: 2
        },
        {
            question: "Which professional creates visual effects for films or TV?",
            type: 'multiple-choice',
            options: ["editor", "sound engineer", "VFX artist", "cinematographer"],
            answer: "VFX artist"
        },
        {
            question: "A person who creates visual effects using computers.",
            type: 'open-ended',
            answer: "VFX artist",
            tolerance: 2
        },
        {
            question: "What do you call a professional who designs and creates animations?",
            type: 'open-ended',
            answer: "animator",
            tolerance: 1
        },
        {
            question: "A person who creates animation for films, TV, or games.",
            type: 'open-ended',
            answer: "animator",
            tolerance: 1
        },
        {
            question: "Which professional composes music for films?",
            type: 'multiple-choice',
            options: ["composer", "musician", "film composer", "sound designer"],
            answer: "film composer"
        },
        {
            question: "A professional who writes music for motion pictures or television shows.",
            type: 'open-ended',
            answer: "film composer",
            tolerance: 2
        },
        {
            question: "What do you call a professional who sings in an opera?",
            type: 'open-ended',
            answer: "opera singer",
            tolerance: 2
        },
        {
            question: "A professional vocalist who performs in operas.",
            type: 'open-ended',
            answer: "opera singer",
            tolerance: 2
        },
        {
            question: "Which professional plays a musical instrument, usually in an orchestra?",
            type: 'multiple-choice',
            options: ["conductor", "composer", "orchestra musician", "soloist"],
            answer: "orchestra musician"
        },
        {
            question: "A musician who performs as part of an orchestra.",
            type: 'open-ended',
            answer: "orchestra musician",
            tolerance: 2
        },
        {
            question: "What is a professional musician who performs alone called?",
            type: 'open-ended',
            answer: "soloist",
            tolerance: 1
        },
        {
            question: "A professional who performs alone, usually playing an instrument or singing.",
            type: 'open-ended',
            answer: "soloist",
            tolerance: 1
        },
        {
            question: "Which professional makes or repairs musical instruments?",
            type: 'multiple-choice',
            options: ["musician", "composer", "luthier", "instrumentalist"],
            answer: "luthier"
        },
        {
            question: "A professional who makes or repairs stringed instruments, such as violins or guitars.",
            type: 'open-ended',
            answer: "luthier",
            tolerance: 1
        },
        {
            question: "What do you call a professional who tunes pianos?",
            type: 'open-ended',
            answer: "piano tuner",
            tolerance: 2
        },
        {
            question: "A person whose job is to tune pianos.",
            type: 'open-ended',
            answer: "piano tuner",
            tolerance: 2
        },
        {
            question: "Which professional creates and leads dance performances?",
            type: 'multiple-choice',
            options: ["dancer", "singer", "choreographer", "director"],
            answer: "choreographer"
        },
        {
            question: "A person who creates and stages dances.",
            type: 'open-ended',
            answer: "choreographer",
            tolerance: 1
        },
        {
            question: "What is a professional who performs gymnastic feats called?",
            type: 'open-ended',
            answer: "acrobat",
            tolerance: 1
        },
        {
            question: "A person who performs acrobatic acts.",
            type: 'open-ended',
            answer: "acrobat",
            tolerance: 1
        },
        {
            question: "Which professional works in a circus making people laugh?",
            type: 'multiple-choice',
            options: ["acrobat", "performer", "clown", "ringmaster"],
            answer: "clown"
        },
        {
            question: "A comic performer, typically in a circus, who wears a funny costume and makeup.",
            type: 'open-ended',
            answer: "clown",
            tolerance: 1
        },
        {
            question: "What do you call the professional who introduces performers in a circus?",
            type: 'open-ended',
            answer: "ringmaster",
            tolerance: 1
        },
        {
            question: "The person in charge of a circus performance.",
            type: 'open-ended',
            answer: "ringmaster",
            tolerance: 1
        },
        {
            question: "Which professional designs parks and outdoor spaces?",
            type: 'multiple-choice',
            options: ["gardener", "botanist", "landscape architect", "forester"],
            answer: "landscape architect"
        },
        {
            question: "A professional who designs outdoor areas, such as parks and gardens.",
            type: 'open-ended',
            answer: "landscape architect",
            tolerance: 2
        },
        {
            question: "What is a professional who manages forests called?",
            type: 'open-ended',
            answer: "forester",
            tolerance: 1
        },
        {
            question: "A person responsible for the management and conservation of forests.",
            type: 'open-ended',
            answer: "forester",
            tolerance: 1
        },
        {
            question: "Which professional works cutting down trees?",
            type: 'multiple-choice',
            options: ["forester", "gardener", "logger", "landscaper"],
            answer: "logger"
        },
        {
            question: "A person whose job is to cut down trees for timber.",
            type: 'open-ended',
            answer: "logger",
            tolerance: 1
        },
        {
            question: "What do you call a professional who works with leather to make things?",
            type: 'open-ended',
            answer: "leatherworker",
            tolerance: 1
        },
        {
            question: "A person who makes or repairs things made of leather.",
            type: 'open-ended',
            answer: "leatherworker",
            tolerance: 1
        },
        {
            question: "Which professional makes or repairs shoes?",
            type: 'multiple-choice',
            options: ["tailor", "leatherworker", "shoemaker", "seamstress"],
            answer: "shoemaker"
        },
        {
            question: "A person whose job is to make or repair shoes.",
            type: 'open-ended',
            answer: "shoemaker",
            tolerance: 1
        },
        {
            question: "What is a professional who only repairs shoes called?",
            type: 'open-ended',
            answer: "cobbler",
            tolerance: 1
        },
        {
            question: "A professional who repairs shoes.",
            type: 'open-ended',
            answer: "cobbler",
            tolerance: 1
        },
        {
            question: "Which professional works with textiles, sewing clothes?",
            type: 'multiple-choice',
            options: ["fashion designer", "stylist", "seamstress", "pattern maker"],
            answer: "seamstress"
        },
        {
            question: "A woman whose job is to sew clothes, often for others.",
            type: 'open-ended',
            answer: "seamstress",
            tolerance: 1
        },
        {
            question: "What do you call a professional who designs clothing patterns?",
            type: 'open-ended',
            answer: "pattern maker",
            tolerance: 2
        },
        {
            question: "A professional who creates patterns for garments.",
            type: 'open-ended',
            answer: "pattern maker",
            tolerance: 2
        },
        {
            question: "Which professional cleans buildings or offices?",
            type: 'multiple-choice',
            options: ["janitor", "caretaker", "cleaner", "housekeeper"],
            answer: "cleaner"
        },
        {
            question: "A person whose job is to clean places.",
            type: 'open-ended',
            answer: "cleaner",
            tolerance: 1
        },
        {
            question: "What is a professional who cleans windows called?",
            type: 'open-ended',
            answer: "window cleaner",
            tolerance: 2
        },
        {
            question: "A person whose job is to clean windows.",
            type: 'open-ended',
            answer: "window cleaner",
            tolerance: 2
        },
        {
            question: "Which professional maintains buildings and grounds?",
            type: 'multiple-choice',
            options: ["cleaner", "janitor", "maintenance worker", "handyman"],
            answer: "maintenance worker"
        },
        {
            question: "A person whose job is to maintain and repair buildings and equipment.",
            type: 'open-ended',
            answer: "maintenance worker",
            tolerance: 2
        },
        {
            question: "What do you call a professional who provides basic repairs in a home?",
            type: 'open-ended',
            answer: "handyman",
            tolerance: 1
        },
        {
            question: "A person skilled in a range of household repairs.",
            type: 'open-ended',
            answer: "handyman",
            tolerance: 1
        },
        -----------------------------------------------------------------
        xcx
    // here we are
    {
            question: "Which professional performs surgery on patients?",
            type: 'multiple-choice',
            options: ["doctor", "nurse", "surgeon", "anesthesiologist"],
            answer: "surgeon"
        },
        {
            question: "A medical doctor who performs surgical procedures.",
            type: 'open-ended',
            answer: "surgeon",
            tolerance: 1
        },
        {
            question: "What do you call a professional who assists the surgeon during an operation?",
            type: 'open-ended',
            answer: "surgical assistant",
            tolerance: 2
        },
        {
            question: "A professional trained to give emergency medical care before reaching a hospital.",
            type: 'open-ended',
            answer: "paramedic",
            tolerance: 1
        },
        {
            question: "Which professional works in a hospital, providing direct care to patients?",
            type: 'multiple-choice',
            options: ["doctor", "surgeon", "nurse", "therapist"],
            answer: "nurse"
        },
        {
            question: "What is a nurse who manages and coordinates patient care called?",
            type: 'open-ended',
            answer: "nurse manager",
            tolerance: 2
        },
        {
            question: "A professional who helps patients with breathing difficulties.",
            type: 'open-ended',
            answer: "respiratory therapist",
            tolerance: 2
        },
        {
            question: "Which professional specializes in the study of the mind and behavior?",
            type: 'multiple-choice',
            options: ["psychiatrist", "counsellor", "psychologist", "therapist"],
            answer: "psychologist"
        },
        {
            question: "A non-medical professional who studies the human mind and behavior.",
            type: 'open-ended',
            answer: "psychologist",
            tolerance: 1
        },
        {
            question: "What do you call a medical doctor who specializes in diagnosing and treating mental illness?",
            type: 'open-ended',
            answer: "psychiatrist",
            tolerance: 1
        },
        {
            question: "Which professional provides therapy for mental or emotional issues?",
            type: 'multiple-choice',
            options: ["psychologist", "psychiatrist", "therapist", "social worker"],
            answer: "therapist"
        },
        {
            question: "A professional who helps individuals or groups with personal problems through discussion.",
            type: 'open-ended',
            answer: "counsellor",
            tolerance: 1
        },
        {
            question: "What do you call a professional who helps people recover from physical injuries or illnesses?",
            type: 'open-ended',
            answer: "physiotherapist",
            tolerance: 1
        },
        {
            question: "A professional who helps patients improve their ability to perform daily activities after injury or illness.",
            type: 'open-ended',
            answer: "occupational therapist",
            tolerance: 2
        },
        {
            question: "Which professional specializes in speech and language disorders?",
            type: 'multiple-choice',
            options: ["physiotherapist", "audiologist", "speech therapist", "dietitian"],
            answer: "speech therapist"
        },
        {
            question: "A professional who diagnoses and treats disorders related to speech, language, and swallowing.",
            type: 'open-ended',
            answer: "speech therapist",
            tolerance: 2
        },
        {
            question: "What is a professional who specializes in hearing problems called?",
            type: 'open-ended',
            answer: "audiologist",
            tolerance: 1
        },
        {
            question: "A professional who diagnoses and treats hearing and balance disorders.",
            type: 'open-ended',
            answer: "audiologist",
            tolerance: 1
        },
        {
            question: "Which professional advises people on food and nutrition?",
            type: 'multiple-choice',
            options: ["doctor", "nurse", "dietitian", "pharmacist"],
            answer: "dietitian"
        },
        {
            question: "A professional who plans and manages food and nutrition programs.",
            type: 'open-ended',
            answer: "dietitian",
            tolerance: 1
        },
        {
            question: "What do you call a professional who provides general advice on healthy eating?",
            type: 'open-ended',
            answer: "nutritionist",
            tolerance: 1
        },
        {
            question: "A person who advises on matters of food and nutrition.",
            type: 'open-ended',
            answer: "nutritionist",
            tolerance: 1
        },
        {
            question: "Which professional works in a pharmacy, dispensing medicines?",
            type: 'multiple-choice',
            options: ["doctor", "nurse", "pharmacist", "technician"],
            answer: "pharmacist"
        },
        {
            question: "A professional who is qualified to prepare and dispense medicinal drugs.",
            type: 'open-ended',
            answer: "pharmacist",
            tolerance: 1
        },
        {
            question: "What is a professional who assists a pharmacist called?",
            type: 'open-ended',
            answer: "pharmacy technician",
            tolerance: 2
        },
        {
            question: "A person who assists a licensed pharmacist in preparing and dispensing medications.",
            type: 'open-ended',
            answer: "pharmacy technician",
            tolerance: 2
        },
        {
            question: "Which professional manages a team of people?",
            type: 'multiple-choice',
            options: ["supervisor", "administrator", "manager", "assistant"],
            answer: "manager"
        },
        {
            question: "A person responsible for controlling or administering all or part of a company or organization.",
            type: 'open-ended',
            answer: "manager",
            tolerance: 1
        },
        {
            question: "What do you call a professional who provides support in an office?",
            type: 'open-ended',
            answer: "administrator",
            tolerance: 1
        },
        {
            question: "A person responsible for the overall administration of an office or organization.",
            type: 'open-ended',
            answer: "administrator",
            tolerance: 1
        },
        {
            question: "Which professional works in human resources, dealing with employees?",
            type: 'multiple-choice',
            options: ["recruiter", "manager", "HR specialist", "accountant"],
            answer: "HR specialist"
        },
        {
            question: "A professional who specializes in human resources tasks, such as recruitment, training, or employee relations.",
            type: 'open-ended',
            answer: "HR specialist",
            tolerance: 2
        },
        {
            question: "What is a professional whose job is to find and hire new employees called?",
            type: 'open-ended',
            answer: "recruiter",
            tolerance: 1
        },
        {
            question: "A person whose job is to find suitable people to work for a company.",
            type: 'open-ended',
            answer: "recruiter",
            tolerance: 1
        },
        {
            question: "Which professional conducts interviews to hire new staff?",
            type: 'multiple-choice',
            options: ["manager", "recruiter", "interviewer", "HR specialist"],
            answer: "interviewer"
        },
        {
            question: "A person whose job is to conduct interviews.",
            type: 'open-ended',
            answer: "interviewer",
            tolerance: 1
        },
        {
            question: "What do you call a professional who analyzes business problems and finds solutions?",
            type: 'open-ended',
            answer: "business analyst",
            tolerance: 2
        },
        {
            question: "A professional who analyzes the needs of a business and recommends solutions.",
            type: 'open-ended',
            answer: "business analyst",
            tolerance: 2
        },
        {
            question: "Which professional provides expert advice to businesses?",
            type: 'multiple-choice',
            options: ["analyst", "manager", "consultant", "advisor"],
            answer: "consultant"
        },
        {
            question: "A person who provides expert advice professionally.",
            type: 'open-ended',
            answer: "consultant",
            tolerance: 1
        },
        {
            question: "What is a professional who advises businesses on strategy called?",
            type: 'open-ended',
            answer: "strategy consultant",
            tolerance: 2
        },
        {
            question: "A professional who advises companies on developing strategies.",
            type: 'open-ended',
            answer: "strategy consultant",
            tolerance: 2
        },
        {
            question: "Which professional manages a company's marketing activities?",
            type: 'multiple-choice',
            options: ["sales manager", "brand manager", "marketing manager", "product manager"],
            answer: "marketing manager"
        },
        {
            question: "A person responsible for managing marketing efforts.",
            type: 'open-ended',
            answer: "marketing manager",
            tolerance: 2
        },
        {
            question: "What do you call a professional who manages a company's advertising?",
            type: 'open-ended',
            answer: "advertising manager",
            tolerance: 2
        },
        {
            question: "A professional who oversees advertising campaigns.",
            type: 'open-ended',
            answer: "advertising manager",
            tolerance: 2
        },
        {
            question: "Which professional manages a specific product or product line?",
            type: 'multiple-choice',
            options: ["brand manager", "marketing manager", "product manager", "sales manager"],
            answer: "product manager"
        },
        {
            question: "A person responsible for the development, marketing, and sales of a product.",
            type: 'open-ended',
            answer: "product manager",
            tolerance: 2
        },
        {
            question: "What is a professional who manages customer relationships called?",
            type: 'open-ended',
            answer: "account manager",
            tolerance: 2
        },
        {
            question: "A professional responsible for maintaining relationships with clients.",
            type: 'open-ended',
            answer: "account manager",
            tolerance: 2
        },
        {
            question: "Which professional sells goods directly to customers in a store?",
            type: 'multiple-choice',
            options: ["sales representative", "buyer", "sales assistant", "cashier"],
            answer: "sales assistant"
        },
        {
            question: "A person whose job is to help customers and sell things in a shop.",
            type: 'open-ended',
            answer: "sales assistant",
            tolerance: 2
        },
        {
            question: "What do you call a professional who operates the till and takes payments in a store?",
            type: 'open-ended',
            answer: "cashier",
            tolerance: 1
        },
        {
            question: "A person who handles cash and card transactions in a store.",
            type: 'open-ended',
            answer: "cashier",
            tolerance: 1
        },
        {
            question: "Which professional manages a retail store?",
            type: 'multiple-choice',
            options: ["sales manager", "buyer", "retail manager", "merchandiser"],
            answer: "retail manager"
        },
        {
            question: "A person responsible for the daily operations of a retail store.",
            type: 'open-ended',
            answer: "retail manager",
            tolerance: 2
        },
        {
            question: "What is a professional who plans and executes the display of goods in a store called?",
            type: 'open-ended',
            answer: "merchandiser",
            tolerance: 1
        },
        {
            question: "A professional who arranges products in a store to maximize sales.",
            type: 'open-ended',
            answer: "merchandiser",
            tolerance: 1
        },
        {
            question: "Which professional works in a bank, helping customers with their accounts?",
            type: 'multiple-choice',
            options: ["accountant", "financial advisor", "bank teller", "branch manager"],
            answer: "bank teller"
        },
        {
            question: "A person who serves customers at the counter in a bank.",
            type: 'open-ended',
            answer: "bank teller",
            tolerance: 2
        },
        {
            question: "What do you call a professional who manages a branch of a bank?",
            type: 'open-ended',
            answer: "branch manager",
            tolerance: 2
        },
        {
            question: "A professional responsible for managing a bank branch.",
            type: 'open-ended',
            answer: "branch manager",
            tolerance: 2
        },
        {
            question: "Which professional checks a company's financial records for accuracy?",
            type: 'multiple-choice',
            options: ["accountant", "bookkeeper", "auditor", "financial analyst"],
            answer: "auditor"
        },
        {
            question: "A person who conducts an official inspection of financial records.",
            type: 'open-ended',
            answer: "auditor",
            tolerance: 1
        },
        {
            question: "What is a professional who keeps a company's financial accounts called?",
            type: 'open-ended',
            answer: "bookkeeper",
            tolerance: 1
        },
        {
            question: "A person whose job is to record a company's financial transactions.",
            type: 'open-ended',
            answer: "bookkeeper",
            tolerance: 1
        },
        {
            question: "Which professional manages a company's overall financial activities?",
            type: 'multiple-choice',
            options: ["accountant", "treasurer", "financial manager", "controller"],
            answer: "financial manager"
        },
        {
            question: "A person in charge of the financial affairs of a company.",
            type: 'open-ended',
            answer: "financial manager",
            tolerance: 2
        },
        {
            question: "What do you call a professional who is responsible for a company's treasury and cash flow?",
            type: 'open-ended',
            answer: "treasurer",
            tolerance: 1
        },
        {
            question: "A professional who manages a company's cash, investments, and debt.",
            type: 'open-ended',
            answer: "treasurer",
            tolerance: 1
        },
        {
            question: "Which professional oversees a company's accounting operations?",
            type: 'multiple-choice',
            options: ["financial manager", "auditor", "controller", "accountant"],
            answer: "controller"
        },
        {
            question: "A professional who manages the accounting department of a company.",
            type: 'open-ended',
            answer: "controller",
            tolerance: 1
        },
        {
            question: "What is a professional who specializes in cybersecurity called?",
            type: 'open-ended',
            answer: "cybersecurity expert",
            tolerance: 2
        },
        {
            question: "A professional who protects computer systems from hacking and data breaches.",
            type: 'open-ended',
            answer: "cybersecurity expert",
            tolerance: 2
        },
        {
            question: "Which professional investigates computer crimes?",
            type: 'multiple-choice',
            options: ["IT technician", "police officer", "cyber forensic analyst", "detective"],
            answer: "cyber forensic analyst"
        },
        {
            question: "A professional who examines digital evidence to investigate cybercrimes.",
            type: 'open-ended',
            answer: "cyber forensic analyst",
            tolerance: 3
        },
        {
            question: "What do you call a professional who installs and maintains computer systems?",
            type: 'open-ended',
            answer: "IT technician",
            tolerance: 2
        },
        {
            question: "A person whose job is to provide technical support for computer hardware and software.",
            type: 'open-ended',
            answer: "IT technician",
            tolerance: 2
        },
        {
            question: "Which professional manages computer networks?",
            type: 'multiple-choice',
            options: ["system administrator", "cybersecurity expert", "network administrator", "database administrator"],
            answer: "network administrator"
        },
        {
            question: "A professional who installs, configures, and maintains computer networks.",
            type: 'open-ended',
            answer: "network administrator",
            tolerance: 2
        },
        {
            question: "What is a professional who creates and manages databases called?",
            type: 'open-ended',
            answer: "database administrator",
            tolerance: 2
        },
        {
            question: "A professional responsible for the performance and security of databases.",
            type: 'open-ended',
            answer: "database administrator",
            tolerance: 2
        },
        {
            question: "Which professional designs and develops computer programs?",
            type: 'multiple-choice',
            options: ["analyst", "tester", "programmer", "developer"],
            answer: "programmer"
        },
        {
            question: "A person who writes code for computer software.",
            type: 'open-ended',
            answer: "programmer",
            tolerance: 1
        },
        {
            question: "What do you call a professional who develops software applications?",
            type: 'open-ended',
            answer: "software developer",
            tolerance: 2
        },
        {
            question: "A professional who designs, builds, and maintains software.",
            type: 'open-ended',
            answer: "software developer",
            tolerance: 2
        },
        {
            question: "Which professional tests software to find bugs?",
            type: 'multiple-choice',
            options: ["programmer", "developer", "software tester", "analyst"],
            answer: "software tester"
        },
        {
            question: "A person whose job is to test software and identify defects.",
            type: 'open-ended',
            answer: "software tester",
            tolerance: 2
        },
        {
            question: "What is a professional who writes technical documentation for software or products?",
            type: 'open-ended',
            answer: "technical writer",
            tolerance: 2
        },
        {
            question: "A person whose job is to write clear and concise technical information.",
            type: 'open-ended',
            answer: "technical writer",
            tolerance: 2
        },
        {
            question: "Which professional designs the user experience (UX) of digital products?",
            type: 'multiple-choice',
            options: ["web designer", "UI designer", "UX designer", "graphic designer"],
            answer: "UX designer"
        },
        {
            question: "A professional who focuses on improving user satisfaction and usability.",
            type: 'open-ended',
            answer: "UX designer",
            tolerance: 2
        },
        {
            question: "What do you call a professional who designs the visual appearance of user interfaces?",
            type: 'open-ended',
            answer: "UI designer",
            tolerance: 2
        },
        {
            question: "A professional who designs the look and feel of user interfaces.",
            type: 'open-ended',
            answer: "UI designer",
            tolerance: 2
        },
        {
            question: "Which professional designs and builds websites?",
            type: 'multiple-choice',
            options: ["web designer", "UX designer", "web developer", "graphic designer"],
            answer: "web developer"
        },
        {
            question: "A person who builds and maintains websites using code.",
            type: 'open-ended',
            answer: "web developer",
            tolerance: 2
        },
        {
            question: "What is a professional who creates visual designs for websites?",
            type: 'open-ended',
            answer: "web designer",
            tolerance: 2
        },
        {
            question: "A professional who designs the layout and graphics for websites.",
            type: 'open-ended',
            answer: "web designer",
            tolerance: 2
        },
        {
            question: "Which professional creates graphical content for various media?",
            type: 'multiple-choice',
            options: ["illustrator", "web designer", "graphic designer", "photographer"],
            answer: "graphic designer"
        },
        {
            question: "A professional who designs visual communications, such as logos, brochures, and websites.",
            type: 'open-ended',
            answer: "graphic designer",
            tolerance: 2
        },
        {
            question: "What do you call a professional who creates illustrations for books or magazines?",
            type: 'open-ended',
            answer: "illustrator",
            tolerance: 1
        },
        {
            question: "A person who draws pictures for books, magazines, etc.",
            type: 'open-ended',
            answer: "illustrator",
            tolerance: 1
        },
        {
            question: "Which professional takes photographs?",
            type: 'multiple-choice',
            options: ["artist", "illustrator", "photographer", "cinematographer"],
            answer: "photographer"
        },
        {
            question: "A person whose job is to take photographs.",
            type: 'open-ended',
            answer: "photographer",
            tolerance: 1
        },
        {
            question: "What is a professional who directs the photography in a film called?",
            type: 'open-ended',
            answer: "cinematographer",
            tolerance: 3
        },
        {
            question: "A professional who is responsible for the artistic and technical side of the images in a film.",
            type: 'open-ended',
            answer: "cinematographer",
            tolerance: 3
        },
        {
            question: "Which professional operates a film or video camera?",
            type: 'multiple-choice',
            options: ["director", "cinematographer", "camera operator", "lighting technician"],
            answer: "camera operator"
        },
        {
            question: "A person whose job is to operate a camera, especially in film or television.",
            type: 'open-ended',
            answer: "camera operator",
            tolerance: 2
        },
        {
            question: "What do you call a professional who edits film or video?",
            type: 'open-ended',
            answer: "film editor",
            tolerance: 2
        },
        {
            question: "A professional who cuts and joins film or video footage.",
            type: 'open-ended',
            answer: "film editor",
            tolerance: 2
        },
        {
            question: "Which professional creates visual effects for films?",
            type: 'multiple-choice',
            options: ["editor", "animator", "VFX artist", "sound designer"],
            answer: "VFX artist"
        },
        {
            question: "A person who creates visual effects for movies or television shows.",
            type: 'open-ended',
            answer: "VFX artist",
            tolerance: 2
        },
        {
            question: "What is a professional who designs and creates animations called?",
            type: 'open-ended',
            answer: "animator",
            tolerance: 1
        },
        {
            question: "A professional who creates animated sequences or films.",
            type: 'open-ended',
            answer: "animator",
            tolerance: 1
        },
        {
            question: "Which professional designs the sound for a production?",
            type: 'multiple-choice',
            options: ["sound engineer", "composer", "sound designer", "audio mixer"],
            answer: "sound designer"
        },
        {
            question: "A professional who creates the soundscape and sound effects for a film or play.",
            type: 'open-ended',
            answer: "sound designer",
            tolerance: 2
        },
        {
            question: "What do you call a professional who records sound on a film set?",
            type: 'open-ended',
            answer: "production sound mixer",
            tolerance: 3
        },
        {
            question: "A professional responsible for recording clear audio during filming.",
            type: 'open-ended',
            answer: "production sound mixer",
            tolerance: 3
        },
        {
            question: "Which professional operates the microphone boom on a film set?",
            type: 'multiple-choice',
            options: ["sound recordist", "sound mixer", "boom operator", "audio technician"],
            answer: "boom operator"
        },
        {
            question: "A person whose job is to operate the boom microphone.",
            type: 'open-ended',
            answer: "boom operator",
            tolerance: 2
        },
        {
            question: "What is a professional who mixes audio tracks for a final production called?",
            type: 'open-ended',
            answer: "re-recording mixer",
            tolerance: 2
        },
        {
            question: "A professional who mixes all the sound elements for a final film or TV show.",
            type: 'open-ended',
            answer: "re-recording mixer",
            tolerance: 2
        },
        {
            question: "Which professional works with light on a production set?",
            type: 'multiple-choice',
            options: ["cinematographer", "set designer", "lighting technician", "director"],
            answer: "lighting technician"
        },
        {
            question: "A professional who assists with lighting setup on a film or theatre set.",
            type: 'open-ended',
            answer: "lighting technician",
            tolerance: 2
        },
        {
            question: "What do you call the chief lighting technician on a film set?",
            type: 'open-ended',
            answer: "gaffer",
            tolerance: 1
        },
        {
            question: "The head of the lighting department on a film set.",
            type: 'open-ended',
            answer: "gaffer",
            tolerance: 1
        },
        {
            question: "Which professional writes screenplays?",
            type: 'multiple-choice',
            options: ["novelist", "playwright", "screenwriter", "author"],
            answer: "screenwriter"
        },
        {
            question: "A person who writes scripts for films or television.",
            type: 'open-ended',
            answer: "screenwriter",
            tolerance: 1
        },
        {
            question: "What is a professional who writes stories for books called?",
            type: 'open-ended',
            answer: "novelist",
            tolerance: 1
        },
        {
            question: "A person who writes novels.",
            type: 'open-ended',
            answer: "novelist",
            tolerance: 1
        },
        {
            question: "Which professional writes poetry?",
            type: 'multiple-choice',
            options: ["writer", "novelist", "poet", "lyricist"],
            answer: "poet"
        },
        {
            question: "A person who writes poems.",
            type: 'open-ended',
            answer: "poet",
            tolerance: 1
        },
        {
            question: "What do you call a professional who writes the words for songs?",
            type: 'open-ended',
            answer: "lyricist",
            tolerance: 1
        },
        {
            question: "A person who writes song lyrics.",
            type: 'open-ended',
            answer: "lyricist",
            tolerance: 1
        },
        {
            question: "Which professional reviews books, films, or art?",
            type: 'multiple-choice',
            options: ["editor", "journalist", "critic", "writer"],
            answer: "critic"
        },
        {
            question: "A person who expresses opinions about books, films, etc.",
            type: 'open-ended',
            answer: "critic",
            tolerance: 1
        },
        {
            question: "What is a professional who edits written text called?",
            type: 'open-ended',
            answer: "editor",
            tolerance: 1
        },
        {
            question: "A person who prepares written material for publication by correcting errors and making improvements.",
            type: 'open-ended',
            answer: "editor",
            tolerance: 1
        },
        {
            question: "Which professional checks written text for grammar and spelling errors?",
            type: 'multiple-choice',
            options: ["editor", "writer", "proofreader", "journalist"],
            answer: "proofreader"
        },
        {
            question: "A professional who reads text and corrects errors in grammar, spelling, and punctuation.",
            type: 'open-ended',
            answer: "proofreader",
            tolerance: 1
        },
        {
            question: "What do you call a professional who writes articles for newspapers or magazines?",
            type: 'open-ended',
            answer: "journalist",
            tolerance: 1
        },
        {
            question: "A person who investigates and reports on events for newspapers, television, or radio.",
            type: 'open-ended',
            answer: "journalist",
            tolerance: 1
        },
        {
            question: "Which professional works in a newsroom?",
            type: 'multiple-choice',
            options: ["editor", "photographer", "reporter", "all of the above"],
            answer: "all of the above"
        }, --------------------------09876
    // here we are
    {
            question: "Which professional specializes in making and repairing wooden objects?",
            type: 'multiple-choice',
            options: ["mason", "carpenter", "plasterer", "roofer"],
            answer: "carpenter"
        },
        {
            question: "A person who builds or repairs things made of wood.",
            type: 'open-ended',
            answer: "carpenter",
            tolerance: 1
        },
        {
            question: "What do you call a professional who installs and fixes pipes?",
            type: 'open-ended',
            answer: "plumber",
            tolerance: 1
        },
        {
            question: "A person whose job is to install and repair water systems.",
            type: 'open-ended',
            answer: "plumber",
            tolerance: 1
        },
        {
            question: "Which professional works with electrical wiring?",
            type: 'multiple-choice',
            options: ["plumber", "electrician", "mechanic", "builder"],
            answer: "electrician"
        },
        {
            question: "A person who installs and maintains electrical systems.",
            type: 'open-ended',
            answer: "electrician",
            tolerance: 1
        },
        {
            question: "What is a professional who paints walls and other surfaces called?",
            type: 'open-ended',
            answer: "painter",
            tolerance: 1
        },
        {
            question: "A person whose job is to apply paint to buildings or surfaces.",
            type: 'open-ended',
            answer: "painter",
            tolerance: 1
        },
        {
            question: "Which professional makes and repairs things made of metal?",
            type: 'multiple-choice',
            options: ["carpenter", "mason", "metalworker", "glazier"],
            answer: "metalworker"
        },
        {
            question: "A person who works with metal, shaping or joining it.",
            type: 'open-ended',
            answer: "metalworker",
            tolerance: 1
        },
        {
            question: "What do you call a professional who joins pieces of metal by heating them?",
            type: 'open-ended',
            answer: "welder",
            tolerance: 1
        },
        {
            question: "A person whose job is to join metal pieces using welding.",
            type: 'open-ended',
            answer: "welder",
            tolerance: 1
        },
        {
            question: "Which professional builds with stone or brick?",
            type: 'multiple-choice',
            options: ["carpenter", "tiler", "mason", "plasterer"],
            answer: "mason"
        },
        {
            question: "A skilled worker who builds walls or structures using stone or brick.",
            type: 'open-ended',
            answer: "mason",
            tolerance: 1
        },
        {
            question: "What is a professional who applies plaster to walls and ceilings called?",
            type: 'open-ended',
            answer: "plasterer",
            tolerance: 1
        },
        {
            question: "A person whose job is to plaster walls and ceilings.",
            type: 'open-ended',
            answer: "plasterer",
            tolerance: 1
        },
        {
            question: "Which professional installs tiles on walls or floors?",
            type: 'multiple-choice',
            options: ["mason", "painter", "tiler", "roofer"],
            answer: "tiler"
        },
        {
            question: "A person whose job is to lay tiles.",
            type: 'open-ended',
            answer: "tiler",
            tolerance: 1
        },
        {
            question: "What do you call a professional who builds or repairs roofs?",
            type: 'open-ended',
            answer: "roofer",
            tolerance: 1
        },
        {
            question: "A person whose job is to install or mend roofs.",
            type: 'open-ended',
            answer: "roofer",
            tolerance: 1
        },
        {
            question: "Which professional works with glass, fitting it into windows?",
            type: 'multiple-choice',
            options: ["carpenter", "glazier", "metalworker", "tiler"],
            answer: "glazier"
        },
        {
            question: "A person whose job is to fit glass into windows and doors.",
            type: 'open-ended',
            answer: "glazier",
            tolerance: 1
        },
        {
            question: "What is a professional who does a variety of small repair jobs called?",
            type: 'open-ended',
            answer: "handyman",
            tolerance: 1
        },
        {
            question: "A person skilled in various household repairs.",
            type: 'open-ended',
            answer: "handyman",
            tolerance: 1
        },
        {
            question: "Which professional cleans and maintains buildings?",
            type: 'multiple-choice',
            options: ["cleaner", "caretaker", "janitor", "all of the above"],
            answer: "all of the above"
        },
        {
            question: "A person whose job is to clean and maintain a building or area.",
            type: 'open-ended',
            answer: "caretaker",
            tolerance: 1
        },
        {
            question: "What do you call a professional who cleans offices or public spaces?",
            type: 'open-ended',
            answer: "janitor",
            tolerance: 1
        },
        {
            question: "A person whose job is to clean and do minor repairs in a building.",
            type: 'open-ended',
            answer: "janitor",
            tolerance: 1
        },
        {
            question: "Which professional collects waste and rubbish?",
            type: 'multiple-choice',
            options: ["janitor", "street sweeper", "waste collector", "cleaner"],
            answer: "waste collector"
        },
        {
            question: "A person whose job is to collect rubbish.",
            type: 'open-ended',
            answer: "waste collector",
            tolerance: 2
        },
        {
            question: "What is a professional who sweeps streets called?",
            type: 'open-ended',
            answer: "street sweeper",
            tolerance: 2
        },
        {
            question: "A person whose job is to clean streets.",
            type: 'open-ended',
            answer: "street sweeper",
            tolerance: 2
        },
        {
            question: "Which professional works in a warehouse, managing operations?",
            type: 'multiple-choice',
            options: ["packer", "forklift operator", "warehouse manager", "logistics manager"],
            answer: "warehouse manager"
        },
        {
            question: "A person responsible for managing the operations of a warehouse.",
            type: 'open-ended',
            answer: "warehouse manager",
            tolerance: 2
        },
        {
            question: "What do you call a professional who operates a forklift?",
            type: 'open-ended',
            answer: "forklift operator",
            tolerance: 2
        },
        {
            question: "A professional who drives a forklift.",
            type: 'open-ended',
            answer: "forklift operator",
            tolerance: 2
        },
        {
            question: "Which professional plans and manages the movement of goods?",
            type: 'multiple-choice',
            options: ["warehouse manager", "buyer", "logistics manager", "supply chain manager"],
            answer: "logistics manager"
        },
        {
            question: "A professional who manages the flow of goods and services.",
            type: 'open-ended',
            answer: "logistics manager",
            tolerance: 2
        },
        {
            question: "What is a professional who oversees the entire process from raw materials to the customer called?",
            type: 'open-ended',
            answer: "supply chain manager",
            tolerance: 2
        },
        {
            question: "A person responsible for managing the supply chain.",
            type: 'open-ended',
            answer: "supply chain manager",
            tolerance: 2
        },
        {
            question: "Which professional works on a construction site, performing physical tasks?",
            type: 'multiple-choice',
            options: ["architect", "engineer", "labourer", "foreman"],
            answer: "labourer"
        },
        {
            question: "A worker who does manual labour, especially on a construction site.",
            type: 'open-ended',
            answer: "labourer",
            tolerance: 1
        },
        {
            question: "What do you call a professional who supervises workers on a construction site?",
            type: 'open-ended',
            answer: "foreman",
            tolerance: 1
        },
        {
            question: "A person who is in charge of a group of workers.",
            type: 'open-ended',
            answer: "foreman",
            tolerance: 1
        },
        {
            question: "Which professional works with concrete?",
            type: 'multiple-choice',
            options: ["bricklayer", "mason", "concreter", "plasterer"],
            answer: "concreter"
        },
        {
            question: "A person who works with concrete, pouring or finishing it.",
            type: 'open-ended',
            answer: "concreter",
            tolerance: 1
        },
        {
            question: "What is a professional who installs different types of flooring called?",
            type: 'open-ended',
            answer: "flooring installer",
            tolerance: 2
        },
        {
            question: "A person whose job is to lay floor coverings.",
            type: 'open-ended',
            answer: "flooring installer",
            tolerance: 2
        },
        {
            question: "Which professional specializes in welding?",
            type: 'multiple-choice',
            options: ["blacksmith", "metalworker", "welder", "engineer"],
            answer: "welder"
        },
        {
            question: "A person whose job is to join pieces of metal using welding.",
            type: 'open-ended',
            answer: "welder",
            tolerance: 1
        },
        {
            question: "What do you call a professional who works with iron and shapes it by hand?",
            type: 'open-ended',
            answer: "blacksmith",
            tolerance: 1
        },
        {
            question: "A person who makes and repairs things made of iron.",
            type: 'open-ended',
            answer: "blacksmith",
            tolerance: 1
        },
        {
            question: "Which professional makes objects from clay?",
            type: 'multiple-choice',
            options: ["sculptor", "artist", "potter", "mason"],
            answer: "potter"
        },
        {
            question: "A person who makes pottery.",
            type: 'open-ended',
            answer: "potter",
            tolerance: 1
        },
        {
            question: "What is a professional who creates objects from glass by blowing called?",
            type: 'open-ended',
            answer: "glassblower",
            tolerance: 1
        },
        {
            question: "A person who makes objects from molten glass by blowing air through a tube.",
            type: 'open-ended',
            answer: "glassblower",
            tolerance: 1
        },
        {
            question: "Which professional designs and makes jewellery?",
            type: 'multiple-choice',
            options: ["artist", "craftsperson", "jeweller", "designer"],
            answer: "jeweller"
        },
        {
            question: "A person whose job is to make or repair jewellery.",
            type: 'open-ended',
            answer: "jeweller",
            tolerance: 1
        },
        {
            question: "What do you call a professional who works with precious metals?",
            type: 'open-ended',
            answer: "goldsmith",
            tolerance: 1
        },
        {
            question: "A professional who makes things out of gold.",
            type: 'open-ended',
            answer: "goldsmith",
            tolerance: 1
        },
        {
            question: "Which professional designs clothes?",
            type: 'multiple-choice',
            options: ["tailor", "seamstress", "dressmaker", "fashion designer"],
            answer: "fashion designer"
        },
        {
            question: "A person who designs clothing and fashion collections.",
            type: 'open-ended',
            answer: "fashion designer",
            tolerance: 2
        },
        {
            question: "What is a professional who makes or alters clothes for women called?",
            type: 'open-ended',
            answer: "dressmaker",
            tolerance: 1
        },
        {
            question: "A person who makes women's clothes, often by hand.",
            type: 'open-ended',
            answer: "dressmaker",
            tolerance: 1
        },
        {
            question: "Which professional makes or alters clothes, especially suits, for men?",
            type: 'multiple-choice',
            options: ["dressmaker", "seamstress", "tailor", "fashion designer"],
            answer: "tailor"
        },
        {
            question: "A person whose job is to make or alter clothes, especially suits.",
            type: 'open-ended',
            answer: "tailor",
            tolerance: 1
        },
        {
            question: "What do you call a professional who sews clothes or other textile items?",
            type: 'open-ended',
            answer: "seamstress",
            tolerance: 1
        },
        {
            question: "A woman whose job is to sew clothes.",
            type: 'open-ended',
            answer: "seamstress",
            tolerance: 1
        },
        {
            question: "Which professional works in a restaurant kitchen, often managing a section?",
            type: 'multiple-choice',
            options: ["cook", "chef", "line cook", "kitchen porter"],
            answer: "line cook"
        },
        {
            question: "A cook who works on a specific part of the menu in a professional kitchen.",
            type: 'open-ended',
            answer: "line cook",
            tolerance: 2
        },
        {
            question: "What is a professional who washes dishes in a restaurant called?",
            type: 'open-ended',
            answer: "dishwasher",
            tolerance: 1
        },
        {
            question: "A person whose job is to wash dishes.",
            type: 'open-ended',
            answer: "dishwasher",
            tolerance: 1
        },
        {
            question: "Which professional cleans and assists in a restaurant kitchen?",
            type: 'multiple-choice',
            options: ["cook", "waiter", "kitchen porter", "dishwasher"],
            answer: "kitchen porter"
        },
        {
            question: "A person who cleans and helps with basic tasks in a restaurant kitchen.",
            type: 'open-ended',
            answer: "kitchen porter",
            tolerance: 2
        },
        {
            question: "What do you call a professional who serves drinks at a bar?",
            type: 'open-ended',
            answer: "bartender",
            tolerance: 1
        },
        {
            question: "A person whose job is to prepare and serve drinks at a bar.",
            type: 'open-ended',
            answer: "bartender",
            tolerance: 1
        },
        {
            question: "Which professional makes and serves coffee?",
            type: 'multiple-choice',
            options: ["waiter", "bartender", "barista", "sommelier"],
            answer: "barista"
        },
        {
            question: "A person who makes and serves coffee drinks professionally.",
            type: 'open-ended',
            answer: "barista",
            tolerance: 1
        },
        {
            question: "What is a professional who specializes in wine and serves it in a restaurant called?",
            type: 'open-ended',
            answer: "sommelier",
            tolerance: 1
        },
        {
            question: "A professional wine expert, often working in a restaurant.",
            type: 'open-ended',
            answer: "sommelier",
            tolerance: 1
        },
        {
            question: "Which professional works at the front desk of a hotel?",
            type: 'multiple-choice',
            options: ["concierge", "porter", "receptionist", "manager"],
            answer: "receptionist"
        },
        {
            question: "A person whose job is to greet guests and manage bookings at a hotel.",
            type: 'open-ended',
            answer: "receptionist",
            tolerance: 1
        },
        {
            question: "What do you call a professional who helps hotel guests with information and services?",
            type: 'open-ended',
            answer: "concierge",
            tolerance: 1
        },
        {
            question: "A hotel employee who assists guests with various tasks, such as making reservations or arranging transportation.",
            type: 'open-ended',
            answer: "concierge",
            tolerance: 1
        },
        {
            question: "Which professional carries luggage in a hotel or station?",
            type: 'multiple-choice',
            options: ["receptionist", "bellhop", "doorman", "porter"],
            answer: "porter"
        },
        {
            question: "A person whose job is to carry luggage.",
            type: 'open-ended',
            answer: "porter",
            tolerance: 1
        },
        {
            question: "What is a professional who opens doors for guests at a hotel or building called?",
            type: 'open-ended',
            answer: "doorman",
            tolerance: 1
        },
        {
            question: "A person whose job is to open doors at the entrance of a building.",
            type: 'open-ended',
            answer: "doorman",
            tolerance: 1
        },
        {
            question: "Which professional cleans hotel rooms?",
            type: 'multiple-choice',
            options: ["janitor", "caretaker", "housekeeper", "room attendant"],
            answer: "room attendant"
        },
        {
            question: "A person whose job is to clean and tidy hotel rooms.",
            type: 'open-ended',
            answer: "room attendant",
            tolerance: 2
        },
        {
            question: "What do you call a professional who manages a large household and its staff?",
            type: 'open-ended',
            answer: "butler",
            tolerance: 1
        },
        {
            question: "A senior male servant in a large house.",
            type: 'open-ended',
            answer: "butler",
            tolerance: 1
        },
        {
            question: "Which professional is a private chef employed by a family?",
            type: 'multiple-choice',
            options: ["cook", "chef", "private chef", "housekeeper"],
            answer: "private chef"
        },
        {
            question: "A professional cook who works in a private home.",
            type: 'open-ended',
            answer: "private chef",
            tolerance: 2
        },
        {
            question: "What is a professional who takes care of children in their employer's home called?",
            type: 'open-ended',
            answer: "nanny",
            tolerance: 1
        },
        {
            question: "A person employed to look after a child in its own home.",
            type: 'open-ended',
            answer: "nanny",
            tolerance: 1
        },
        {
            question: "Which professional takes care of pets while their owners are away?",
            type: 'multiple-choice',
            options: ["veterinarian", "animal trainer", "pet sitter", "groomer"],
            answer: "pet sitter"
        },
        {
            question: "A person who looks after pets when their owners are absent.",
            type: 'open-ended',
            answer: "pet sitter",
            tolerance: 2
        },
        {
            question: "What do you call a professional who walks dogs for a fee?",
            type: 'open-ended',
            answer: "dog walker",
            tolerance: 2
        },
        {
            question: "A person whose job is to take dogs for walks.",
            type: 'open-ended',
            answer: "dog walker",
            tolerance: 2
        },
        {
            question: "Which professional transports items, often quickly?",
            type: 'multiple-choice',
            options: ["postman", "delivery driver", "courier", "messenger"],
            answer: "courier"
        },
        {
            question: "A person who delivers messages or parcels.",
            type: 'open-ended',
            answer: "courier",
            tolerance: 1
        },
        {
            question: "What is a professional who delivers letters and parcels to homes called?",
            type: 'open-ended',
            answer: "postman",
            tolerance: 1
        },
        {
            question: "A person whose job is to deliver mail.",
            type: 'open-ended',
            answer: "postman",
            tolerance: 1
        },
        {
            question: "Which professional works in a post office?",
            type: 'multiple-choice',
            options: ["postman", "courier", "postal worker", "clerk"],
            answer: "postal worker"
        },
        {
            question: "A person employed by the postal service.",
            type: 'open-ended',
            answer: "postal worker",
            tolerance: 2
        },
        {
            question: "What do you call a professional who drives a taxi?",
            type: 'open-ended',
            answer: "taxi driver",
            tolerance: 2
        },
        {
            question: "A person whose job is to drive a taxi.",
            type: 'open-ended',
            answer: "taxi driver",
            tolerance: 2
        },
        {
            question: "Which professional drives a bus?",
            type: 'multiple-choice',
            options: ["driver", "chauffeur", "bus driver", "operator"],
            answer: "bus driver"
        },
        {
            question: "A person whose job is to drive a bus.",
            type: 'open-ended',
            answer: "bus driver",
            tolerance: 2
        },
        {
            question: "What is a professional who is employed to drive a private car for someone else called?",
            type: 'open-ended',
            answer: "chauffeur",
            tolerance: 1
        },
        {
            question: "A person who is paid to drive a private car.",
            type: 'open-ended',
            answer: "chauffeur",
            tolerance: 1
        },
        {
            question: "Which professional drives large trucks?",
            type: 'multiple-choice',
            options: ["driver", "bus driver", "truck driver", "train driver"],
            answer: "truck driver"
        },
        {
            question: "A person whose job is to drive heavy goods vehicles.",
            type: 'open-ended',
            answer: "truck driver",
            tolerance: 2
        },
        {
            question: "What do you call a professional who drives a train?",
            type: 'open-ended',
            answer: "train driver",
            tolerance: 2
        },
        {
            question: "A person whose job is to operate a train.",
            type: 'open-ended',
            answer: "train driver",
            tolerance: 2
        },
        {
            question: "Which professional works on a train, assisting passengers?",
            type: 'multiple-choice',
            options: ["driver", "conductor", "train attendant", "ticket inspector"],
            answer: "train attendant"
        },
        {
            question: "A person who assists passengers on a train.",
            type: 'open-ended',
            answer: "train attendant",
            tolerance: 2
        },
        {
            question: "What is a professional who checks tickets on public transport called?",
            type: 'open-ended',
            answer: "ticket inspector",
            tolerance: 2
        },
        {
            question: "A person whose job is to check that passengers have valid tickets.",
            type: 'open-ended',
            answer: "ticket inspector",
            tolerance: 2
        },
        {
            question: "Which professional sells tickets?",
            type: 'multiple-choice',
            options: ["cashier", "salesperson", "ticket agent", "attendant"],
            answer: "ticket agent"
        },
        {
            question: "A person whose job is to sell tickets.",
            type: 'open-ended',
            answer: "ticket agent",
            tolerance: 2
        },
        {
            question: "What do you call a professional who works at an airport, managing air traffic?",
            type: 'open-ended',
            answer: "air traffic controller",
            tolerance: 3
        },
        {
            question: "A person responsible for directing the movement of aircraft.",
            type: 'open-ended',
            answer: "air traffic controller",
            tolerance: 3
        },
        {
            question: "Which professional works on the ground at an airport?",
            type: 'multiple-choice',
            options: ["pilot", "flight attendant", "ground crew", "air traffic controller"],
            answer: "ground crew"
        },
        {
            question: "A person who works on the ground at an airport, loading luggage or directing planes.",
            type: 'open-ended',
            answer: "ground crew",
            tolerance: 2
        },
        {
            question: "What is a professional who cleans aircraft called?",
            type: 'open-ended',
            answer: "aircraft cleaner",
            tolerance: 2
        },
        {
            question: "A person whose job is to clean the interior or exterior of airplanes.",
            type: 'open-ended',
            answer: "aircraft cleaner",
            tolerance: 2
        },
        {
            question: "Which professional works in a factory, operating machinery?",
            type: 'multiple-choice',
            options: ["engineer", "technician", "machine operator", "foreman"],
            answer: "machine operator"
        },
        {
            question: "A person whose job is to operate machinery in a factory.",
            type: 'open-ended',
            answer: "machine operator",
            tolerance: 2
        },
        {
            question: "What do you call a professional who supervises workers in a factory?",
            type: 'open-ended',
            answer: "supervisor",
            tolerance: 1
        },
        {
            question: "A person who is in charge of a group of workers.",
            type: 'open-ended',
            answer: "supervisor",
            tolerance: 1
        },
        {
            question: "Which professional performs quality control checks in a factory?",
            type: 'multiple-choice',
            options: ["operator", "foreman", "quality inspector", "assembler"],
            answer: "quality inspector"
        },
        {
            question: "A person whose job is to check products for quality.",
            type: 'open-ended',
            answer: "quality inspector",
            tolerance: 2
        },
        {
            question: "What is a professional who puts together parts of a product in a factory called?",
            type: 'open-ended',
            answer: "assembler",
            tolerance: 1
        },
        {
            question: "A person whose job is to assemble products.",
            type: 'open-ended',
            answer: "assembler",
            tolerance: 1
        },
        {
            question: "Which professional works in construction, operating heavy machinery?",
            type: 'multiple-choice',
            options: ["builder", "engineer", "heavy equipment operator", "foreman"],
            answer: "heavy equipment operator"
        },
        {
            question: "A person whose job is to operate large machines on a construction site.",
            type: 'open-ended',
            answer: "heavy equipment operator",
            tolerance: 3
        },
        {
            question: "What do you call a professional who operates a crane?",
            type: 'open-ended',
            answer: "crane operator",
            tolerance: 2
        },
        {
            question: "A person whose job is to operate a crane.",
            type: 'open-ended',
            answer: "crane operator",
            tolerance: 2
        },
        {
            question: "Which professional cleans buildings?",
            type: 'multiple-choice',
            options: ["caretaker", "janitor", "cleaner", "all of the above"],
            answer: "cleaner"
        },
        {
            question: "What is one quarter of 100?",
            image: 'space-2653754_1280.jpg',
            type: 'open-ended',
            answer: "twenty-five",
            tolerance: 2
        },
        {
            question: "Which of these ends in '-st': 21, 22, 23?",
            image: 'space-2653754_1280.jpg',
            type: 'open-ended',
            answer: "21",
            tolerance: 0
        },
        {
            question: "In what century are we living?",
            image: 'space-2653754_1280.jpg',
            type: 'open-ended',
            answer: "the twenty-first",
            tolerance: 2
        },
        {
            question: "How do you say 'July 4th'?",
            image: 'space-2653754_1280.jpg',
            type: 'open-ended',
            answer: "July the fourth",
            tolerance: 2
        },
        {
            question: "If you have two parts of something, and you take away one half, how many parts are left?",
            image: 'space-2653754_1280.jpg',
            type: 'open-ended',
            answer: "one",
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