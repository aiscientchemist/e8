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


// --- QUIZ QUESTIONS (100 KREATYWNYCH PYTAŃ - KULTURA I SZTUKA) ---
const questions = [
    // KATEGORIA: INSTRUMENTY MUZYCZNE
    {
        question: "I am a large keyboard instrument, often found in concert halls. What am I?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "grand piano",
        tolerance: 2
    },
    {
        question: "Which instrument do you play with a bow?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["trumpet", "flute", "cello", "drums"],
        answer: "cello"
    },
    {
        question: "A popular string instrument with six strings.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "guitar",
        tolerance: 1
    },
    {
        question: "A small instrument you play by blowing and sliding it across your mouth.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "harmonica",
        tolerance: 2
    },
    {
        question: "A brass instrument with valves and a flared bell, often used in jazz music.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "trumpet",
        tolerance: 1
    },
    {
        question: "A set of drums and cymbals played by one person.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "drum kit",
        tolerance: 2
    },
    {
        question: "A large, triangular stringed instrument, often associated with angels.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "harp",
        tolerance: 1
    },
    {
        question: "A woodwind instrument, often made of metal, that you hold horizontally and blow across a hole.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "flute",
        tolerance: 1
    },
    {
        question: "A curved, brass woodwind instrument popular in jazz and blues.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "saxophone",
        tolerance: 2
    },
    {
        question: "The largest string instrument in the orchestra.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "double bass",
        tolerance: 2
    },
    {
        question: "Which of these is NOT a string instrument?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["violin", "guitar", "cello", "clarinet"],
        answer: "clarinet"
    },
    {
        question: "A guitar with four or five strings that plays low notes.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "bass guitar",
        tolerance: 2
    },
    {
        question: "A single-reed woodwind instrument with a straight body.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "clarinet",
        tolerance: 2
    },
    {
        question: "A person who plays the violin is a...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "violinist",
        tolerance: 2
    },
    {
        question: "What is the name for a person who plays the piano?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "pianist",
        tolerance: 2
    },

    // KATEGORIA: SZTUKI PLASTYCZNE
    {
        question: "A three-dimensional work of art, often made from stone or metal.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "sculpture",
        tolerance: 2
    },
    {
        question: "A painting made with oil-based paints.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "oil painting",
        tolerance: 2
    },
    {
        question: "A painting of a person's face.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "portrait",
        tolerance: 2
    },
    {
        question: "A wooden frame an artist uses to hold their painting.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "easel",
        tolerance: 1
    },
    {
        question: "The board an artist uses to mix colors.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "palette",
        tolerance: 2
    },
    {
        question: "A quick, rough drawing.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "sketch",
        tolerance: 1
    },
    {
        question: "A tool with bristles used for painting.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "paintbrush",
        tolerance: 2
    },
    {
        question: "A painting of the outdoors, such as mountains or forests.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "landscape",
        tolerance: 2
    },
    {
        question: "A painting of inanimate objects, like fruit or flowers.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "still life",
        tolerance: 2
    },
    {
        question: "The fabric stretched over a frame that artists paint on.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "canvas",
        tolerance: 1
    },
    {
        question: "A black liquid used for writing or drawing.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "ink",
        tolerance: 1
    },
    {
        question: "A type of paint that is mixed with water.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "watercolor",
        tolerance: 2
    },
    {
        question: "A person who creates sculptures is a...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "sculptor",
        tolerance: 2
    },
    {
        question: "A drawing made with a black, carbon-based stick.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "charcoal drawing",
        tolerance: 2
    },
    {
        question: "Which item would an artist NOT typically use?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["canvas", "easel", "trumpet", "palette"],
        answer: "trumpet"
    },

    // KATEGORIA: FILM, TEATR I MEDIA
    {
        question: "A person who performs dangerous actions in a film instead of the actor.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "stuntman",
        tolerance: 2
    },
    {
        question: "The process of recording a movie is called to '___ a film'.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "shoot",
        tolerance: 1
    },
    {
        question: "To become a very important news story is to 'hit the ___'.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "headlines",
        tolerance: 2
    },
    {
        question: "To present a play in a theatre is to '___ a play'.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "stage",
        tolerance: 1
    },
    {
        question: "The large heavy cloth that hangs at the front of a theatre stage.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "curtain",
        tolerance: 2
    },
    {
        question: "The raised floor in a theatre where actors perform.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "stage",
        tolerance: 1
    },
    {
        question: "An upper floor in a theatre with seats.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "balcony",
        tolerance: 2
    },
    {
        question: "A book with stories told through pictures.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "comic book",
        tolerance: 2
    },
    {
        question: "A person who makes movies is a film ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "director",
        tolerance: 2
    },
    {
        question: "A person who operates a camera for a film.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "cameraman",
        tolerance: 2
    },
    {
        question: "A person who writes plays.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "playwright",
        tolerance: 2
    },
    {
        question: "A female ballet dancer.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "ballerina",
        tolerance: 2
    },
    {
        question: "A person who writes long stories, or novels.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "novelist",
        tolerance: 2
    },
    {
        question: "A person who leads an orchestra.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "conductor",
        tolerance: 2
    },
    {
        question: "What is the Polish word for a film editor?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "montażysta",
        tolerance: 2
    },
    {
        question: "A street performer who plays music for money.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "busker",
        tolerance: 1
    },
    {
        question: "A person who writes regular articles for a newspaper, often with their opinions.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "columnist",
        tolerance: 2
    },
    {
        question: "A person who draws cartoons is a...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "cartoonist",
        tolerance: 2
    },
    {
        question: "Where would you typically see a 'curtain call'?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["In a museum", "In a cinema", "In a theatre", "In a library"],
        answer: "In a theatre"
    },
    {
        question: "A person who applies cosmetics to actors.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "make-up artist",
        tolerance: 2
    },

    // KATEGORIA: OPISY I OCENY (PRZYMIOTNIKI, ZWROTY)
    {
        question: "If a film's story is unbelievable, you can say its plot was...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "far-fetched",
        tolerance: 2
    },
    {
        question: "A film with a lot of exciting events happening quickly is...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "fast-paced",
        tolerance: 2
    },
    {
        question: "A performance that was amazing and you will remember it for a long time was...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "memorable",
        tolerance: 2
    },
    {
        question: "A book that is very special and unusual is...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "extraordinary",
        tolerance: 2
    },
    {
        question: "If you knew exactly how a movie would end, it was too...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "predictable",
        tolerance: 2
    },
    {
        question: "An actor's performance that seemed very real and believable was...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "convincing",
        tolerance: 2
    },
    {
        question: "An actor's performance that made you feel strong emotions was...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "moving",
        tolerance: 1
    },
    {
        question: "When a film is highly praised by experts, it wins 'critical ___'.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "acclaim",
        tolerance: 2
    },
    {
        question: "A story or work of art that makes you think about serious topics is...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "profound",
        tolerance: 2
    },
    {
        question: "The opposite of a 'profound' film is one that is...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "superficial",
        tolerance: 2
    },
    {
        question: "When a sad film makes the audience cry, they are 'moved to ___'.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "tears",
        tolerance: 1
    },
    {
        question: "What is the main story of a book or film called?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "plot",
        tolerance: 1
    },
    {
        question: "Which word means 'delightful and unforgettable'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "memorable",
        tolerance: 2
    },
    {
        question: "A book you can't stop reading is often described as a...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "page-turner",
        tolerance: 2
    },
    {
        question: "The people who watch a play or a concert are the...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "audience",
        tolerance: 2
    },

    // KATEGORIA: ZAWODY I ROLE (MIX)
    {
        question: "A person who plays the drum kit is a...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "drummer",
        tolerance: 1
    },
    {
        question: "A person who plays the cello is a...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "cellist",
        tolerance: 2
    },
    {
        question: "A person who plays the flute is a flutist or a...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "flautist",
        tolerance: 2
    },
    {
        question: "A person who plays the organ is an...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "organist",
        tolerance: 2
    },
    {
        question: "A person who helps actors remember their lines in a theatre.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "prompter",
        tolerance: 2
    },// here we are
    [
        {
            question: "Which professional performs operations on patients?",
            type: 'multiple-choice',
            options: ["doctor", "nurse", "surgeon", "paramedic"],
            answer: "surgeon"
        },
        {
            question: "A medical doctor who performs surgical operations.",
            type: 'open-ended',
            answer: "surgeon",
            tolerance: 1
        },
        {
            question: "What is a person trained to give emergency medical treatment called?",
            type: 'open-ended',
            answer: "paramedic",
            tolerance: 1
        },
        {
            question: "A professional who works in an ambulance.",
            type: 'open-ended',
            answer: "ambulance driver",
            tolerance: 2
        },
        {
            question: "Which professional takes care of patients in a hospital?",
            type: 'multiple-choice',
            options: ["doctor", "surgeon", "nurse", "therapist"],
            answer: "nurse"
        },
        {
            question: "What do you call a registered nurse with advanced qualifications?",
            type: 'open-ended',
            answer: "nurse practitioner",
            tolerance: 2
        },
        {
            question: "A professional who helps patients with breathing difficulties.",
            type: 'open-ended',
            answer: "respiratory therapist",
            tolerance: 2
        },
        {
            question: "Which professional treats mental health disorders?",
            type: 'multiple-choice',
            options: ["psychologist", "counsellor", "psychiatrist", "therapist"],
            answer: "psychiatrist"
        },
        {
            question: "A medical doctor who specializes in mental illness.",
            type: 'open-ended',
            answer: "psychiatrist",
            tolerance: 1
        },
        {
            question: "What is a professional who studies the mind and behaviour called?",
            type: 'open-ended',
            answer: "psychologist",
            tolerance: 1
        },
        {
            question: "Which professional provides therapy for mental or emotional issues?",
            type: 'multiple-choice',
            options: ["psychologist", "psychiatrist", "therapist", "social worker"],
            answer: "therapist"
        },
        {
            question: "A professional who helps people manage personal problems through discussion.",
            type: 'open-ended',
            answer: "counsellor",
            tolerance: 1
        },
        {
            question: "What do you call a professional who helps people deal with physical or mental illness?",
            type: 'open-ended',
            answer: "therapist",
            tolerance: 1
        },
        {
            question: "A professional who helps people regain physical strength and movement.",
            type: 'open-ended',
            answer: "physiotherapist",
            tolerance: 1
        },
        {
            question: "Which professional helps patients improve their daily living skills?",
            type: 'multiple-choice',
            options: ["physiotherapist", "speech therapist", "occupational therapist", "dietitian"],
            answer: "occupational therapist"
        },
        {
            question: "A professional who helps people develop or recover abilities needed for daily activities.",
            type: 'open-ended',
            answer: "occupational therapist",
            tolerance: 2
        },
        {
            question: "What is a professional who diagnoses and treats speech and language disorders?",
            type: 'open-ended',
            answer: "speech therapist",
            tolerance: 2
        },
        {
            question: "A professional who advises people on nutrition and diet.",
            type: 'open-ended',
            answer: "dietitian",
            tolerance: 1
        },
        {
            question: "Which professional advises on managing finances?",
            type: 'multiple-choice',
            options: ["accountant", "banker", "financial advisor", "stockbroker"],
            answer: "financial advisor"
        },
        {
            question: "What do you call a person who manages investments for clients?",
            type: 'open-ended',
            answer: "financial advisor",
            tolerance: 2
        },
        {
            question: "A professional who works with money and investments.",
            type: 'open-ended',
            answer: "banker",
            tolerance: 1
        },
        {
            question: "Which professional designs and develops software applications?",
            type: 'multiple-choice',
            options: ["programmer", "IT technician", "software engineer", "data analyst"],
            answer: "software engineer"
        },
        {
            question: "A person who designs, develops, and maintains software.",
            type: 'open-ended',
            answer: "software engineer",
            tolerance: 2
        },
        {
            question: "What is a professional who writes code for computer programs called?",
            type: 'open-ended',
            answer: "programmer",
            tolerance: 1
        },
        {
            question: "A professional who tests software for errors.",
            type: 'open-ended',
            answer: "software tester",
            tolerance: 2
        },
        {
            question: "Which professional manages computer systems and networks?",
            type: 'multiple-choice',
            options: ["programmer", "developer", "system administrator", "cybersecurity expert"],
            answer: "system administrator"
        },
        {
            question: "A person responsible for the upkeep, configuration, and reliable operation of computer systems.",
            type: 'open-ended',
            answer: "system administrator",
            tolerance: 2
        },
        {
            question: "What do you call a professional who specializes in protecting computer systems from cyber threats?",
            type: 'open-ended',
            answer: "cybersecurity expert",
            tolerance: 2
        },
        {
            question: "A professional who analyzes data to find insights.",
            type: 'open-ended',
            answer: "data analyst",
            tolerance: 2
        },
        {
            question: "Which professional designs the look and feel of websites and applications?",
            type: 'multiple-choice',
            options: ["developer", "programmer", "web designer", "UX designer"],
            answer: "web designer"
        },
        {
            question: "A person who designs the user interface and user experience of websites and apps.",
            type: 'open-ended',
            answer: "web designer",
            tolerance: 2
        },
        {
            question: "What is a professional who focuses on improving user satisfaction with a product or service?",
            type: 'open-ended',
            answer: "UX designer",
            tolerance: 2
        },
        // here we are
        [
            {
                question: "A professional who manages projects.",
                type: 'open-ended',
                answer: "project manager",
                tolerance: 2
            },
            {
                question: "Which professional is responsible for the financial planning and analysis of a company?",
                type: 'multiple-choice',
                options: ["accountant", "treasurer", "financial analyst", "auditor"],
                answer: "financial analyst"
            },
            {
                question: "A person who analyzes financial data and advises businesses.",
                type: 'open-ended',
                answer: "financial analyst",
                tolerance: 2
            },
            {
                question: "What do you call a professional who checks a company's financial records?",
                type: 'open-ended',
                answer: "auditor",
                tolerance: 1
            },
            {
                question: "Which professional is involved in buying and selling stocks and shares?",
                type: 'multiple-choice',
                options: ["accountant", "financial advisor", "stockbroker", "banker"],
                answer: "stockbroker"
            },
            {
                question: "A person who buys and sells stocks and shares for others.",
                type: 'open-ended',
                answer: "stockbroker",
                tolerance: 1
            },
            {
                question: "What is a person who provides advice on personal finance called?",
                type: 'open-ended',
                answer: "financial advisor",
                tolerance: 2
            },
            {
                question: "A professional who works in a bank.",
                type: 'open-ended',
                answer: "banker",
                tolerance: 1
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
                question: "A person whose job is to compose music for films.",
                type: 'open-ended',
                answer: "film composer",
                tolerance: 2
            },
            {
                question: "Which professional records sound on a film set?",
                type: 'multiple-choice',
                options: ["sound editor", "sound mixer", "sound recordist", "boom operator"],
                answer: "sound recordist"
            },
            {
                question: "A person responsible for recording audio during filming.",
                type: 'open-ended',
                answer: "sound recordist",
                tolerance: 2
            },
            {
                question: "What is the person who operates the boom microphone on a film set called?",
                type: 'open-ended',
                answer: "boom operator",
                tolerance: 2
            },
            {
                question: "A professional who mixes the audio tracks for a film or TV show.",
                type: 'open-ended',
                answer: "sound mixer",
                tolerance: 2
            },
            {
                question: "Which professional designs the lighting for theatre or film?",
                type: 'multiple-choice',
                options: ["cinematographer", "set designer", "lighting designer", "technical director"],
                answer: "lighting designer"
            },
            {
                question: "A person who designs and implements the lighting for a stage production or film.",
                type: 'open-ended',
                answer: "lighting designer",
                tolerance: 2
            },
            {
                question: "What do you call the person who manages the stage during a theatre performance?",
                type: 'open-ended',
                answer: "stage manager",
                tolerance: 2
            },
            {
                question: "A professional who works backstage in a theatre.",
                type: 'open-ended',
                answer: "stagehand",
                tolerance: 1
            },
            {
                question: "Which professional designs and makes costumes for performances?",
                type: 'multiple-choice',
                options: ["fashion designer", "stylist", "costume designer", "seamstress"],
                answer: "costume designer"
            },
            {
                question: "A person who designs or makes costumes for theatrical or film productions.",
                type: 'open-ended',
                answer: "costume designer",
                tolerance: 2
            },
            {
                question: "What is a professional who applies makeup and does hair for performers called?",
                type: 'open-ended',
                answer: "makeup artist",
                tolerance: 2
            },
            {
                question: "A person whose job is to do hair and makeup for actors or models.",
                type: 'open-ended',
                answer: "hair and makeup artist",
                tolerance: 3
            },
            {
                question: "Which professional manages actors and other performers?",
                type: 'multiple-choice',
                options: ["director", "producer", "agent", "talent manager"],
                answer: "talent manager"
            },
            {
                question: "A person who represents actors or performers to get them work.",
                type: 'open-ended',
                answer: "agent",
                tolerance: 1
            },
            {
                question: "What do you call a professional who negotiates contracts for performers?",
                type: 'open-ended',
                answer: "agent",
                tolerance: 1
            },
            {
                question: "A professional who creates and leads dance routines.",
                type: 'open-ended',
                answer: "choreographer",
                tolerance: 1
            },
            {
                question: "Which professional performs acrobatic feats, often high in the air?",
                type: 'multiple-choice',
                options: ["dancer", "gymnast", "aerialist", "stunt performer"],
                answer: "aerialist"
            },
            {
                question: "A person who performs acrobatic or artistic feats in the air, typically on aerial silks, trapeze, or hoop.",
                type: 'open-ended',
                answer: "aerialist",
                tolerance: 1
            },
            {
                question: "What is a professional who works in a zoo, caring for the animals?",
                type: 'open-ended',
                answer: "zookeeper",
                tolerance: 1
            },
            {
                question: "A person whose job is to clean and groom animals.",
                type: 'open-ended',
                answer: "animal groomer",
                tolerance: 2
            },
            {
                question: "Which professional works with birds?",
                type: 'multiple-choice',
                options: ["zoologist", "ornithologist", "veterinarian", "ethologist"],
                answer: "ornithologist"
            },
            {
                question: "A person who studies birds.",
                type: 'open-ended',
                answer: "ornithologist",
                tolerance: 1
            },
            {
                question: "What do you call a professional who studies marine life?",
                type: 'open-ended',
                answer: "marine biologist",
                tolerance: 2
            },
            {
                question: "A person whose job is to study fish.",
                type: 'open-ended',
                answer: "ichthyologist",
                tolerance: 2
            },
            {
                question: "Which professional studies insects?",
                type: 'multiple-choice',
                options: ["biologist", "zoologist", "entomologist", "botanist"],
                answer: "entomologist"
            },
            {
                question: "A person who studies insects.",
                type: 'open-ended',
                answer: "entomologist",
                tolerance: 1
            },
            {
                question: "What is a professional who studies plants called?",
                type: 'open-ended',
                answer: "botanist",
                tolerance: 1
            },
            {
                question: "A person whose job is to manage forests.",
                type: 'open-ended',
                answer: "forester",
                tolerance: 1
            },
            {
                question: "Which professional works in agriculture?",
                type: 'multiple-choice',
                options: ["gardener", "landscaper", "farmer", "logger"],
                answer: "farmer"
            },
            {
                question: "What do you call a person who works on a farm?",
                type: 'open-ended',
                answer: "farm worker",
                tolerance: 2
            },
            {
                question: "A professional who takes care of livestock.",
                type: 'open-ended',
                answer: "herdsman",
                tolerance: 1
            },
            {
                question: "Which professional works with metal, usually shaping it by hand?",
                type: 'multiple-choice',
                options: ["welder", "mason", "blacksmith", "engineer"],
                answer: "blacksmith"
            },
            {
                question: "A person who makes and repairs things made of iron by hand.",
                type: 'open-ended',
                answer: "blacksmith",
                tolerance: 1
            },
            {
                question: "What do you call a professional who joins metal together using heat?",
                type: 'open-ended',
                answer: "welder",
                tolerance: 1
            },
            {
                question: "A professional who works with metal to create or repair things.",
                type: 'open-ended',
                answer: "metalworker",
                tolerance: 1
            },
            {
                question: "Which professional creates objects from clay?",
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
                question: "What is a professional who makes things from glass by blowing air into molten glass called?",
                type: 'open-ended',
                answer: "glassblower",
                tolerance: 1
            },
            {
                question: "A professional who designs and makes jewellery.",
                type: 'open-ended',
                answer: "jeweller",
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
                question: "What do you call a professional who makes or alters clothes for women?",
                type: 'open-ended',
                answer: "dressmaker",
                tolerance: 1
            },
            {
                question: "A professional who makes or alters clothes, especially suits, for men.",
                type: 'open-ended',
                answer: "tailor",
                tolerance: 1
            },
            {
                question: "Which professional works in a kitchen, responsible for a specific area?",
                type: 'multiple-choice',
                options: ["cook", "chef", "line cook", "kitchen porter"],
                answer: "line cook"
            },
            {
                question: "A cook who works on a specific station in a professional kitchen.",
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
                question: "A person who cleans and does manual tasks in a restaurant kitchen.",
                type: 'open-ended',
                answer: "kitchen porter",
                tolerance: 2
            },
            {
                question: "Which professional serves drinks at a bar?",
                type: 'multiple-choice',
                options: ["waiter", "barista", "bartender", "sommelier"],
                answer: "bartender"
            },
            {
                question: "A person who makes and serves coffee drinks.",
                type: 'open-ended',
                answer: "barista",
                tolerance: 1
            },
            {
                question: "What do you call a professional who specializes in wine?",
                type: 'open-ended',
                answer: "sommelier",
                tolerance: 1
            },
            {
                question: "A professional who serves food and drinks in a restaurant.",
                type: 'open-ended',
                answer: "waiter",
                tolerance: 1
            },
            {
                question: "Which professional works at the front desk of a hotel?",
                type: 'multiple-choice',
                options: ["concierge", "porter", "receptionist", "manager"],
                answer: "receptionist"
            },
            {
                question: "A person whose job is to welcome guests and manage bookings in a hotel.",
                type: 'open-ended',
                answer: "receptionist",
                tolerance: 1
            },
            {
                question: "What is a professional who helps hotel guests with services and information called?",
                type: 'open-ended',
                answer: "concierge",
                tolerance: 1
            },
            {
                question: "A professional who carries luggage at a hotel or station.",
                type: 'open-ended',
                answer: "porter",
                tolerance: 1
            },
            {
                question: "Which professional cleans hotel rooms?",
                type: 'multiple-choice',
                options: ["janitor", "caretaker", "housekeeper", "room attendant"],
                answer: "room attendant"
            },
            {
                question: "A person whose job is to clean and maintain hotel rooms.",
                type: 'open-ended',
                answer: "room attendant",
                tolerance: 2
            },
            {
                question: "What do you call a professional who manages a large house and its staff?",
                type: 'open-ended',
                answer: "butler",
                tolerance: 1
            },
            {
                question: "A professional cook employed by a private family.",
                type: 'open-ended',
                answer: "private chef",
                tolerance: 2
            },
            {
                question: "Which professional delivers mail?",
                type: 'multiple-choice',
                options: ["messenger", "courier", "postman", "delivery driver"],
                answer: "postman"
            },
            {
                question: "A person whose job is to deliver letters and parcels to people's houses.",
                type: 'open-ended',
                answer: "postman",
                tolerance: 1
            },
            {
                question: "What is a professional who delivers packages quickly called?",
                type: 'open-ended',
                answer: "courier",
                tolerance: 1
            },
            {
                question: "A professional who delivers messages by hand.",
                type: 'open-ended',
                answer: "messenger",
                tolerance: 1
            },
            {
                question: "Which professional works in a post office?",
                type: 'multiple-choice',
                options: ["postman", "courier", "postal worker", "clerk"],
                answer: "postal worker"
            },
            {
                question: "A person who works for the postal service.",
                type: 'open-ended',
                answer: "postal worker",
                tolerance: 2
            },
            {
                question: "What do you call a professional who drives people in a car for a fee?",
                type: 'open-ended',
                answer: "taxi driver",
                tolerance: 2
            },
            {
                question: "A professional who drives a bus.",
                type: 'open-ended',
                answer: "bus driver",
                tolerance: 2
            },
            {
                question: "Which professional drives large trucks?",
                type: 'multiple-choice',
                options: ["driver", "chauffeur", "truck driver", "operator"],
                answer: "truck driver"
            },
            {
                question: "A person whose job is to drive heavy goods vehicles.",
                type: 'open-ended',
                answer: "truck driver",
                tolerance: 2
            },
            {
                question: "What is a professional who is employed to drive a private car for someone else called?",
                type: 'open-ended',
                answer: "chauffeur",
                tolerance: 1
            },
            {
                question: "A professional who drives a train.",
                type: 'open-ended',
                answer: "train driver",
                tolerance: 2
            },
            {
                question: "Which professional works on a train, assisting passengers?",
                type: 'multiple-choice',
                options: ["driver", "conductor", "attendant", "ticket inspector"],
                answer: "attendant"
            },
            {
                question: "A person who assists passengers on a train or other public transport.",
                type: 'open-ended',
                answer: "attendant",
                tolerance: 1
            },
            {
                question: "What do you call a professional who checks tickets on public transport?",
                type: 'open-ended',
                answer: "ticket inspector",
                tolerance: 2
            },
            {
                question: "A professional who sells tickets.",
                type: 'open-ended',
                answer: "ticket agent",
                tolerance: 2
            },
            {
                question: "Which professional works at an airport?",
                type: 'multiple-choice',
                options: ["pilot", "flight attendant", "air traffic controller", "all of the above"],
                answer: "all of the above"
            },
            {
                question: "What is a person whose job is to fly an aircraft called?",
                type: 'open-ended',
                answer: "pilot",
                tolerance: 1
            },
            {
                question: "A professional who assists passengers during a flight.",
                type: 'open-ended',
                answer: "flight attendant",
                tolerance: 2
            },
            {
                question: "Which professional manages air traffic?",
                type: 'multiple-choice',
                options: ["pilot", "captain", "air traffic controller", "ground crew"],
                answer: "air traffic controller"
            },
            {
                question: "A person whose job is to manage the movement of aircraft at an airport.",
                type: 'open-ended',
                answer: "air traffic controller",
                tolerance: 3
            },
            {
                question: "What do you call a professional who works on the ground at an airport?",
                type: 'open-ended',
                answer: "ground crew",
                tolerance: 2
            },
            {
                question: "A professional who cleans aircraft.",
                type: 'open-ended',
                answer: "aircraft cleaner",
                tolerance: 2
            },
            {
                question: "Which professional works in a factory, operating machinery?",
                type: 'multiple-choice',
                options: ["engineer", "technician", "operator", "foreman"],
                answer: "operator"
            },
            {
                question: "A person whose job is to operate machinery in a factory.",
                type: 'open-ended',
                answer: "machine operator",
                tolerance: 2
            },
            {
                question: "What is a professional who supervises workers in a factory called?",
                type: 'open-ended',
                answer: "supervisor",
                tolerance: 1
            },
            {
                question: "A professional who performs quality control checks on products.",
                type: 'open-ended',
                answer: "quality inspector",
                tolerance: 2
            },
            {
                question: "Which professional works in a warehouse, managing goods?",
                type: 'multiple-choice',
                options: ["packer", "forklift operator", "warehouse worker", "manager"],
                answer: "warehouse worker"
            },
            {
                question: "A person who works in a warehouse, handling storage and movement of goods.",
                type: 'open-ended',
                answer: "warehouse worker",
                tolerance: 2
            },
            {
                question: "What do you call a professional who operates a forklift?",
                type: 'open-ended',
                answer: "forklift operator",
                tolerance: 2
            },
            {
                question: "A professional who packs goods.",
                type: 'open-ended',
                answer: "packer",
                tolerance: 1
            },
            {
                question: "Which professional works in construction, operating heavy machinery?",
                type: 'multiple-choice',
                options: ["builder", "engineer", "operator", "heavy equipment operator"],
                answer: "heavy equipment operator"
            },
            {
                question: "A person whose job is to operate heavy machinery on a construction site.",
                type: 'open-ended',
                answer: "heavy equipment operator",
                tolerance: 3
            },
            {
                question: "What is a professional who operates a crane called?",
                type: 'open-ended',
                answer: "crane operator",
                tolerance: 2
            },
            {
                question: "A professional who works on a construction site, performing physical tasks.",
                type: 'open-ended',
                answer: "construction worker",
                tolerance: 2
            },
            {
                question: "Which professional provides care for animals in a zoo?",
                type: 'multiple-choice',
                options: ["veterinarian", "animal trainer", "zookeeper", "biologist"],
                answer: "zookeeper"
            },
            {
                question: "A person whose job is to look after animals in a zoo.",
                type: 'open-ended',
                answer: "zookeeper",
                tolerance: 1
            },
            {
                question: "What do you call a professional who trains animals?",
                type: 'open-ended',
                answer: "animal trainer",
                tolerance: 2
            },
            {
                question: "A professional who cleans and grooms animals.",
                type: 'open-ended',
                answer: "animal groomer",
                tolerance: 2
            },
            {
                question: "Which professional works with leather?",
                type: 'multiple-choice',
                options: ["tailor", "shoemaker", "leatherworker", "cobbler"],
                answer: "leatherworker"
            },
            {
                question: "A person who makes things from leather.",
                type: 'open-ended',
                answer: "leatherworker",
                tolerance: 1
            },
            {
                question: "What is a professional who makes or repairs shoes called?",
                type: 'open-ended',
                answer: "shoemaker",
                tolerance: 1
            },
            {
                question: "A professional who repairs shoes.",
                type: 'open-ended',
                answer: "cobbler",
                tolerance: 1
            },
            {
                question: "Which professional works with glass?",
                type: 'multiple-choice',
                options: ["glazier", "ceramist", "glassblower", "jeweller"],
                answer: "glassworker"
            },
            {
                question: "A person who works with glass, making or repairing things.",
                type: 'open-ended',
                answer: "glassworker",
                tolerance: 1
            },
            {
                question: "What do you call a professional who fits glass into windows?",
                type: 'open-ended',
                answer: "glazier",
                tolerance: 1
            },
            {
                question: "A professional who makes objects by blowing glass.",
                type: 'open-ended',
                answer: "glassblower",
                tolerance: 1
            },
            {
                question: "Which professional specializes in diagnosing diseases?",
                type: 'multiple-choice',
                options: ["surgeon", "pathologist", "radiologist", "pharmacist"],
                answer: "pathologist"
            },
            {
                question: "A medical doctor who specializes in studying diseases.",
                type: 'open-ended',
                answer: "pathologist",
                tolerance: 1
            },
            {
                question: "What is a professional who specializes in diagnosing illnesses using X-rays and scans called?",
                type: 'open-ended',
                answer: "radiologist",
                tolerance: 1
            },
            {
                question: "A professional who specializes in administering anesthesia.",
                type: 'open-ended',
                answer: "anesthesiologist",
                tolerance: 2
            },
            {
                question: "Which professional helps patients manage pain?",
                type: 'multiple-choice',
                options: ["surgeon", "anesthesiologist", "pain specialist", "pharmacist"],
                answer: "pain specialist"
            },
            {
                question: "A medical doctor specializing in the treatment of pain.",
                type: 'open-ended',
                answer: "pain specialist",
                tolerance: 2
            },
            {
                question: "What do you call a professional who specializes in conditions related to the elderly?",
                type: 'open-ended',
                answer: "geriatrician",
                tolerance: 1
            },
            {
                question: "A medical doctor specializing in the health of older people.",
                type: 'open-ended',
                answer: "geriatrician",
                tolerance: 1
            },
            {
                question: "Which professional helps people with vision problems?",
                type: 'multiple-choice',
                options: ["ophthalmologist", "optometrist", "optician", "all of the above"],
                answer: "all of the above"
            },
            {
                question: "A medical doctor who specializes in eye surgery.",
                type: 'open-ended',
                answer: "ophthalmologist",
                tolerance: 1
            },
            {
                question: "What is a professional who tests eyesight and prescribes glasses called?",
                type: 'open-ended',
                answer: "optometrist",
                tolerance: 1
            },
            {
                question: "A professional who fits and sells glasses and contact lenses.",
                type: 'open-ended',
                answer: "optician",
                tolerance: 1
            },
            {
                question: "Which professional specializes in treating kidney diseases?",
                type: 'multiple-choice',
                options: ["cardiologist", "pulmonologist", "nephrologist", "neurologist"],
                answer: "nephrologist"
            },
            {
                question: "A medical doctor who specializes in kidney diseases.",
                type: 'open-ended',
                answer: "nephrologist",
                tolerance: 1
            },
            {
                question: "What do you call a professional who specializes in skin diseases?",
                type: 'open-ended',
                answer: "dermatologist",
                tolerance: 1
            },
            {
                question: "A medical doctor specializing in disorders of the skin.",
                type: 'open-ended',
                answer: "dermatologist",
                tolerance: 1
            },
            {
                question: "Which professional specializes in disorders of the nervous system?",
                type: 'multiple-choice',
                options: ["psychiatrist", "neurologist", "cardiologist", "endocrinologist"],
                answer: "neurologist"
            },
            {
                question: "A medical doctor who specializes in the nervous system.",
                type: 'open-ended',
                answer: "neurologist",
                tolerance: 1
            },
            {
                question: "What is a professional who specializes in hormone-related diseases called?",
                type: 'open-ended',
                answer: "endocrinologist",
                tolerance: 1
            },
            {
                question: "A medical doctor specializing in conditions of the endocrine system.",
                type: 'open-ended',
                answer: "endocrinologist",
                tolerance: 1
            },
            {
                question: "Which professional specializes in the study of genes and heredity?",
                type: 'multiple-choice',
                options: ["biologist", "geneticist", "microbiologist", "biochemist"],
                answer: "geneticist"
            },
            {
                question: "A scientist who studies genes.",
                type: 'open-ended',
                answer: "geneticist",
                tolerance: 1
            },
            {
                question: "What do you call a professional who studies microorganisms?",
                type: 'open-ended',
                answer: "microbiologist",
                tolerance: 1
            },
            {
                question: "A scientist who studies microorganisms.",
                type: 'open-ended',
                answer: "microbiologist",
                tolerance: 1
            },
            {
                question: "Which professional studies the chemistry of living organisms?",
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
                question: "What is a professional who studies the physical processes of living organisms called?",
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
                question: "Which professional specializes in studying cells?",
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
                question: "What do you call a professional who studies the structure of living organisms?",
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
                question: "Which professional studies the behaviour of animals?",
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
                question: "What is a professional who studies animal life called?",
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
            },// here we are
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

                {
                    question: "A professional who designs visual content for various media.",
                    type: 'open-ended',
                    answer: "graphic designer",
                    tolerance: 2
                },
                {
                    question: "Which professional writes content for websites, blogs, or articles?",
                    type: 'multiple-choice',
                    options: ["editor", "journalist", "content writer", "copywriter"],
                    answer: "content writer"
                },
                {
                    question: "What do you call a professional who writes text for advertisements or marketing?",
                    type: 'open-ended',
                    answer: "copywriter",
                    tolerance: 1
                },
                {
                    question: "A person whose job is to write articles for newspapers or magazines.",
                    type: 'open-ended',
                    answer: "journalist",
                    tolerance: 1
                },
                {
                    question: "Which professional takes photographs professionally?",
                    type: 'multiple-choice',
                    options: ["artist", "illustrator", "photographer", "cinematographer"],
                    answer: "photographer"
                },
                {
                    question: "What is a person who directs the photography in a film called?",
                    type: 'open-ended',
                    answer: "cinematographer",
                    tolerance: 3
                },
                {
                    question: "A professional who operates a film or video camera.",
                    type: 'open-ended',
                    answer: "camera operator",
                    tolerance: 2
                },
                {
                    question: "Which professional edits film or video footage?",
                    type: 'multiple-choice',
                    options: ["director", "producer", "editor", "sound engineer"],
                    answer: "editor"
                },
                {
                    question: "A person who cuts and assembles film, video, or audio recordings.",
                    type: 'open-ended',
                    answer: "editor",
                    tolerance: 2
                },
                {
                    question: "What do you call a professional who is in charge of the overall artistic and technical aspects of a film?",
                    type: 'open-ended',
                    answer: "director",
                    tolerance: 1
                },
                {
                    question: "A professional who oversees the production of a film.",
                    type: 'open-ended',
                    answer: "producer",
                    tolerance: 1
                },
                {
                    question: "Which professional performs in plays or films?",
                    type: 'multiple-choice',
                    options: ["director", "writer", "actor", "producer"],
                    answer: "actor"
                },
                {
                    question: "A person who performs dramatic roles in theatre, film, or television.",
                    type: 'open-ended',
                    answer: "actor",
                    tolerance: 1
                },
                {
                    question: "What is a professional who performs dangerous stunts called?",
                    type: 'open-ended',
                    answer: "stunt performer",
                    tolerance: 2
                },
                {
                    question: "A professional who coordinates stunts in films.",
                    type: 'open-ended',
                    answer: "stunt coordinator",
                    tolerance: 2
                },
                {
                    question: "Which professional sings professionally?",
                    type: 'multiple-choice',
                    options: ["musician", "composer", "singer", "conductor"],
                    answer: "singer"
                },
                {
                    question: "A person who performs music, either by singing or playing an instrument.",
                    type: 'open-ended',
                    answer: "musician",
                    tolerance: 1
                },
                {
                    question: "What do you call a professional who writes music?",
                    type: 'open-ended',
                    answer: "composer",
                    tolerance: 1
                },
                {
                    question: "A professional who leads an orchestra or choir.",
                    type: 'open-ended',
                    answer: "conductor",
                    tolerance: 1
                },
                {
                    question: "Which professional dances professionally?",
                    type: 'multiple-choice',
                    options: ["musician", "singer", "dancer", "choreographer"],
                    answer: "dancer"
                },
                {
                    question: "A person who performs dance as a profession.",
                    type: 'open-ended',
                    answer: "dancer",
                    tolerance: 1
                },
                {
                    question: "What is a professional who creates and arranges dances called?",
                    type: 'open-ended',
                    answer: "choreographer",
                    tolerance: 1
                },
                {
                    question: "A professional who manages a museum or art gallery.",
                    type: 'open-ended',
                    answer: "curator",
                    tolerance: 1
                },
                {
                    question: "Which professional works in a library?",
                    type: 'multiple-choice',
                    options: ["archivist", "bookseller", "librarian", "publisher"],
                    answer: "librarian"
                },
                {
                    question: "A person who works in a library.",
                    type: 'open-ended',
                    answer: "librarian",
                    tolerance: 1
                },
                {
                    question: "What do you call a professional who preserves historical documents?",
                    type: 'open-ended',
                    answer: "archivist",
                    tolerance: 1
                },
                {
                    question: "A professional who writes books.",
                    type: 'open-ended',
                    answer: "author",
                    tolerance: 1
                },
                {
                    question: "Which professional writes plays for the theatre?",
                    type: 'multiple-choice',
                    options: ["novelist", "poet", "screenwriter", "playwright"],
                    answer: "playwright"
                },
                {
                    question: "A person who writes plays.",
                    type: 'open-ended',
                    answer: "playwright",
                    tolerance: 1
                },
                {
                    question: "What is a professional who writes screenplays for films or television called?",
                    type: 'open-ended',
                    answer: "screenwriter",
                    tolerance: 1
                },
                {
                    question: "A professional who writes novels.",
                    type: 'open-ended',
                    answer: "novelist",
                    tolerance: 1
                },
                {
                    question: "Which professional writes poetry?",
                    type: 'multiple-choice',
                    options: ["writer", "author", "poet", "lyricist"],
                    answer: "poet"
                },
                {
                    question: "What do you call a professional who writes song lyrics?",
                    type: 'open-ended',
                    answer: "lyricist",
                    tolerance: 1
                },
                {
                    question: "A professional who reviews books, films, or music.",
                    type: 'open-ended',
                    answer: "critic",
                    tolerance: 1
                },
                {
                    question: "Which professional works in journalism, reporting news?",
                    type: 'multiple-choice',
                    options: ["editor", "publisher", "reporter", "presenter"],
                    answer: "reporter"
                },
                {
                    question: "A person whose job is to report news.",
                    type: 'open-ended',
                    answer: "reporter",
                    tolerance: 1
                },
                {
                    question: "What is a professional who presents news or shows on television or radio called?",
                    type: 'open-ended',
                    answer: "presenter",
                    tolerance: 1
                },
                {
                    question: "A professional who works in a printing company.",
                    type: 'open-ended',
                    answer: "printer",
                    tolerance: 1
                },
                {
                    question: "Which professional works for a publishing company?",
                    type: 'multiple-choice',
                    options: ["writer", "editor", "publisher", "bookseller"],
                    answer: "publisher"
                },
                {
                    question: "What do you call a professional who sells books?",
                    type: 'open-ended',
                    answer: "bookseller",
                    tolerance: 1
                },
                {
                    question: "A professional who designs and manages the layout of books or magazines.",
                    type: 'open-ended',
                    answer: "layout designer",
                    tolerance: 2
                },
                {
                    question: "Which professional builds houses?",
                    type: 'multiple-choice',
                    options: ["architect", "engineer", "builder", "carpenter"],
                    answer: "builder"
                },
                {
                    question: "A person whose job is to build or repair buildings.",
                    type: 'open-ended',
                    answer: "builder",
                    tolerance: 1
                },
                {
                    question: "What is a professional who works with wood called?",
                    type: 'open-ended',
                    answer: "carpenter",
                    tolerance: 1
                },
                {
                    question: "A professional who installs and repairs roofs.",
                    type: 'open-ended',
                    answer: "roofer",
                    tolerance: 1
                },
                {
                    question: "Which professional lays bricks or stones?",
                    type: 'multiple-choice',
                    options: ["builder", "carpenter", "mason", "plasterer"],
                    answer: "mason"
                },
                {
                    question: "A person who builds with stone or brick.",
                    type: 'open-ended',
                    answer: "mason",
                    tolerance: 1
                },
                {
                    question: "What do you call a professional who applies plaster to walls and ceilings?",
                    type: 'open-ended',
                    answer: "plasterer",
                    tolerance: 1
                },
                {
                    question: "A professional who paints buildings.",
                    type: 'open-ended',
                    answer: "painter",
                    tolerance: 1
                },
                {
                    question: "Which professional installs and repairs windows?",
                    type: 'multiple-choice',
                    options: ["carpenter", "glazier", "builder", "handyman"],
                    answer: "glazier"
                },
                {
                    question: "A person who fits glass into windows and doors.",
                    type: 'open-ended',
                    answer: "glazier",
                    tolerance: 1
                },
                {
                    question: "What is a professional who does various small repair jobs called?",
                    type: 'open-ended',
                    answer: "handyman",
                    tolerance: 1
                },
                {
                    question: "A professional who cleans chimneys.",
                    type: 'open-ended',
                    answer: "chimney sweep",
                    tolerance: 2
                },
                {
                    question: "Which professional works with metal, usually shaping it by hand?",
                    type: 'multiple-choice',
                    options: ["welder", "engineer", "blacksmith", "metalworker"],
                    answer: "blacksmith"
                },
                {
                    question: "A person who makes and repairs things made of iron, often using traditional methods.",
                    type: 'open-ended',
                    answer: "blacksmith",
                    tolerance: 1
                },
                {
                    question: "What do you call a professional who joins metal together using heat?",
                    type: 'open-ended',
                    answer: "welder",
                    tolerance: 1
                },
                {
                    question: "A professional who works with metal to create or repair things.",
                    type: 'open-ended',
                    answer: "metalworker",
                    tolerance: 1
                },
                {
                    question: "Which professional creates objects from clay?",
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
                    question: "What is a professional who makes things from glass by blowing air into molten glass called?",
                    type: 'open-ended',
                    answer: "glassblower",
                    tolerance: 1
                },
                {
                    question: "A professional who designs and makes jewellery.",
                    type: 'open-ended',
                    answer: "jeweller",
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
                    question: "What do you call a professional who makes or alters clothes for women?",
                    type: 'open-ended',
                    answer: "dressmaker",
                    tolerance: 1
                },
                {
                    question: "A professional who makes or alters clothes, especially suits, for men.",
                    type: 'open-ended',
                    answer: "tailor",
                    tolerance: 1
                },
                {
                    question: "Which professional works in a kitchen, responsible for a specific area?",
                    type: 'multiple-choice',
                    options: ["cook", "chef", "line cook", "kitchen porter"],
                    answer: "line cook"
                },
                {
                    question: "A cook who works on a specific station in a professional kitchen.",
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
                    question: "A person who cleans and does manual tasks in a restaurant kitchen.",
                    type: 'open-ended',
                    answer: "kitchen porter",
                    tolerance: 2
                },
                {
                    question: "Which professional serves drinks at a bar?",
                    type: 'multiple-choice',
                    options: ["waiter", "barista", "bartender", "sommelier"],
                    answer: "bartender"
                },
                {
                    question: "A person who makes and serves coffee drinks.",
                    type: 'open-ended',
                    answer: "barista",
                    tolerance: 1
                },
                {
                    question: "What do you call a professional who specializes in wine?",
                    type: 'open-ended',
                    answer: "sommelier",
                    tolerance: 1
                },
                {
                    question: "A professional who serves food and drinks in a restaurant.",
                    type: 'open-ended',
                    answer: "waiter",
                    tolerance: 1
                },
                {
                    question: "Which professional works at the front desk of a hotel?",
                    type: 'multiple-choice',
                    options: ["concierge", "porter", "receptionist", "manager"],
                    answer: "receptionist"
                },
                {
                    question: "A person whose job is to welcome guests and manage bookings in a hotel.",
                    type: 'open-ended',
                    answer: "receptionist",
                    tolerance: 1
                },
                {
                    question: "What is a professional who helps hotel guests with services and information called?",
                    type: 'open-ended',
                    answer: "concierge",
                    tolerance: 1
                },
                {
                    question: "A professional who carries luggage at a hotel or station.",
                    type: 'open-ended',
                    answer: "porter",
                    tolerance: 1
                },
                {
                    question: "Which professional cleans hotel rooms?",
                    type: 'multiple-choice',
                    options: ["janitor", "caretaker", "housekeeper", "room attendant"],
                    answer: "room attendant"
                },
                {
                    question: "A person whose job is to clean and maintain hotel rooms.",
                    type: 'open-ended',
                    answer: "room attendant",
                    tolerance: 2
                },
                {
                    question: "What do you call a professional who manages a large house and its staff?",
                    type: 'open-ended',
                    answer: "butler",
                    tolerance: 1
                },
                {
                    question: "A professional cook employed by a private family.",
                    type: 'open-ended',
                    answer: "private chef",
                    tolerance: 2
                },
                {
                    question: "Which professional delivers mail?",
                    type: 'multiple-choice',
                    options: ["messenger", "courier", "postman", "delivery driver"],
                    answer: "postman"
                },
                {
                    question: "A person whose job is to deliver letters and parcels to people's houses.",
                    type: 'open-ended',
                    answer: "postman",
                    tolerance: 1
                },
                {
                    question: "What is a professional who delivers packages quickly called?",
                    type: 'open-ended',
                    answer: "courier",
                    tolerance: 1
                },
                {
                    question: "A professional who delivers messages by hand.",
                    type: 'open-ended',
                    answer: "messenger",
                    tolerance: 1
                },
                {
                    question: "Which professional works in a post office?",
                    type: 'multiple-choice',
                    options: ["postman", "courier", "postal worker", "clerk"],
                    answer: "postal worker"
                },
                {
                    question: "A person who works for the postal service.",
                    type: 'open-ended',
                    answer: "postal worker",
                    tolerance: 2
                },
                {
                    question: "What do you call a professional who drives people in a car for a fee?",
                    type: 'open-ended',
                    answer: "taxi driver",
                    tolerance: 2
                },
                {
                    question: "A professional who drives a bus.",
                    type: 'open-ended',
                    answer: "bus driver",
                    tolerance: 2
                },
                {
                    question: "Which professional drives large trucks?",
                    type: 'multiple-choice',
                    options: ["driver", "chauffeur", "truck driver", "operator"],
                    answer: "truck driver"
                },
                {
                    question: "A person whose job is to drive heavy goods vehicles.",
                    type: 'open-ended',
                    answer: "truck driver",
                    tolerance: 2
                },
                {
                    question: "What is a professional who is employed to drive a private car for someone else called?",
                    type: 'open-ended',
                    answer: "chauffeur",
                    tolerance: 1
                },
                {
                    question: "A professional who drives a train.",
                    type: 'open-ended',
                    answer: "train driver",
                    tolerance: 2
                },
                {
                    question: "Which professional works on a train, assisting passengers?",
                    type: 'multiple-choice',
                    options: ["driver", "conductor", "attendant", "ticket inspector"],
                    answer: "attendant"
                },
                {
                    question: "A person who assists passengers on a train or other public transport.",
                    type: 'open-ended',
                    answer: "attendant",
                    tolerance: 1
                },
                {
                    question: "What do you call a professional who checks tickets on public transport?",
                    type: 'open-ended',
                    answer: "ticket inspector",
                    tolerance: 2
                },
                {
                    question: "A professional who sells tickets.",
                    type: 'open-ended',
                    answer: "ticket agent",
                    tolerance: 2
                },
                {
                    question: "Which professional works at an airport?",
                    type: 'multiple-choice',
                    options: ["pilot", "flight attendant", "air traffic controller", "all of the above"],
                    answer: "all of the above"
                },
                {
                    question: "What is a person whose job is to fly an aircraft called?",
                    type: 'open-ended',
                    answer: "pilot",
                    tolerance: 1
                },
                {
                    question: "A professional who assists passengers during a flight.",
                    type: 'open-ended',
                    answer: "flight attendant",
                    tolerance: 2
                },
                {
                    question: "Which professional manages air traffic?",
                    type: 'multiple-choice',
                    options: ["pilot", "captain", "air traffic controller", "ground crew"],
                    answer: "air traffic controller"
                },
                {
                    question: "A person whose job is to manage the movement of aircraft at an airport.",
                    type: 'open-ended',
                    answer: "air traffic controller",
                    tolerance: 3
                },
                {
                    question: "What do you call a professional who works on the ground at an airport?",
                    type: 'open-ended',
                    answer: "ground crew",
                    tolerance: 2
                },
                {
                    question: "A professional who cleans aircraft.",
                    type: 'open-ended',
                    answer: "aircraft cleaner",
                    tolerance: 2
                },
                {
                    question: "Which professional works in a factory, operating machinery?",
                    type: 'multiple-choice',
                    options: ["engineer", "technician", "operator", "foreman"],
                    answer: "operator"
                },
                {
                    question: "A person whose job is to operate machinery in a factory.",
                    type: 'open-ended',
                    answer: "machine operator",
                    tolerance: 2
                },
                {
                    question: "What is a professional who supervises workers in a factory called?",
                    type: 'open-ended',
                    answer: "supervisor",
                    tolerance: 1
                },
                {
                    question: "A professional who performs quality control checks on products.",
                    type: 'open-ended',
                    answer: "quality inspector",
                    tolerance: 2
                },
                {
                    question: "Which professional works in a warehouse, managing goods?",
                    type: 'multiple-choice',
                    options: ["packer", "forklift operator", "warehouse worker", "manager"],
                    answer: "warehouse worker"
                },
                {
                    question: "A person who works in a warehouse, handling storage and movement of goods.",
                    type: 'open-ended',
                    answer: "warehouse worker",
                    tolerance: 2
                },
                {
                    question: "What do you call a professional who operates a forklift?",
                    type: 'open-ended',
                    answer: "forklift operator",
                    tolerance: 2
                },
                {
                    question: "A professional who packs goods.",
                    type: 'open-ended',
                    answer: "packer",
                    tolerance: 1
                },
                {
                    question: "Which professional works in construction, operating heavy machinery?",
                    type: 'multiple-choice',
                    options: ["builder", "engineer", "operator", "heavy equipment operator"],
                    answer: "heavy equipment operator"
                },
                {
                    question: "A person whose job is to operate heavy machinery on a construction site.",
                    type: 'open-ended',
                    answer: "heavy equipment operator",
                    tolerance: 3
                },
                {
                    question: "What is a professional who operates a crane called?",
                    type: 'open-ended',
                    answer: "crane operator",
                    tolerance: 2
                },
                {
                    question: "A professional who works on a construction site, performing physical tasks.",
                    type: 'open-ended',
                    answer: "construction worker",
                    tolerance: 2
                },
                {
                    question: "Which professional provides care for animals in a zoo?",
                    type: 'multiple-choice',
                    options: ["veterinarian", "animal trainer", "zookeeper", "biologist"],
                    answer: "zookeeper"
                },
                {
                    question: "A person whose job is to look after animals in a zoo.",
                    type: 'open-ended',
                    answer: "zookeeper",
                    tolerance: 1
                },
                {
                    question: "What do you call a professional who trains animals?",
                    type: 'open-ended',
                    answer: "animal trainer",
                    tolerance: 2
                },
                {
                    question: "A professional who cleans and grooms animals.",
                    type: 'open-ended',
                    answer: "animal groomer",
                    tolerance: 2
                },
                {
                    question: "Which professional works with leather?",
                    type: 'multiple-choice',
                    options: ["tailor", "shoemaker", "leatherworker", "cobbler"],
                    answer: "leatherworker"
                },
                {
                    question: "A person who makes things from leather.",
                    type: 'open-ended',
                    answer: "leatherworker",
                    tolerance: 1
                },
                {
                    question: "What is a professional who makes or repairs shoes called?",
                    type: 'open-ended',
                    answer: "shoemaker",
                    tolerance: 1
                },
                {
                    question: "A professional who repairs shoes.",
                    type: 'open-ended',
                    answer: "cobbler",
                    tolerance: 1
                },
                {
                    question: "Which professional works with glass?",
                    type: 'multiple-choice',
                    options: ["glazier", "ceramist", "glassblower", "jeweller"],
                    answer: "glassworker"
                },
                {
                    question: "A person who works with glass, making or repairing things.",
                    type: 'open-ended',
                    answer: "glassworker",
                    tolerance: 1
                },
                {
                    question: "What do you call a professional who fits glass into windows?",
                    type: 'open-ended',
                    answer: "glazier",
                    tolerance: 1
                },
                {
                    question: "A professional who makes objects by blowing glass.",
                    type: 'open-ended',
                    answer: "glassblower",
                    tolerance: 1
                },

                {
                    question: "A person or company that prepares and issues books or magazines.",
                    image: 'space-2653754_1280.jpg',
                    type: 'open-ended',
                    answer: "publisher",
                    tolerance: 2
                },
                {
                    question: "The person responsible for the artistic look of a film's images.",
                    image: 'space-2653754_1280.jpg',
                    type: 'open-ended',
                    answer: "cinematographer",
                    tolerance: 3
                },

                {
                    question: "A person or company that prepares and issues books, journals, or music.",
                    type: 'open-ended',
                    answer: "publisher",
                    tolerance: 2
                },

                {
                    question: "The person responsible for the artistic and technical quality of the images in a film.",
                    type: 'open-ended',
                    answer: "cinematographer",
                    tolerance: 3
                },
                {
                    question: "What do you call a person who writes poems?",
                    type: 'open-ended',
                    answer: "poet",
                    tolerance: 1
                },
                {
                    question: "The person who cuts and joins parts of a film or recording together is the...",
                    type: 'open-ended',
                    answer: "editor",
                    tolerance: 2
                },
                {
                    question: "What is a musician who plays the saxophone called?",
                    type: 'open-ended',
                    answer: "saxophonist",
                    tolerance: 2
                },
                {
                    question: "A person who writes plays for the theatre.",
                    type: 'open-ended',
                    answer: "playwright",
                    tolerance: 1
                },
                {
                    question: "Which professional designs buildings?",
                    type: 'multiple-choice',
                    options: ["carpenter", "plumber", "architect", "engineer"],
                    answer: "architect"
                },
                {
                    question: "A person who designs buildings and supervises their construction.",
                    type: 'open-ended',
                    answer: "architect",
                    tolerance: 1
                },
                {
                    question: "What do you call a person who works with wood to build or repair things, especially houses or furniture?",
                    type: 'open-ended',
                    answer: "carpenter",
                    tolerance: 1
                },
                {
                    question: "A person who installs and repairs the pipes and fittings of water supply, sanitation, or heating systems.",
                    type: 'open-ended',
                    answer: "plumber",
                    tolerance: 1
                },
                {
                    question: "Which professional deals with electrical systems in a house?",
                    type: 'multiple-choice',
                    options: ["plumber", "electrician", "mason", "painter"],
                    answer: "electrician"
                },
                {
                    question: "A person who installs and maintains electrical equipment.",
                    type: 'open-ended',
                    answer: "electrician",
                    tolerance: 1
                },
                {
                    question: "What is a person who paints walls or houses as a job called?",
                    type: 'open-ended',
                    answer: "painter",
                    tolerance: 1
                },
                {
                    question: "A person who buys, sells, or rents properties, houses, or land.",
                    type: 'open-ended',
                    answer: "real estate agent",
                    tolerance: 3
                },
                {
                    question: "Which professional is responsible for keeping a building or area clean?",
                    type: 'multiple-choice',
                    options: ["gardener", "builder", "cleaner", "landlord"],
                    answer: "cleaner"
                },
                {
                    question: "A person who keeps houses or other buildings clean.",
                    type: 'open-ended',
                    answer: "cleaner",
                    tolerance: 1
                },
                {
                    question: "What do you call a person whose job is to look after a garden?",
                    type: 'open-ended',
                    answer: "gardener",
                    tolerance: 1
                },
                {
                    question: "The owner of a house, apartment, or land that is rented to someone else.",
                    type: 'open-ended',
                    answer: "landlord",
                    tolerance: 1
                },
                {
                    question: "Which professional renovates or builds houses?",
                    type: 'multiple-choice',
                    options: ["architect", "surveyor", "builder", "decorator"],
                    answer: "builder"
                },
                {
                    question: "A person whose job is to build or repair houses.",
                    type: 'open-ended',
                    answer: "builder",
                    tolerance: 1
                },
                {
                    question: "What is a person who decorates the interiors of houses or buildings called?",
                    type: 'open-ended',
                    answer: "interior designer",
                    tolerance: 2
                },
                {
                    question: "A person who rents a house, apartment, or land from a landlord.",
                    type: 'open-ended',
                    answer: "tenant",
                    tolerance: 1
                },
                {
                    question: "Which professional takes photographs?",
                    type: 'multiple-choice',
                    options: ["writer", "photographer", "editor", "illustrator"],
                    answer: "photographer"
                },
                {
                    question: "A person who takes photographs, especially as a job.",
                    type: 'open-ended',
                    answer: "photographer",
                    tolerance: 1
                },
                {
                    question: "What do you call a person who draws pictures for books, magazines, or advertisements?",
                    type: 'open-ended',
                    answer: "illustrator",
                    tolerance: 1
                },
                {
                    question: "A professional who writes articles for newspapers or magazines.",
                    type: 'open-ended',
                    answer: "journalist",
                    tolerance: 1
                },
                {
                    question: "Which professional directs a play or film?",
                    type: 'multiple-choice',
                    options: ["actor", "producer", "director", "writer"],
                    answer: "director"
                },
                {
                    question: "The person who is in charge of a film or play and tells the actors what to do.",
                    type: 'open-ended',
                    answer: "director",
                    tolerance: 1
                },
                {
                    question: "What do you call a person who performs in plays or films?",
                    type: 'open-ended',
                    answer: "actor",
                    tolerance: 1
                },
                {
                    question: "A person who writes music.",
                    type: 'open-ended',
                    answer: "composer",
                    tolerance: 1
                },
                {
                    question: "Which professional leads an orchestra or choir?",
                    type: 'multiple-choice',
                    options: ["musician", "composer", "conductor", "singer"],
                    answer: "conductor"
                },
                {
                    question: "A person who directs the performance of an orchestra or choir.",
                    type: 'open-ended',
                    answer: "conductor",
                    tolerance: 1
                },
                {
                    question: "What do you call a person who dances professionally?",
                    type: 'open-ended',
                    answer: "dancer",
                    tolerance: 1
                },
                {
                    question: "A person whose job is to manage or look after a museum or library.",
                    type: 'open-ended',
                    answer: "curator",
                    tolerance: 1
                },
                {
                    question: "Which professional works in a library?",
                    type: 'multiple-choice',
                    options: ["teacher", "librarian", "archivist", "publisher"],
                    answer: "librarian"
                },
                {
                    question: "A person who works in a library.",
                    type: 'open-ended',
                    answer: "librarian",
                    tolerance: 1
                },
                {
                    question: "What do you call a person whose job is to paint pictures as a form of art?",
                    type: 'open-ended',
                    answer: "painter",
                    tolerance: 1
                },
                {
                    question: "A person who creates sculptures as a form of art.",
                    type: 'open-ended',
                    answer: "sculptor",
                    tolerance: 1
                },
                {
                    question: "Which professional creates visual art?",
                    type: 'multiple-choice',
                    options: ["musician", "poet", "artist", "actor"],
                    answer: "artist"
                },
                {
                    question: "A person who creates works of art, such as paintings or sculptures.",
                    type: 'open-ended',
                    answer: "artist",
                    tolerance: 1
                },
                {
                    question: "What is a person who performs music, either singing or playing an instrument, called?",
                    type: 'open-ended',
                    answer: "musician",
                    tolerance: 1
                },
                {
                    question: "Which professional sings?",
                    type: 'multiple-choice',
                    options: ["dancer", "composer", "singer", "conductor"],
                    answer: "singer"
                },
                {
                    question: "A person who sings, especially professionally.",
                    type: 'open-ended',
                    answer: "singer",
                    tolerance: 1
                },
                {
                    question: "What do you call a person who writes prose as a form of literature?",
                    type: 'open-ended',
                    answer: "writer",
                    tolerance: 1
                },
                {
                    question: "The person who manages the overall production of a film, play, or musical recording.",
                    type: 'open-ended',
                    answer: "producer",
                    tolerance: 1
                },
                {
                    question: "Which professional designs clothes?",
                    type: 'multiple-choice',
                    options: ["stylist", "tailor", "fashion designer", "seamstress"],
                    answer: "fashion designer"
                },
                {
                    question: "A person who designs clothes, shoes, and accessories.",
                    type: 'open-ended',
                    answer: "fashion designer",
                    tolerance: 2
                },
                {
                    question: "What do you call a person who makes, repairs, or alters clothing, especially suits?",
                    type: 'open-ended',
                    answer: "tailor",
                    tolerance: 1
                },
                {
                    question: "A person whose job is to cut hair.",
                    type: 'open-ended',
                    answer: "hairdresser",
                    tolerance: 1
                },
                {
                    question: "Which professional applies makeup?",
                    type: 'multiple-choice',
                    options: ["hairdresser", "stylist", "makeup artist", "beautician"],
                    answer: "makeup artist"
                },
                {
                    question: "A person whose job is to apply makeup, especially in the fashion or entertainment industry.",
                    type: 'open-ended',
                    answer: "makeup artist",
                    tolerance: 2
                },
                {
                    question: "What is a person who arranges flowers and sells plants called?",
                    type: 'open-ended',
                    answer: "florist",
                    tolerance: 1
                },
                {
                    question: "A person who prepares and sells meat.",
                    type: 'open-ended',
                    answer: "butcher",
                    tolerance: 1
                },
                {
                    question: "Which professional bakes and sells bread and cakes?",
                    type: 'multiple-choice',
                    options: ["chef", "cook", "baker", "pastry chef"],
                    answer: "baker"
                },
                {
                    question: "A person who bakes and sells bread and cakes.",
                    type: 'open-ended',
                    answer: "baker",
                    tolerance: 1
                },
                {
                    question: "What do you call a person who works in a shop or supermarket?",
                    type: 'open-ended',
                    answer: "shop assistant",
                    tolerance: 2
                },
                {
                    question: "A person who serves customers in a shop.",
                    type: 'open-ended',
                    answer: "sales assistant",
                    tolerance: 2
                },
                {
                    question: "Which professional serves food and drinks in a restaurant?",
                    type: 'multiple-choice',
                    options: ["chef", "cook", "waiter", "barista"],
                    answer: "waiter"
                },
                {
                    question: "A person who serves food and drinks at the tables in a restaurant.",
                    type: 'open-ended',
                    answer: "waiter",
                    tolerance: 1
                },
                {
                    question: "What is a person who serves drinks at a bar called?",
                    type: 'open-ended',
                    answer: "bartender",
                    tolerance: 1
                },
                {
                    question: "A person who prepares and cooks food, especially as a job.",
                    type: 'open-ended',
                    answer: "cook",
                    tolerance: 1
                },
                {
                    question: "Which professional is a skilled cook, especially in a restaurant?",
                    type: 'multiple-choice',
                    options: ["baker", "cook", "chef", "waiter"],
                    answer: "chef"
                },
                {
                    question: "A professional cook, typically the chief cook in a restaurant or hotel.",
                    type: 'open-ended',
                    answer: "chef",
                    tolerance: 1
                },
                {
                    question: "What do you call a person whose job is to design software?",
                    type: 'open-ended',
                    answer: "software engineer",
                    tolerance: 2
                },
                {
                    question: "A person who is trained to design, build, or maintain engines, machines, or structures.",
                    type: 'open-ended',
                    answer: "engineer",
                    tolerance: 1
                },
                {
                    question: "Which professional treats sick people?",
                    type: 'multiple-choice',
                    options: ["teacher", "nurse", "lawyer", "accountant"],
                    answer: "nurse"
                },
                {
                    question: "A person trained to care for the sick or infirm, especially in a hospital.",
                    type: 'open-ended',
                    answer: "nurse",
                    tolerance: 1
                },
                {
                    question: "What is a person qualified to practise medicine, especially one who treats people's illnesses?",
                    type: 'open-ended',
                    answer: "doctor",
                    tolerance: 1
                },
                {
                    question: "A person who is trained in the law and whose job is to advise people about law and represent them in court.",
                    type: 'open-ended',
                    answer: "lawyer",
                    tolerance: 1
                },
                {
                    question: "Which professional advises people on financial matters or manages their accounts?",
                    type: 'multiple-choice',
                    options: ["engineer", "architect", "accountant", "journalist"],
                    answer: "accountant"
                },
                {
                    question: "A person whose job is to keep or inspect financial accounts.",
                    type: 'open-ended',
                    answer: "accountant",
                    tolerance: 1
                },
                {
                    question: "What do you call a person who gives classes in a school or university?",
                    type: 'open-ended',
                    answer: "teacher",
                    tolerance: 1
                },
                {
                    question: "A person who performs scientific research or works in a scientific field.",
                    type: 'open-ended',
                    answer: "scientist",
                    tolerance: 1
                },
                {
                    question: "Which professional studies the stars and planets?",
                    type: 'multiple-choice',
                    options: ["geologist", "biologist", "chemist", "astronomer"],
                    answer: "astronomer"
                },
                {
                    question: "A person who studies astronomy.",
                    type: 'open-ended',
                    answer: "astronomer",
                    tolerance: 1
                },
                {
                    question: "What is a person who studies rocks and the earth's structure called?",
                    type: 'open-ended',
                    answer: "geologist",
                    tolerance: 1
                },
                {
                    question: "A person who studies living organisms.",
                    type: 'open-ended',
                    answer: "biologist",
                    tolerance: 1
                },
                {
                    question: "Which professional studies the properties of matter and energy?",
                    type: 'multiple-choice',
                    options: ["chemist", "physicist", "biologist", "geologist"],
                    answer: "physicist"
                },
                {
                    question: "A person who studies physics.",
                    type: 'open-ended',
                    answer: "physicist",
                    tolerance: 1
                },
                {
                    question: "What do you call a person who studies chemistry?",
                    type: 'open-ended',
                    answer: "chemist",
                    tolerance: 1
                },
                {
                    question: "A person whose job is to design fashion shows or photographic shoots.",
                    type: 'open-ended',
                    answer: "stylist",
                    tolerance: 1
                },
                {
                    question: "Which professional designs the technical aspects of a play or film, such as lighting or sound?",
                    type: 'multiple-choice',
                    options: ["producer", "director", "technician", "designer"],
                    answer: "technician"
                },
                {
                    question: "A person skilled in a particular art or craft, or one who works on the technical aspects of a production.",
                    type: 'open-ended',
                    answer: "technician",
                    tolerance: 1
                },
                {
                    question: "What is a person who repairs cars called?",
                    type: 'open-ended',
                    answer: "mechanic",
                    tolerance: 1
                },
                {
                    question: "A person who operates a camera, especially in the film or television industry.",
                    type: 'open-ended',
                    answer: "camera operator",
                    tolerance: 2
                },
                {
                    question: "Which professional makes and repairs shoes?",
                    type: 'multiple-choice',
                    options: ["cobbler", "tailor", "shoemaker", "leatherworker"],
                    answer: "cobbler"
                },
                {
                    question: "A person who repairs shoes.",
                    type: 'open-ended',
                    answer: "cobbler",
                    tolerance: 1
                },
                {
                    question: "What do you call a person whose job is to drive a vehicle, especially a bus or train?",
                    type: 'open-ended',
                    answer: "driver",
                    tolerance: 1
                },
                {
                    question: "A person whose job is to fly an aircraft.",
                    type: 'open-ended',
                    answer: "pilot",
                    tolerance: 1
                },
                {
                    question: "Which professional works in a library?",
                    type: 'multiple-choice',
                    options: ["bookseller", "publisher", "librarian", "archivist"],
                    answer: "librarian"
                },
                {
                    question: "A person whose job is to manage and preserve historical records.",
                    type: 'open-ended',
                    answer: "archivist",
                    tolerance: 1
                },
                {
                    question: "What is a person who investigates crimes called?",
                    type: 'open-ended',
                    answer: "detective",
                    tolerance: 1
                },
                {
                    question: "A member of the police force.",
                    type: 'open-ended',
                    answer: "police officer",
                    tolerance: 2
                },
                {
                    question: "Which professional fights fires?",
                    type: 'multiple-choice',
                    options: ["police officer", "soldier", "firefighter", "paramedic"],
                    answer: "firefighter"
                },
                {
                    question: "A person whose job is to extinguish fires.",
                    type: 'open-ended',
                    answer: "firefighter",
                    tolerance: 1
                },
                {
                    question: "What do you call a person trained to give emergency medical treatment?",
                    type: 'open-ended',
                    answer: "paramedic",
                    tolerance: 1
                },
                {
                    question: "A person who serves in an army.",
                    type: 'open-ended',
                    answer: "soldier",
                    tolerance: 1
                },
                {
                    question: "Which professional flies in space?",
                    type: 'multiple-choice',
                    options: ["astronomer", "pilot", "astronaut", "engineer"],
                    answer: "astronaut"
                },
                {
                    question: "A person trained to travel in a spacecraft.",
                    type: 'open-ended',
                    answer: "astronaut",
                    tolerance: 1
                },
                {
                    question: "What is a person who studies animals called?",
                    type: 'open-ended',
                    answer: "zoologist",
                    tolerance: 1
                },
                {
                    question: "A person who studies plants.",
                    type: 'open-ended',
                    answer: "botanist",
                    tolerance: 1
                },
                {
                    question: "Which professional treats animals?",
                    type: 'multiple-choice',
                    options: ["biologist", "zoologist", "veterinarian", "botanist"],
                    answer: "veterinarian"
                },
                {
                    question: "A person qualified to treat sick or injured animals.",
                    type: 'open-ended',
                    answer: "veterinarian",
                    tolerance: 1
                },
                {
                    question: "What do you call a person who looks after the health of people's teeth?",
                    type: 'open-ended',
                    answer: "dentist",
                    tolerance: 1
                },
                {
                    question: "A person who studies rocks and fossils to learn about the earth's history.",
                    type: 'open-ended',
                    answer: "geologist",
                    tolerance: 1
                },
                {
                    question: "Which professional studies weather?",
                    type: 'multiple-choice',
                    options: ["geographer", "geologist", "meteorologist", "climatologist"],
                    answer: "meteorologist"
                },
                {
                    question: "A person who studies weather conditions and forecasts the weather.",
                    type: 'open-ended',
                    answer: "meteorologist",
                    tolerance: 1
                },
                {
                    question: "What is a person who studies the earth's features and human activity called?",
                    type: 'open-ended',
                    answer: "geographer",
                    tolerance: 1
                },
                {
                    question: "A person who studies ancient societies by examining their remains.",
                    type: 'open-ended',
                    answer: "archaeologist",
                    tolerance: 1
                },
                {
                    question: "Which professional studies history?",
                    type: 'multiple-choice',
                    options: ["geographer", "archaeologist", "historian", "anthropologist"],
                    answer: "historian"
                },
                {
                    question: "A person who studies or writes about history.",
                    type: 'open-ended',
                    answer: "historian",
                    tolerance: 1
                },
                {
                    question: "What do you call a person who studies human societies and cultures?",
                    type: 'open-ended',
                    answer: "anthropologist",
                    tolerance: 1
                },
                {
                    question: "A person whose job is to operate a machine or vehicle, especially a construction vehicle.",
                    type: 'open-ended',
                    answer: "operator",
                    tolerance: 1
                },
                {
                    question: "Which professional fixes computers?",
                    type: 'multiple-choice',
                    options: ["programmer", "developer", "technician", "analyst"],
                    answer: "technician"
                },
                {
                    question: "A person whose job is to maintain and repair computer systems.",
                    type: 'open-ended',
                    answer: "computer technician",
                    tolerance: 2
                },
                {
                    question: "What is a person who writes computer programs called?",
                    type: 'open-ended',
                    answer: "programmer",
                    tolerance: 1
                },
                {
                    question: "A person who designs and builds websites.",
                    type: 'open-ended',
                    answer: "web designer",
                    tolerance: 2
                },
                {
                    question: "Which professional creates and develops software applications?",
                    type: 'multiple-choice',
                    options: ["programmer", "web designer", "software developer", "data analyst"],
                    answer: "software developer"
                },
                {
                    question: "A person whose job is to develop software.",
                    type: 'open-ended',
                    answer: "software developer",
                    tolerance: 2
                },
                {
                    question: "What do you call a person who analyzes data?",
                    type: 'open-ended',
                    answer: "data analyst",
                    tolerance: 2
                },
                {
                    question: "A person whose job is to manage social media accounts for a company or person.",
                    type: 'open-ended',
                    answer: "social media manager",
                    tolerance: 3
                },
                {
                    question: "Which professional designs graphics or visual content?",
                    type: 'multiple-choice',
                    options: ["editor", "illustrator", "graphic designer", "photographer"],
                    answer: "graphic designer"
                },
                {
                    question: "A person who designs visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers.",
                    type: 'open-ended',
                    answer: "graphic designer",
                    tolerance: 2
                },
                {
                    question: "What is a person who writes content for websites or other digital platforms called?",
                    type: 'open-ended',
                    answer: "content writer",
                    tolerance: 2
                },
                {
                    question: "A person whose job is to organize and lead a group of people.",
                    type: 'open-ended',
                    answer: "manager",
                    tolerance: 1
                },
                {
                    question: "Which professional provides administrative support?",
                    type: 'multiple-choice',
                    options: ["manager", "supervisor", "administrator", "assistant"],
                    answer: "assistant"
                },
                {
                    question: "A person who provides help and support, especially in an office.",
                    type: 'open-ended',
                    answer: "assistant",
                    tolerance: 1
                },
                {
                    question: "What do you call a person whose job is to answer phones and greet visitors in an office?",
                    type: 'open-ended',
                    answer: "receptionist",
                    tolerance: 1
                },
                {
                    question: "A person whose job is to organize meetings and travel for someone else.",
                    type: 'open-ended',
                    answer: "personal assistant",
                    tolerance: 2
                },
                {
                    question: "Which professional works in a mine?",
                    type: 'multiple-choice',
                    options: ["farmer", "miner", "fisherman", "forester"],
                    answer: "miner"
                },
                {
                    question: "A person who works underground in a mine to dig out coal or minerals.",
                    type: 'open-ended',
                    answer: "miner",
                    tolerance: 1
                },
                {
                    question: "What is a person who catches fish as a job called?",
                    type: 'open-ended',
                    answer: "fisherman",
                    tolerance: 1
                },
                {
                    question: "A person who owns or manages a farm.",
                    type: 'open-ended',
                    answer: "farmer",
                    tolerance: 1
                },
                {
                    question: "Which professional works in a forest?",
                    type: 'multiple-choice',
                    options: ["gardener", "logger", "landscaper", "forester"],
                    answer: "forester"
                },
                {
                    question: "A person responsible for the management of forests.",
                    type: 'open-ended',
                    answer: "forester",
                    tolerance: 1
                },
                {
                    question: "What do you call a person whose job is to cut down trees?",
                    type: 'open-ended',
                    answer: "logger",
                    tolerance: 1
                },
                {
                    question: "A person who designs and maintains gardens and other outdoor spaces.",
                    type: 'open-ended',
                    answer: "landscaper",
                    tolerance: 1
                },
                {
                    question: "Which professional works with metal, usually by hammering or heating it?",
                    type: 'multiple-choice',
                    options: ["carpenter", "mason", "blacksmith", "welder"],
                    answer: "blacksmith"
                },
                {
                    question: "A person who makes and repairs things made of iron.",
                    type: 'open-ended',
                    answer: "blacksmith",
                    tolerance: 1
                },
                {
                    question: "What is a person who joins pieces of metal together by heating them called?",
                    type: 'open-ended',
                    answer: "welder",
                    tolerance: 1
                },
                {
                    question: "A person who builds with stone or brick.",
                    type: 'open-ended',
                    answer: "mason",
                    tolerance: 1
                },
                {
                    question: "Which professional works with clay to make pottery?",
                    type: 'multiple-choice',
                    options: ["sculptor", "ceramist", "glassblower", "jeweler"],
                    answer: "ceramist"
                },
                {
                    question: "A person who makes pottery or other ceramic art.",
                    type: 'open-ended',
                    answer: "ceramist",
                    tolerance: 1
                },
                {
                    question: "What do you call a person who makes objects from glass by blowing air through a tube?",
                    type: 'open-ended',
                    answer: "glassblower",
                    tolerance: 1
                },
                {
                    question: "A person who makes or repairs jewellery.",
                    type: 'open-ended',
                    answer: "jeweler",
                    tolerance: 1
                },
                {
                    question: "Which professional works with textiles to create or repair clothing?",
                    type: 'multiple-choice',
                    options: ["designer", "tailor", "weaver", "dressmaker"],
                    answer: "dressmaker"
                },
                {
                    question: "A person who makes dresses and other clothes for women.",
                    type: 'open-ended',
                    answer: "dressmaker",
                    tolerance: 1
                },
                {
                    question: "What is a person who makes fabric by weaving threads called?",
                    type: 'open-ended',
                    answer: "weaver",
                    tolerance: 1
                }, [
                    {
                        question: "A professional who manages projects.",
                        type: 'open-ended',
                        answer: "project manager",
                        tolerance: 2
                    },
                    {
                        question: "Which professional is responsible for the financial planning and analysis of a company?",
                        type: 'multiple-choice',
                        options: ["accountant", "treasurer", "financial analyst", "auditor"],
                        answer: "financial analyst"
                    },
                    {
                        question: "A person who analyzes financial data and advises businesses.",
                        type: 'open-ended',
                        answer: "financial analyst",
                        tolerance: 2
                    },
                    {
                        question: "What do you call a professional who checks a company's financial records?",
                        type: 'open-ended',
                        answer: "auditor",
                        tolerance: 1
                    },
                    {
                        question: "Which professional is involved in buying and selling stocks and shares?",
                        type: 'multiple-choice',
                        options: ["accountant", "financial advisor", "stockbroker", "banker"],
                        answer: "stockbroker"
                    },
                    {
                        question: "A person who buys and sells stocks and shares for others.",
                        type: 'open-ended',
                        answer: "stockbroker",
                        tolerance: 1
                    },
                    {
                        question: "What is a person who provides advice on personal finance called?",
                        type: 'open-ended',
                        answer: "financial advisor",
                        tolerance: 2
                    },
                    {
                        question: "A professional who works in a bank.",
                        type: 'open-ended',
                        answer: "banker",
                        tolerance: 1
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
                        options: ["programmer", "developer", "system administrator", "web designer"],
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
                        question: "A person whose job is to compose music for films.",
                        type: 'open-ended',
                        answer: "film composer",
                        tolerance: 2
                    },
                    {
                        question: "Which professional records sound on a film set?",
                        type: 'multiple-choice',
                        options: ["sound editor", "sound mixer", "sound recordist", "boom operator"],
                        answer: "sound recordist"
                    },
                    {
                        question: "A person responsible for recording audio during filming.",
                        type: 'open-ended',
                        answer: "sound recordist",
                        tolerance: 2
                    },
                    {
                        question: "What is the person who operates the boom microphone on a film set called?",
                        type: 'open-ended',
                        answer: "boom operator",
                        tolerance: 2
                    },
                    {
                        question: "A professional who mixes the audio tracks for a film or TV show.",
                        type: 'open-ended',
                        answer: "sound mixer",
                        tolerance: 2
                    },
                    {
                        question: "Which professional designs the lighting for theatre or film?",
                        type: 'multiple-choice',
                        options: ["cinematographer", "set designer", "lighting designer", "technical director"],
                        answer: "lighting designer"
                    },
                    {
                        question: "A person who designs and implements the lighting for a stage production or film.",
                        type: 'open-ended',
                        answer: "lighting designer",
                        tolerance: 2
                    },
                    {
                        question: "What do you call the person who manages the stage during a theatre performance?",
                        type: 'open-ended',
                        answer: "stage manager",
                        tolerance: 2
                    },
                    {
                        question: "A professional who works backstage in a theatre.",
                        type: 'open-ended',
                        answer: "stagehand",
                        tolerance: 1
                    },
                    {
                        question: "Which professional designs and makes costumes for performances?",
                        type: 'multiple-choice',
                        options: ["fashion designer", "stylist", "costume designer", "seamstress"],
                        answer: "costume designer"
                    },
                    {
                        question: "A person who designs or makes costumes for theatrical or film productions.",
                        type: 'open-ended',
                        answer: "costume designer",
                        tolerance: 2
                    },
                    {
                        question: "What is a professional who applies makeup and does hair for performers called?",
                        type: 'open-ended',
                        answer: "makeup artist",
                        tolerance: 2
                    },
                    {
                        question: "A person whose job is to do hair and makeup for actors or models.",
                        type: 'open-ended',
                        answer: "hair and makeup artist",
                        tolerance: 3
                    },
                    {
                        question: "Which professional manages actors and other performers?",
                        type: 'multiple-choice',
                        options: ["director", "producer", "agent", "talent manager"],
                        answer: "talent manager"
                    },
                    {
                        question: "A person who represents actors or performers to get them work.",
                        type: 'open-ended',
                        answer: "agent",
                        tolerance: 1
                    },
                    {
                        question: "What do you call a professional who negotiates contracts for performers?",
                        type: 'open-ended',
                        answer: "agent",
                        tolerance: 1
                    },
                    {
                        question: "A professional who creates and leads dance routines.",
                        type: 'open-ended',
                        answer: "choreographer",
                        tolerance: 1
                    },
                    {
                        question: "Which professional performs acrobatic feats, often high in the air?",
                        type: 'multiple-choice',
                        options: ["dancer", "gymnast", "aerialist", "stunt performer"],
                        answer: "aerialist"
                    },
                    {
                        question: "A person who performs acrobatic or artistic feats in the air, typically on aerial silks, trapeze, or hoop.",
                        type: 'open-ended',
                        answer: "aerialist",
                        tolerance: 1
                    },
                    {
                        question: "What is a professional who works in a zoo, caring for the animals?",
                        type: 'open-ended',
                        answer: "zookeeper",
                        tolerance: 1
                    },
                    {
                        question: "A person whose job is to clean and groom animals.",
                        type: 'open-ended',
                        answer: "animal groomer",
                        tolerance: 2
                    },
                    {
                        question: "Which professional works with birds?",
                        type: 'multiple-choice',
                        options: ["zoologist", "ornithologist", "veterinarian", "ethologist"],
                        answer: "ornithologist"
                    },
                    {
                        question: "A person who studies birds.",
                        type: 'open-ended',
                        answer: "ornithologist",
                        tolerance: 1
                    },
                    {
                        question: "What do you call a professional who studies marine life?",
                        type: 'open-ended',
                        answer: "marine biologist",
                        tolerance: 2
                    },
                    {
                        question: "A person whose job is to study fish.",
                        type: 'open-ended',
                        answer: "ichthyologist",
                        tolerance: 2
                    },
                    {
                        question: "Which professional studies insects?",
                        type: 'multiple-choice',
                        options: ["biologist", "zoologist", "entomologist", "botanist"],
                        answer: "entomologist"
                    },
                    {
                        question: "A person who studies insects.",
                        type: 'open-ended',
                        answer: "entomologist",
                        tolerance: 1
                    },
                    {
                        question: "What is a professional who studies plants called?",
                        type: 'open-ended',
                        answer: "botanist",
                        tolerance: 1
                    },
                    {
                        question: "A person whose job is to manage forests.",
                        type: 'open-ended',
                        answer: "forester",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works in agriculture?",
                        type: 'multiple-choice',
                        options: ["gardener", "landscaper", "farmer", "logger"],
                        answer: "farmer"
                    },
                    {
                        question: "What do you call a person who works on a farm?",
                        type: 'open-ended',
                        answer: "farm worker",
                        tolerance: 2
                    },
                    {
                        question: "A professional who takes care of livestock.",
                        type: 'open-ended',
                        answer: "herdsman",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works with metal, often shaping it by hand?",
                        type: 'multiple-choice',
                        options: ["welder", "mason", "blacksmith", "engineer"],
                        answer: "blacksmith"
                    },
                    {
                        question: "A person who makes and repairs things made of iron by hand.",
                        type: 'open-ended',
                        answer: "blacksmith",
                        tolerance: 1
                    },
                    {
                        question: "What is a professional who builds with stone called?",
                        type: 'open-ended',
                        answer: "stonemason",
                        tolerance: 1
                    },
                    {
                        question: "A person whose job is to apply plaster to walls and ceilings.",
                        type: 'open-ended',
                        answer: "plasterer",
                        tolerance: 1
                    },
                    {
                        question: "Which professional installs and repairs plumbing systems?",
                        type: 'multiple-choice',
                        options: ["electrician", "HVAC technician", "plumber", "carpenter"],
                        answer: "plumber"
                    },
                    {
                        question: "What do you call a professional who installs and maintains electrical systems?",
                        type: 'open-ended',
                        answer: "electrician",
                        tolerance: 1
                    },
                    {
                        question: "A person whose job is to install and repair heating, ventilation, and air conditioning systems.",
                        type: 'open-ended',
                        answer: "HVAC technician",
                        tolerance: 2
                    },
                    {
                        question: "Which professional paints houses or buildings?",
                        type: 'multiple-choice',
                        options: ["artist", "decorator", "painter", "finisher"],
                        answer: "painter"
                    },
                    {
                        question: "A person whose job is to paint the interior or exterior of buildings.",
                        type: 'open-ended',
                        answer: "house painter",
                        tolerance: 2
                    },
                    {
                        question: "What is a professional who installs floor coverings called?",
                        type: 'open-ended',
                        answer: "flooring installer",
                        tolerance: 2
                    },
                    {
                        question: "A person whose job is to lay tiles.",
                        type: 'open-ended',
                        answer: "tiler",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works with wood, building furniture or parts of buildings?",
                        type: 'multiple-choice',
                        options: ["joiner", "woodcarver", "carpenter", "cabinetmaker"],
                        answer: "carpenter"
                    },
                    {
                        question: "A person who makes wooden cabinets and furniture.",
                        type: 'open-ended',
                        answer: "cabinetmaker",
                        tolerance: 1
                    },
                    {
                        question: "What do you call a professional who makes or repairs things using welding?",
                        type: 'open-ended',
                        answer: "welder",
                        tolerance: 1
                    },
                    {
                        question: "A person whose job is to work with metal, shaping or joining it.",
                        type: 'open-ended',
                        answer: "metalworker",
                        tolerance: 1
                    },
                    {
                        question: "Which professional drives a truck?",
                        type: 'multiple-choice',
                        options: ["driver", "chauffeur", "truck driver", "operator"],
                        answer: "truck driver"
                    },
                    {
                        question: "A person whose job is to drive large trucks, often long distances.",
                        type: 'open-ended',
                        answer: "truck driver",
                        tolerance: 2
                    },
                    {
                        question: "What is a professional who operates heavy machinery called?",
                        type: 'open-ended',
                        answer: "heavy equipment operator",
                        tolerance: 3
                    },
                    {
                        question: "A person whose job is to drive a forklift.",
                        type: 'open-ended',
                        answer: "forklift operator",
                        tolerance: 2
                    },
                    {
                        question: "Which professional works in a warehouse, managing stock?",
                        type: 'multiple-choice',
                        options: ["packer", "operator", "warehouse manager", "forklift driver"],
                        answer: "warehouse manager"
                    },
                    {
                        question: "A person responsible for managing the operations of a warehouse.",
                        type: 'open-ended',
                        answer: "warehouse manager",
                        tolerance: 2
                    },
                    {
                        question: "What do you call a person whose job is to pack goods for shipping?",
                        type: 'open-ended',
                        answer: "packer",
                        tolerance: 1
                    },
                    {
                        question: "A professional who checks the quality of products.",
                        type: 'open-ended',
                        answer: "quality control inspector",
                        tolerance: 3
                    },
                    {
                        question: "Which professional works in a factory, assembling products?",
                        type: 'multiple-choice',
                        options: ["operator", "foreman", "assembler", "technician"],
                        answer: "assembler"
                    },
                    {
                        question: "A person whose job is to put together parts of a product in a factory.",
                        type: 'open-ended',
                        answer: "assembler",
                        tolerance: 1
                    },
                    {
                        question: "What is a professional who manages workers in a factory called?",
                        type: 'open-ended',
                        answer: "supervisor",
                        tolerance: 1
                    },
                    {
                        question: "A person whose job is to provide basic maintenance and repairs in a building.",
                        type: 'open-ended',
                        answer: "janitor",
                        tolerance: 1
                    },
                    {
                        question: "Which professional cleans the interior of buildings?",
                        type: 'multiple-choice',
                        options: ["janitor", "caretaker", "commercial cleaner", "window cleaner"],
                        answer: "commercial cleaner"
                    },
                    {
                        question: "A person whose job is to clean offices or other commercial spaces.",
                        type: 'open-ended',
                        answer: "commercial cleaner",
                        tolerance: 2
                    },
                    {
                        question: "What do you call a professional who cleans houses?",
                        type: 'open-ended',
                        answer: "house cleaner",
                        tolerance: 2
                    },
                    {
                        question: "A person whose job is to look after pets while their owners are away.",
                        type: 'open-ended',
                        answer: "pet sitter",
                        tolerance: 2
                    },
                    {
                        question: "Which professional walks dogs for a fee?",
                        type: 'multiple-choice',
                        options: ["animal trainer", "groomer", "dog walker", "pet sitter"],
                        answer: "dog walker"
                    },
                    {
                        question: "A person whose job is to take dogs for walks.",
                        type: 'open-ended',
                        answer: "dog walker",
                        tolerance: 2
                    },
                    {
                        question: "What is a professional who cares for people who are unable to care for themselves?",
                        type: 'open-ended',
                        answer: "caregiver",
                        tolerance: 1
                    },
                    {
                        question: "A person who provides personal care and support to someone who is ill, disabled, or elderly.",
                        type: 'open-ended',
                        answer: "caregiver",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works in a hospital providing direct patient care?",
                        type: 'multiple-choice',
                        options: ["doctor", "surgeon", "nurse", "paramedic"],
                        answer: "nurse"
                    },
                    {
                        question: "What do you call a nurse who has advanced training in a specialized area?",
                        type: 'open-ended',
                        answer: "nurse specialist",
                        tolerance: 2
                    },
                    {
                        question: "A professional who provides therapy, often in a hospital setting.",
                        type: 'open-ended',
                        answer: "therapist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works with patients to improve their ability to perform daily activities?",
                        type: 'multiple-choice',
                        options: ["physiotherapist", "occupational therapist", "speech therapist", "psychologist"],
                        answer: "occupational therapist"
                    },
                    {
                        question: "A professional who helps people recover or develop skills needed for daily living and work.",
                        type: 'open-ended',
                        answer: "occupational therapist",
                        tolerance: 2
                    },
                    {
                        question: "What is a professional who specializes in the diagnosis and treatment of speech disorders?",
                        type: 'open-ended',
                        answer: "speech therapist",
                        tolerance: 2
                    },
                    {
                        question: "A professional who diagnoses and treats mental health disorders.",
                        type: 'open-ended',
                        answer: "psychiatrist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional provides counselling?",
                        type: 'multiple-choice',
                        options: ["psychologist", "therapist", "counsellor", "social worker"],
                        answer: "counsellor"
                    },
                    {
                        question: "A person trained to give guidance on personal, social, or psychological problems.",
                        type: 'open-ended',
                        answer: "counsellor",
                        tolerance: 1
                    },
                    {
                        question: "What do you call a professional who helps people navigate social systems and access resources?",
                        type: 'open-ended',
                        answer: "social worker",
                        tolerance: 2
                    },
                    {
                        question: "A professional who studies human behaviour and society.",
                        type: 'open-ended',
                        answer: "sociologist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional studies the past?",
                        type: 'multiple-choice',
                        options: ["archaeologist", "anthropologist", "historian", "geologist"],
                        answer: "historian"
                    },
                    {
                        question: "What is a person who studies ancient human societies called?",
                        type: 'open-ended',
                        answer: "archaeologist",
                        tolerance: 1
                    },
                    {
                        question: "A professional who studies human culture and society.",
                        type: 'open-ended',
                        answer: "anthropologist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional studies the earth's atmosphere and weather?",
                        type: 'multiple-choice',
                        options: ["geologist", "oceanographer", "meteorologist", "climatologist"],
                        answer: "meteorologist"
                    },
                    {
                        question: "What do you call a person who studies climate change?",
                        type: 'open-ended',
                        answer: "climatologist",
                        tolerance: 1
                    },
                    {
                        question: "A professional who studies the physical features of the earth.",
                        type: 'open-ended',
                        answer: "geographer",
                        tolerance: 1
                    },
                    {
                        question: "Which professional studies stars and galaxies?",
                        type: 'multiple-choice',
                        options: ["physicist", "chemist", "astronomer", "biologist"],
                        answer: "astronomer"
                    },
                    {
                        question: "What is a person who studies living organisms called?",
                        type: 'open-ended',
                        answer: "biologist",
                        tolerance: 1
                    },
                    {
                        question: "A professional who studies plants.",
                        type: 'open-ended',
                        answer: "botanist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional studies animals?",
                        type: 'multiple-choice',
                        options: ["botanist", "ecologist", "zoologist", "geologist"],
                        answer: "zoologist"
                    },
                    {
                        question: "What do you call a professional who studies the relationships between living organisms and their environment?",
                        type: 'open-ended',
                        answer: "ecologist",
                        tolerance: 1
                    },
                    {
                        question: "A professional who studies minerals.",
                        type: 'open-ended',
                        answer: "mineralogist",
                        tolerance: 1
                    },

                    {
                        question: "A person whose job is to keep a record of what has been said or done.",
                        type: 'open-ended',
                        answer: "recorder",
                        tolerance: 1
                    },
                    {
                        question: "Which professional operates a cash register and takes payments?",
                        type: 'multiple-choice',
                        options: ["manager", "shop assistant", "cashier", "salesperson"],
                        answer: "cashier"
                    },
                    {
                        question: "A person handling payments and receipts in a store, bank, or other business.",
                        type: 'open-ended',
                        answer: "cashier",
                        tolerance: 1
                    },
                    {
                        question: "What do you call a person who sells goods or services?",
                        type: 'open-ended',
                        answer: "salesperson",
                        tolerance: 1
                    },
                    {
                        question: "A person whose job is to welcome and assist guests at a hotel.",
                        type: 'open-ended',
                        answer: "receptionist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works as a guide, especially for tourists?",
                        type: 'multiple-choice',
                        options: ["driver", "interpreter", "tour guide", "travel agent"],
                        answer: "tour guide"
                    },
                    {
                        question: "A person who leads tourists around a place of interest.",
                        type: 'open-ended',
                        answer: "tour guide",
                        tolerance: 2
                    },
                    {
                        question: "What is a person who arranges travel and holidays for others called?",
                        type: 'open-ended',
                        answer: "travel agent",
                        tolerance: 2
                    },
                    {
                        question: "A person who translates spoken words from one language to another.",
                        type: 'open-ended',
                        answer: "interpreter",
                        tolerance: 1
                    },
                    {
                        question: "Which professional designs user interfaces for software or websites?",
                        type: 'multiple-choice',
                        options: ["developer", "programmer", "UX designer", "data analyst"],
                        answer: "UX designer"
                    },
                    {
                        question: "A person who designs the user experience of a product or service.",
                        type: 'open-ended',
                        answer: "UX designer",
                        tolerance: 2
                    },
                    {
                        question: "What do you call a person whose job is to protect people or property?",
                        type: 'open-ended',
                        answer: "security guard",
                        tolerance: 2
                    },
                    {
                        question: "A person whose job is to carry bags and luggage, typically in a hotel or station.",
                        type: 'open-ended',
                        answer: "porter",
                        tolerance: 1
                    },
                    {
                        question: "Which professional delivers letters and parcels?",
                        type: 'multiple-choice',
                        options: ["messenger", "courier", "postman", "delivery driver"],
                        answer: "postman"
                    },
                    {
                        question: "A person whose job is to deliver mail to people's houses.",
                        type: 'open-ended',
                        answer: "postman",
                        tolerance: 1
                    },
                    {
                        question: "What is a person who makes maps called?",
                        type: 'open-ended',
                        answer: "cartographer",
                        tolerance: 1
                    },
                    {
                        question: "A person who surveys and measures land.",
                        type: 'open-ended',
                        answer: "surveyor",
                        tolerance: 1
                    },
                    {
                        question: "Which professional takes care of sick or injured animals?",
                        type: 'multiple-choice',
                        options: ["zoologist", "veterinarian", "animal trainer", "biologist"],
                        answer: "veterinarian"
                    },
                    {
                        question: "What do you call a person who studies the structure and diseases of teeth?",
                        type: 'open-ended',
                        answer: "dentist",
                        tolerance: 1
                    },
                    {
                        question: "A professional who cleans teeth.",
                        type: 'open-ended',
                        answer: "dental hygienist",
                        tolerance: 2
                    },
                    {
                        question: "Which professional studies the mind and behavior?",
                        type: 'multiple-choice',
                        options: ["psychiatrist", "sociologist", "psychologist", "neurologist"],
                        answer: "psychologist"
                    },
                    {
                        question: "A person who studies the human mind and behavior.",
                        type: 'open-ended',
                        answer: "psychologist",
                        tolerance: 1
                    },
                    {
                        question: "What is a medical doctor who specializes in mental illness called?",
                        type: 'open-ended',
                        answer: "psychiatrist",
                        tolerance: 1
                    },
                    {
                        question: "A person who studies human society.",
                        type: 'open-ended',
                        answer: "sociologist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional studies the nervous system?",
                        type: 'multiple-choice',
                        options: ["biologist", "psychologist", "neurologist", "anatomist"],
                        answer: "neurologist"
                    },
                    {
                        question: "A medical doctor specializing in the nervous system.",
                        type: 'open-ended',
                        answer: "neurologist",
                        tolerance: 1
                    },
                    {
                        question: "What do you call a person who performs scientific experiments?",
                        type: 'open-ended',
                        answer: "experimenter",
                        tolerance: 1
                    },
                    {
                        question: "A person whose job is to prepare and sell medicines.",
                        type: 'open-ended',
                        answer: "pharmacist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional performs operations on patients?",
                        type: 'multiple-choice',
                        options: ["doctor", "nurse", "surgeon", "paramedic"],
                        answer: "surgeon"
                    },
                    {
                        question: "A medical doctor who performs surgical operations.",
                        type: 'open-ended',
                        answer: "surgeon",
                        tolerance: 1
                    },
                    {
                        question: "What is a person who studies insects called?",
                        type: 'open-ended',
                        answer: "entomologist",
                        tolerance: 1
                    },
                    {
                        question: "A person who studies fish.",
                        type: 'open-ended',
                        answer: "ichthyologist",
                        tolerance: 2
                    },
                    {
                        question: "Which professional designs and builds aircraft?",
                        type: 'multiple-choice',
                        options: ["pilot", "astronaut", "aerospace engineer", "mechanic"],
                        answer: "aerospace engineer"
                    },
                    {
                        question: "An engineer who designs, constructs, and maintains aircraft or spacecraft.",
                        type: 'open-ended',
                        answer: "aerospace engineer",
                        tolerance: 2
                    },
                    {
                        question: "What do you call a person who studies the stars and outer space?",
                        type: 'open-ended',
                        answer: "astronomer",
                        tolerance: 1
                    },
                    {
                        question: "A person whose job is to clean chimneys.",
                        type: 'open-ended',
                        answer: "chimney sweep",
                        tolerance: 2
                    },
                    {
                        question: "Which professional cuts and styles hair?",
                        type: 'multiple-choice',
                        options: ["barber", "makeup artist", "beautician", "stylist"],
                        answer: "barber"
                    },
                    {
                        question: "A person who cuts men's hair and shaves or trims beards.",
                        type: 'open-ended',
                        answer: "barber",
                        tolerance: 1
                    },
                    {
                        question: "What is a person who gives beauty treatments called?",
                        type: 'open-ended',
                        answer: "beautician",
                        tolerance: 1
                    },
                    {
                        question: "A person whose job is to teach people to drive.",
                        type: 'open-ended',
                        answer: "driving instructor",
                        tolerance: 2
                    },
                    {
                        question: "Which professional trains animals?",
                        type: 'multiple-choice',
                        options: ["veterinarian", "zookeeper", "animal trainer", "groomer"],
                        answer: "animal trainer"
                    },
                    {
                        question: "A person who teaches animals to perform tasks or behave in a certain way.",
                        type: 'open-ended',
                        answer: "animal trainer",
                        tolerance: 2
                    },
                    {
                        question: "What do you call a person who takes care of animals in a zoo?",
                        type: 'open-ended',
                        answer: "zookeeper",
                        tolerance: 1
                    },
                    {
                        question: "A person who cleans and grooms animals, especially dogs.",
                        type: 'open-ended',
                        answer: "groomer",
                        tolerance: 1
                    },
                    {
                        question: "Which professional designs websites?",
                        type: 'multiple-choice',
                        options: ["programmer", "developer", "web designer", "IT specialist"],
                        answer: "web designer"
                    },
                    {
                        question: "What is a person who manages computer systems and networks called?",
                        type: 'open-ended',
                        answer: "IT specialist",
                        tolerance: 2
                    },
                    {
                        question: "A person whose job is to make or repair furniture.",
                        type: 'open-ended',
                        answer: "cabinetmaker",
                        tolerance: 1
                    },
                    {
                        question: "Which professional measures and fits glasses?",
                        type: 'multiple-choice',
                        options: ["optometrist", "ophthalmologist", "optician", "audiologist"],
                        answer: "optician"
                    },
                    {
                        question: "A person qualified to make and sell eyeglasses and contact lenses.",
                        type: 'open-ended',
                        answer: "optician",
                        tolerance: 1
                    },
                    {
                        question: "What do you call a medical doctor who specializes in eye diseases?",
                        type: 'open-ended',
                        answer: "ophthalmologist",
                        tolerance: 1
                    },
                    {
                        question: "A professional who tests eyesight and prescribes glasses.",
                        type: 'open-ended',
                        answer: "optometrist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional tests hearing and helps people with hearing problems?",
                        type: 'multiple-choice',
                        options: ["optician", "audiologist", "speech therapist", "physician"],
                        answer: "audiologist"
                    },
                    {
                        question: "A person who specializes in the study of hearing disorders.",
                        type: 'open-ended',
                        answer: "audiologist",
                        tolerance: 1
                    },
                    {
                        question: "What is a person who helps people with speech and language difficulties called?",
                        type: 'open-ended',
                        answer: "speech therapist",
                        tolerance: 2
                    },
                    {
                        question: "A person whose job is to keep records of what has been done or said, especially in a court.",
                        type: 'open-ended',
                        answer: "court reporter",
                        tolerance: 2
                    },
                    {
                        question: "Which professional designs buildings and supervises their construction?",
                        type: 'multiple-choice',
                        options: ["builder", "engineer", "architect", "surveyor"],
                        answer: "architect"
                    },
                    {
                        question: "What do you call a person who works with their hands to create things, especially in a skilled trade?",
                        type: 'open-ended',
                        answer: "craftsperson",
                        tolerance: 2
                    },
                    {
                        question: "A person who writes books as a job.",
                        type: 'open-ended',
                        answer: "author",
                        tolerance: 1
                    },
                    {
                        question: "Which professional flies a commercial aircraft?",
                        type: 'multiple-choice',
                        options: ["pilot", "captain", "flight attendant", "air traffic controller"],
                        answer: "pilot"
                    },
                    {
                        question: "What is a person whose job is to assist passengers on an aircraft called?",
                        type: 'open-ended',
                        answer: "flight attendant",
                        tolerance: 2
                    },
                    {
                        question: "A person whose job is to manage and direct aircraft from the ground, especially at airports.",
                        type: 'open-ended',
                        answer: "air traffic controller",
                        tolerance: 3
                    },
                    {
                        question: "Which professional works in a laboratory?",
                        type: 'multiple-choice',
                        options: ["scientist", "technician", "researcher", "lab assistant"],
                        answer: "lab assistant"
                    },
                    {
                        question: "A person who assists a scientist or doctor in a laboratory.",
                        type: 'open-ended',
                        answer: "lab assistant",
                        tolerance: 2
                    },
                    {
                        question: "What do you call a person whose job is to conduct scientific investigations?",
                        type: 'open-ended',
                        answer: "researcher",
                        tolerance: 1
                    },
                    {
                        question: "A person who specializes in repairing electronic equipment.",
                        type: 'open-ended',
                        answer: "electronics technician",
                        tolerance: 2
                    },
                    {
                        question: "Which professional designs and builds roads and bridges?",
                        type: 'multiple-choice',
                        options: ["architect", "mechanical engineer", "civil engineer", "electrical engineer"],
                        answer: "civil engineer"
                    },
                    {
                        question: "An engineer who designs and maintains roads, bridges, dams, and other public works.",
                        type: 'open-ended',
                        answer: "civil engineer",
                        tolerance: 2
                    },
                    {
                        question: "What is a person who designs and builds machines called?",
                        type: 'open-ended',
                        answer: "mechanical engineer",
                        tolerance: 2
                    },
                    {
                        question: "A professional who studies and forecasts economic trends.",
                        type: 'open-ended',
                        answer: "economist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional studies societies and human relationships?",
                        type: 'multiple-choice',
                        options: ["psychologist", "historian", "sociologist", "anthropologist"],
                        answer: "sociologist"
                    },
                    {
                        question: "What do you call a person who designs and creates video games?",
                        type: 'open-ended',
                        answer: "game designer",
                        tolerance: 2
                    },
                    {
                        question: "A person who writes and develops software for video games.",
                        type: 'open-ended',
                        answer: "game developer",
                        tolerance: 2
                    },
                    {
                        question: "Which professional works in a kitchen, often leading a team of cooks?",
                        type: 'multiple-choice',
                        options: ["baker", "cook", "chef", "waiter"],
                        answer: "chef"
                    },
                    {
                        question: "What is a person who cleans offices or homes called?",
                        type: 'open-ended',
                        answer: "cleaner",
                        tolerance: 1
                    },
                    {
                        question: "A person whose job is to wash windows.",
                        type: 'open-ended',
                        answer: "window cleaner",
                        tolerance: 2
                    },
                    {
                        question: "Which professional works in a factory operating machinery?",
                        type: 'multiple-choice',
                        options: ["engineer", "technician", "operator", "foreman"],
                        answer: "operator"
                    },
                    {
                        question: "What do you call a person who supervises workers in a factory or construction site?",
                        type: 'open-ended',
                        answer: "foreman",
                        tolerance: 1
                    },
                    {
                        question: "A person whose job is to make or repair vehicles.",
                        type: 'open-ended',
                        answer: "mechanic",
                        tolerance: 1
                    },
                    {
                        question: "Which professional designs gardens and landscapes?",
                        type: 'multiple-choice',
                        options: ["gardener", "forester", "landscaper", "botanist"],
                        answer: "landscaper"
                    },
                    {
                        question: "What is a person who creates art using a camera?",
                        type: 'open-ended',
                        answer: "photographer",
                        tolerance: 1
                    },
                    {
                        question: "A person whose job is to write stories or novels.",
                        type: 'open-ended',
                        answer: "novelist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional performs in films or on stage?",
                        type: 'multiple-choice',
                        options: ["director", "writer", "actor", "producer"],
                        answer: "actor"
                    },
                    {
                        question: "What do you call a person who sings in operas?",
                        type: 'open-ended',
                        answer: "opera singer",
                        tolerance: 2
                    },
                    {
                        question: "A person who performs music in a band.",
                        type: 'open-ended',
                        answer: "band member",
                        tolerance: 2
                    },
                    {
                        question: "Which professional makes musical instruments?",
                        type: 'multiple-choice',
                        options: ["musician", "composer", "instrument maker", "conductor"],
                        answer: "instrument maker"
                    },
                    {
                        question: "A person who makes or repairs musical instruments.",
                        type: 'open-ended',
                        answer: "instrument maker",
                        tolerance: 2
                    },
                    {
                        question: "What is a person who designs websites called?",
                        type: 'open-ended',
                        answer: "web designer",
                        tolerance: 2
                    },
                    {
                        question: "A person whose job is to teach people to sing.",
                        type: 'open-ended',
                        answer: "singing teacher",
                        tolerance: 2
                    },
                    {
                        question: "Which professional makes clothes by hand?",
                        type: 'multiple-choice',
                        options: ["fashion designer", "stylist", "seamstress", "tailor"],
                        answer: "seamstress"
                    },
                    {
                        question: "A woman whose job is to sew and make clothes.",
                        type: 'open-ended',
                        answer: "seamstress",
                        tolerance: 1
                    },
                    {
                        question: "What do you call a person whose job is to transport goods?",
                        type: 'open-ended',
                        answer: "transporter",
                        tolerance: 1
                    },
                    {
                        question: "A person who delivers things, especially documents or parcels.",
                        type: 'open-ended',
                        answer: "courier",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works in a court of law?",
                        type: 'multiple-choice',
                        options: ["police officer", "lawyer", "detective", "judge"],
                        answer: "judge"
                    },
                    {
                        question: "A public official appointed to decide cases in a court of law.",
                        type: 'open-ended',
                        answer: "judge",
                        tolerance: 1
                    },
                    {
                        question: "What is a person who works for the government called?",
                        type: 'open-ended',
                        answer: "civil servant",
                        tolerance: 2
                    },
                    {
                        question: "A person who provides care and support for someone who is ill or old at home.",
                        type: 'open-ended',
                        answer: "carer",
                        tolerance: 1
                    },
                    {
                        question: "Which professional creates plans for building things?",
                        type: 'multiple-choice',
                        options: ["builder", "technician", "architect", "craftsperson"],
                        answer: "architect"
                    },
                    {
                        question: "What do you call a person who writes articles for newspapers or magazines?",
                        type: 'open-ended',
                        answer: "journalist",
                        tolerance: 1
                    },
                    {
                        question: "A person whose job is to collect and analyze information about a particular subject.",
                        type: 'open-ended',
                        answer: "analyst",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works with numbers and financial records?",
                        type: 'multiple-choice',
                        options: ["economist", "statistician", "accountant", "actuary"],
                        answer: "accountant"
                    },
                    {
                        question: "What is a person who collects and analyzes numerical data called?",
                        type: 'open-ended',
                        answer: "statistician",
                        tolerance: 1
                    },
                    {
                        question: "A person who calculates risks, especially for insurance companies.",
                        type: 'open-ended',
                        answer: "actuary",
                        tolerance: 1
                    },
                    {
                        question: "Which professional prepares food in a private home?",
                        type: 'multiple-choice',
                        options: ["cook", "chef", "caterer", "private cook"],
                        answer: "private cook"
                    },
                    {
                        question: "A cook who is employed by a family or individual to cook in their home.",
                        type: 'open-ended',
                        answer: "private cook",
                        tolerance: 2
                    },
                    {
                        question: "What do you call a company or person that provides food and service for events?",
                        type: 'open-ended',
                        answer: "caterer",
                        tolerance: 1
                    },
                    {
                        question: "A person whose job is to deliver meals, usually from a restaurant.",
                        type: 'open-ended',
                        answer: "delivery driver",
                        tolerance: 2
                    },
                    {
                        question: "Which professional works in a shop selling books?",
                        type: 'multiple-choice',
                        options: ["librarian", "publisher", "bookseller", "author"],
                        answer: "bookseller"
                    },
                    {
                        question: "A person who sells books.",
                        type: 'open-ended',
                        answer: "bookseller",
                        tolerance: 1
                    },
                    {
                        question: "What is a person who manages a shop called?",
                        type: 'open-ended',
                        answer: "shop manager",
                        tolerance: 2
                    },
                    {
                        question: "A person whose job is to pack groceries at a supermarket.",
                        type: 'open-ended',
                        answer: "bagger",
                        tolerance: 1
                    },
                    {
                        question: "Which professional washes dishes in a restaurant kitchen?",
                        type: 'multiple-choice',
                        options: ["cook", "chef", "kitchen porter", "waiter"],
                        answer: "kitchen porter"
                    },
                    {
                        question: "A person employed in a restaurant kitchen to wash dishes and do other manual tasks.",
                        type: 'open-ended',
                        answer: "kitchen porter",
                        tolerance: 2
                    },
                    {
                        question: "What do you call a person who cleans public areas in a building?",
                        type: 'open-ended',
                        answer: "janitor",
                        tolerance: 1
                    },
                    {
                        question: "A person whose job is to look after a large building or area, such as a school or park.",
                        type: 'open-ended',
                        answer: "caretaker",
                        tolerance: 1
                    },
                    {
                        question: "Which professional cleans windows?",
                        type: 'multiple-choice',
                        options: ["cleaner", "janitor", "window cleaner", "housekeeper"],
                        answer: "window cleaner"
                    },
                    {
                        question: "What is a person who is paid to manage a house and do domestic work called?",
                        type: 'open-ended',
                        answer: "housekeeper",
                        tolerance: 1
                    },
                    {
                        question: "A person whose job is to deliver milk to people's houses.",
                        type: 'open-ended',
                        answer: "milkman",
                        tolerance: 1
                    },
                    {
                        question: "Which professional collects rubbish?",
                        type: 'multiple-choice',
                        options: ["janitor", "cleaner", "waste collector", "street sweeper"],
                        answer: "waste collector"
                    },
                    {
                        question: "A person whose job is to collect waste or rubbish.",
                        type: 'open-ended',
                        answer: "waste collector",
                        tolerance: 2
                    },
                    {
                        question: "What do you call a person whose job is to clean streets?",
                        type: 'open-ended',
                        answer: "street sweeper",
                        tolerance: 2
                    },
                    {
                        question: "A person whose job is to prepare dead bodies for burial or cremation.",
                        type: 'open-ended',
                        answer: "embalmer",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works in a funeral home?",
                        type: 'multiple-choice',
                        options: ["counsellor", "therapist", "funeral director", "clergyman"],
                        answer: "funeral director"
                    },
                    {
                        question: "A person who arranges and manages funerals.",
                        type: 'open-ended',
                        answer: "funeral director",
                        tolerance: 2
                    },
                    {
                        question: "What is a person who gives advice and support to people with problems called?",
                        type: 'open-ended',
                        answer: "counsellor",
                        tolerance: 1
                    },
                    {
                        question: "A professional who helps people deal with mental or emotional problems.",
                        type: 'open-ended',
                        answer: "therapist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works in a church and leads religious services?",
                        type: 'multiple-choice',
                        options: ["monk", "nun", "priest", "deacon"],
                        answer: "priest"
                    },
                    {
                        question: "A member of the clergy in a Christian church.",
                        type: 'open-ended',
                        answer: "priest",
                        tolerance: 1
                    },
                    {
                        question: "What do you call a woman who is a member of a religious order and lives in a convent?",
                        type: 'open-ended',
                        answer: "nun",
                        tolerance: 1
                    },
                    {
                        question: "A man who is a member of a religious order and lives in a monastery.",
                        type: 'open-ended',
                        answer: "monk",
                        tolerance: 1
                    },
                    {
                        question: "Which professional studies ancient cultures and languages?",
                        type: 'multiple-choice',
                        options: ["archaeologist", "historian", "linguist", "philologist"],
                        answer: "philologist"
                    },
                    {
                        question: "A person who studies the history of language.",
                        type: 'open-ended',
                        answer: "philologist",
                        tolerance: 1
                    },
                    {
                        question: "What is a person who studies language called?",
                        type: 'open-ended',
                        answer: "linguist",
                        tolerance: 1
                    },
                    {
                        question: "A professional who studies the human body and its structure.",
                        type: 'open-ended',
                        answer: "anatomist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional treats foot problems?",
                        type: 'multiple-choice',
                        options: ["chiropractor", "physiotherapist", "podiatrist", "osteopath"],
                        answer: "podiatrist"
                    },
                    {
                        question: "A medical practitioner who treats disorders of the foot and ankle.",
                        type: 'open-ended',
                        answer: "podiatrist",
                        tolerance: 1
                    },
                    {
                        question: "What do you call a professional who treats back and joint problems by manipulating the spine?",
                        type: 'open-ended',
                        answer: "chiropractor",
                        tolerance: 1
                    },
                    {
                        question: "A professional who helps patients recover from injury or illness through exercise and massage.",
                        type: 'open-ended',
                        answer: "physiotherapist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional treats muscle and joint problems using massage and manipulation?",
                        type: 'multiple-choice',
                        options: ["chiropractor", "physiotherapist", "osteopath", "massage therapist"],
                        answer: "osteopath"
                    },
                    {
                        question: "A professional who treats medical conditions by manipulating bones and muscles.",
                        type: 'open-ended',
                        answer: "osteopath",
                        tolerance: 1
                    },
                    {
                        question: "What is a professional who gives massages called?",
                        type: 'open-ended',
                        answer: "massage therapist",
                        tolerance: 2
                    },
                    {
                        question: "A person whose job is to clean buildings or vehicles, often professionally.",
                        type: 'open-ended',
                        answer: "cleaner",
                        tolerance: 1
                    },
                    {
                        question: "Which professional removes dirt and grime from various surfaces?",
                        type: 'multiple-choice',
                        options: ["janitor", "caretaker", "cleaner", "sanitation worker"],
                        answer: "cleaner"
                    },
                    {
                        question: "What do you call a worker involved in waste disposal and public cleanliness?",
                        type: 'open-ended',
                        answer: "sanitation worker",
                        tolerance: 2
                    },
                    {
                        question: "A person whose job is to protect wild animals.",
                        type: 'open-ended',
                        answer: "game warden",
                        tolerance: 2
                    },
                    {
                        question: "Which professional studies the behaviour of animals in their natural habitats?",
                        type: 'multiple-choice',
                        options: ["zoologist", "veterinarian", "ethologist", "animal trainer"],
                        answer: "ethologist"
                    },
                    {
                        question: "A person who studies animal behaviour.",
                        type: 'open-ended',
                        answer: "ethologist",
                        tolerance: 1
                    },
                    {
                        question: "What is a person who studies the stars called?",
                        type: 'open-ended',
                        answer: "astronomer",
                        tolerance: 1
                    },
                    {
                        question: "Which professional designs gardens and outdoor spaces?",
                        type: 'multiple-choice',
                        options: ["gardener", "botanist", "landscape architect", "forester"],
                        answer: "landscape architect"
                    },
                    {
                        question: "A person who plans and designs the layout of ground for gardens and recreational areas.",
                        type: 'open-ended',
                        answer: "landscape architect",
                        tolerance: 2
                    },
                    {
                        question: "What do you call a person who studies rocks and the earth's crust?",
                        type: 'open-ended',
                        answer: "geologist",
                        tolerance: 1
                    },
                    {
                        question: "A professional who studies the structure of the earth.",
                        type: 'open-ended',
                        answer: "geophysicist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional studies the atmosphere and weather?",
                        type: 'multiple-choice',
                        options: ["geographer", "climatologist", "meteorologist", "oceanographer"],
                        answer: "meteorologist"
                    },
                    {
                        question: "What is a person who studies climate and climate change called?",
                        type: 'open-ended',
                        answer: "climatologist",
                        tolerance: 1
                    },
                    {
                        question: "A professional who studies the oceans.",
                        type: 'open-ended',
                        answer: "oceanographer",
                        tolerance: 1
                    },
                    {
                        question: "Which professional studies ancient human history and prehistory?",
                        type: 'multiple-choice',
                        options: ["historian", "archaeologist", "anthropologist", "paleontologist"],
                        answer: "archaeologist"
                    },
                    {
                        question: "What do you call a person who studies human origins and development?",
                        type: 'open-ended',
                        answer: "anthropologist",
                        tolerance: 1
                    },
                    {
                        question: "A person who studies fossils.",
                        type: 'open-ended',
                        answer: "paleontologist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works in a museum?",
                        type: 'multiple-choice',
                        options: ["librarian", "archivist", "curator", "researcher"],
                        answer: "curator"
                    },
                    {
                        question: "What is a person whose job is to translate written text from one language to another?",
                        type: 'open-ended',
                        answer: "translator",
                        tolerance: 1
                    },
                    {
                        question: "A professional who provides care for children when parents are away.",
                        type: 'open-ended',
                        answer: "childcarer",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works with children, teaching or caring for them?",
                        type: 'multiple-choice',
                        options: ["teacher", "nanny", "childminder", "all of the above"],
                        answer: "all of the above"
                    },
                    {
                        question: "A person whose job is to look after children in their own home.",
                        type: 'open-ended',
                        answer: "nanny",
                        tolerance: 1
                    },
                    {
                        question: "What do you call a person who is paid to look after children, usually in her own home?",
                        type: 'open-ended',
                        answer: "childminder",
                        tolerance: 1
                    },
                    {
                        question: "A professional who teaches at a university.",
                        type: 'open-ended',
                        answer: "professor",
                        tolerance: 1
                    },
                    {
                        question: "Which professional writes screenplays for films or television?",
                        type: 'multiple-choice',
                        options: ["novelist", "poet", "screenwriter", "playwright"],
                        answer: "screenwriter"
                    },
                    {
                        question: "A person who writes screenplays.",
                        type: 'open-ended',
                        answer: "screenwriter",
                        tolerance: 1
                    },
                    {
                        question: "What is a person who edits video or audio recordings called?",
                        type: 'open-ended',
                        answer: "editor",
                        tolerance: 2
                    },
                    {
                        question: "A person whose job is to record sound for a film, television program, or music.",
                        type: 'open-ended',
                        answer: "sound engineer",
                        tolerance: 2
                    },
                    {
                        question: "Which professional operates a musical instrument?",
                        type: 'multiple-choice',
                        options: ["composer", "conductor", "musician", "singer"],
                        answer: "musician"
                    },
                    {
                        question: "What do you call a professional who makes instruments out of wood?",
                        type: 'open-ended',
                        answer: "luthier",
                        tolerance: 1
                    },
                    {
                        question: "A person who makes and repairs stringed instruments.",
                        type: 'open-ended',
                        answer: "luthier",
                        tolerance: 1
                    },
                    {
                        question: "Which professional designs the look and feel of products or services?",
                        type: 'multiple-choice',
                        options: ["engineer", "developer", "designer", "analyst"],
                        answer: "designer"
                    },
                    {
                        question: "What is a person who designs industrial products called?",
                        type: 'open-ended',
                        answer: "industrial designer",
                        tolerance: 2
                    },
                    {
                        question: "A professional who creates visual content for marketing or advertising.",
                        type: 'open-ended',
                        answer: "marketing designer",
                        tolerance: 2
                    },
                    {
                        question: "Which professional works on a construction site, often doing physical labour?",
                        type: 'multiple-choice',
                        options: ["architect", "engineer", "labourer", "surveyor"],
                        answer: "labourer"
                    },
                    {
                        question: "A person doing unskilled manual work for wages.",
                        type: 'open-ended',
                        answer: "labourer",
                        tolerance: 1
                    },
                    {
                        question: "What do you call a person who works with concrete?",
                        type: 'open-ended',
                        answer: "concreter",
                        tolerance: 1
                    },
                    {
                        question: "A person who applies plaster to walls and ceilings.",
                        type: 'open-ended',
                        answer: "plasterer",
                        tolerance: 1
                    },
                    {
                        question: "Which professional installs and repairs windows?",
                        type: 'multiple-choice',
                        options: ["carpenter", "glazier", "builder", "handyman"],
                        answer: "glazier"
                    },
                    {
                        question: "A person who fits glass into windows and doors.",
                        type: 'open-ended',
                        answer: "glazier",
                        tolerance: 1
                    },
                    {
                        question: "What is a person who does a variety of small repair jobs called?",
                        type: 'open-ended',
                        answer: "handyman",
                        tolerance: 1
                    },
                    {
                        question: "A person whose job is to clean and maintain a swimming pool.",
                        type: 'open-ended',
                        answer: "pool cleaner",
                        tolerance: 2
                    },
                    {
                        question: "Which professional designs and builds websites or software?",
                        type: 'multiple-choice',
                        options: ["analyst", "tester", "developer", "manager"],
                        answer: "developer"
                    },
                    {
                        question: "A person whose job is to find problems in software or products.",
                        type: 'open-ended',
                        answer: "tester",
                        tolerance: 1
                    },
                    {
                        question: "What do you call a person whose job is to design and create clothing patterns?",
                        type: 'open-ended',
                        answer: "pattern maker",
                        tolerance: 2
                    },
                    {
                        question: "A professional who selects clothes and accessories for a person or production.",
                        type: 'open-ended',
                        answer: "stylist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional performs dangerous stunts in films?",
                        type: 'multiple-choice',
                        options: ["actor", "performer", "stunt performer", "coordinator"],
                        answer: "stunt performer"
                    },
                    {
                        question: "A person who performs dangerous acts as a job, especially in films.",
                        type: 'open-ended',
                        answer: "stunt performer",
                        tolerance: 2
                    },
                    {
                        question: "What is a person who organizes and oversees stunts in a film called?",
                        type: 'open-ended',
                        answer: "stunt coordinator",
                        tolerance: 2
                    },
                    {
                        question: "A professional who manages the schedule and activities of actors or performers.",
                        type: 'open-ended',
                        answer: "talent manager",
                        tolerance: 2
                    },
                    {
                        question: "Which professional works with sound, recording and mixing it?",
                        type: 'multiple-choice',
                        options: ["editor", "cinematographer", "sound engineer", "composer"],
                        answer: "sound engineer"
                    },
                    {
                        question: "What do you call a person who edits written text for publication?",
                        type: 'open-ended',
                        answer: "editor",
                        tolerance: 1
                    },
                    {
                        question: "A professional who checks written text for errors in grammar, spelling, and punctuation.",
                        type: 'open-ended',
                        answer: "proofreader",
                        tolerance: 1
                    },
                    {
                        question: "Which professional buys things for a company or organization?",
                        type: 'multiple-choice',
                        options: ["salesperson", "manager", "buyer", "accountant"],
                        answer: "buyer"
                    },
                    {
                        question: "A person employed to buy goods or services for a company.",
                        type: 'open-ended',
                        answer: "buyer",
                        tolerance: 1
                    },
                    {
                        question: "What is a person whose job is to sell products in a store or to other businesses?",
                        type: 'open-ended',
                        answer: "sales associate",
                        tolerance: 2
                    },
                    {
                        question: "A professional who helps customers find products and makes sales.",
                        type: 'open-ended',
                        answer: "sales clerk",
                        tolerance: 2
                    },
                    {
                        question: "Which professional provides customer service?",
                        type: 'multiple-choice',
                        options: ["salesperson", "cashier", "customer service representative", "manager"],
                        answer: "customer service representative"
                    },
                    {
                        question: "A person whose job is to assist customers with problems or questions.",
                        type: 'open-ended',
                        answer: "customer service representative",
                        tolerance: 3
                    },
                    {
                        question: "What do you call a person who works in a kitchen preparing food?",
                        type: 'open-ended',
                        answer: "cook",
                        tolerance: 1
                    },
                    {
                        question: "A professional who specializes in making pastries and desserts.",
                        type: 'open-ended',
                        answer: "pastry chef",
                        tolerance: 2
                    },
                    {
                        question: "Which professional cleans teeth and advises on dental hygiene?",
                        type: 'multiple-choice',
                        options: ["dentist", "dental assistant", "dental hygienist", "orthodontist"],
                        answer: "dental hygienist"
                    },
                    {
                        question: "What is a dentist who specializes in straightening teeth called?",
                        type: 'open-ended',
                        answer: "orthodontist",
                        tolerance: 1
                    },
                    {
                        question: "A person who assists a dentist.",
                        type: 'open-ended',
                        answer: "dental assistant",
                        tolerance: 2
                    },
                    {
                        question: "Which professional designs and builds rockets and spacecraft?",
                        type: 'multiple-choice',
                        options: ["astronomer", "pilot", "astronaut", "aerospace engineer", "mechanic"],
                        answer: "aerospace engineer"
                    },
                    {
                        question: "What do you call a person who navigates a ship or aircraft?",
                        type: 'open-ended',
                        answer: "navigator",
                        tolerance: 1
                    },
                    {
                        question: "A professional who steers a ship.",
                        type: 'open-ended',
                        answer: "helmsman",
                        tolerance: 1
                    },
                    {
                        question: "Which professional takes care of guests on a ship?",
                        type: 'multiple-choice',
                        options: ["sailor", "captain", "steward", "chef"],
                        answer: "steward"
                    },
                    {
                        question: "A person who serves passengers on a ship or aircraft.",
                        type: 'open-ended',
                        answer: "steward",
                        tolerance: 1
                    },
                    {
                        question: "What is the person in command of a ship or aircraft called?",
                        type: 'open-ended',
                        answer: "captain",
                        tolerance: 1
                    },
                    {
                        question: "A person who works as part of the crew of a ship or boat.",
                        type: 'open-ended',
                        answer: "sailor",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works in a bank and helps customers?",
                        type: 'multiple-choice',
                        options: ["accountant", "cashier", "bank teller", "manager"],
                        answer: "bank teller"
                    },
                    {
                        question: "A person who serves customers in a bank.",
                        type: 'open-ended',
                        answer: "bank teller",
                        tolerance: 2
                    },
                    {
                        question: "What do you call a person who gives advice on money matters?",
                        type: 'open-ended',
                        answer: "financial advisor",
                        tolerance: 2
                    },
                    {
                        question: "A professional who manages money for a company or person.",
                        type: 'open-ended',
                        answer: "financial manager",
                        tolerance: 2
                    },
                    {
                        question: "Which professional designs and develops computer programs?",
                        type: 'multiple-choice',
                        options: ["analyst", "tester", "developer", "programmer"],
                        answer: "programmer"
                    },
                    {
                        question: "What is a person who creates and maintains computer systems called?",
                        type: 'open-ended',
                        answer: "system administrator",
                        tolerance: 2
                    },
                    {
                        question: "A professional who specializes in cybersecurity.",
                        type: 'open-ended',
                        answer: "cybersecurity analyst",
                        tolerance: 3
                    },
                    {
                        question: "Which professional operates film or video cameras?",
                        type: 'multiple-choice',
                        options: ["director", "editor", "cinematographer", "photographer"],
                        answer: "cinematographer"
                    },
                    {
                        question: "What do you call a person who controls the operation of television or radio programmes?",
                        type: 'open-ended',
                        answer: "broadcaster",
                        tolerance: 1
                    },
                    {
                        question: "A professional who speaks on radio or television.",
                        type: 'open-ended',
                        answer: "presenter",
                        tolerance: 1
                    },
                    {
                        question: "Which professional designs the sets for plays or films?",
                        type: 'multiple-choice',
                        options: ["costume designer", "set designer", "director", "producer"],
                        answer: "set designer"
                    },
                    {
                        question: "A person who designs the sets and scenery for a play or film.",
                        type: 'open-ended',
                        answer: "set designer",
                        tolerance: 2
                    },
                    {
                        question: "What is a person who designs the clothes that actors wear in a play or film called?",
                        type: 'open-ended',
                        answer: "costume designer",
                        tolerance: 2
                    },
                    {
                        question: "A professional who does makeup and hairstyles for actors or models.",
                        type: 'open-ended',
                        answer: "makeup artist",
                        tolerance: 2
                    },
                    {
                        question: "Which professional specializes in making sculptures?",
                        type: 'multiple-choice',
                        options: ["painter", "artist", "sculptor", "ceramist"],
                        answer: "sculptor"
                    },
                    {
                        question: "What do you call a person who makes things out of stone?",
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
                        question: "Which professional designs books or magazines?",
                        type: 'multiple-choice',
                        options: ["writer", "editor", "publisher", "book designer"],
                        answer: "book designer"
                    },
                    {
                        question: "A person who designs the layout and appearance of books.",
                        type: 'open-ended',
                        answer: "book designer",
                        tolerance: 2
                    },
                    {
                        question: "What is a person who sells goods from door to door called?",
                        type: 'open-ended',
                        answer: "peddler",
                        tolerance: 1
                    },
                    {
                        question: "A person whose job is to look after animals, typically horses, in a stable.",
                        type: 'open-ended',
                        answer: "groom",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works in a circus performing tricks?",
                        type: 'multiple-choice',
                        options: ["clown", "animal trainer", "acrobat", "ringmaster"],
                        answer: "acrobat"
                    },
                    {
                        question: "A person who performs gymnastic feats.",
                        type: 'open-ended',
                        answer: "acrobat",
                        tolerance: 1
                    },
                    {
                        question: "What do you call a performer who makes people laugh, usually in a circus?",
                        type: 'open-ended',
                        answer: "clown",
                        tolerance: 1
                    },
                    {
                        question: "The person who manages a circus performance.",
                        type: 'open-ended',
                        answer: "ringmaster",
                        tolerance: 1
                    },
                    {
                        question: "Which professional treats eye problems?",
                        type: 'multiple-choice',
                        options: ["optician", "optometrist", "ophthalmologist", "all of the above"],
                        answer: "all of the above"
                    },
                    {
                        question: "What is a medical doctor specializing in surgery called?",
                        type: 'open-ended',
                        answer: "surgeon",
                        tolerance: 1
                    },
                    {
                        question: "A professional who helps patients regain strength and movement after illness or injury.",
                        type: 'open-ended',
                        answer: "physiotherapist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional studies fossils to learn about ancient life?",
                        type: 'multiple-choice',
                        options: ["archaeologist", "geologist", "paleontologist", "biologist"],
                        answer: "paleontologist"
                    },
                    {
                        question: "What do you call a person who studies birds?",
                        type: 'open-ended',
                        answer: "ornithologist",
                        tolerance: 1
                    },
                    {
                        question: "A professional who studies fish.",
                        type: 'open-ended',
                        answer: "ichthyologist",
                        tolerance: 2
                    },
                    {
                        question: "Which professional studies marine life?",
                        type: 'multiple-choice',
                        options: ["biologist", "oceanographer", "marine biologist", "zoologist"],
                        answer: "marine biologist"
                    },
                    {
                        question: "A person who studies living things in the sea.",
                        type: 'open-ended',
                        answer: "marine biologist",
                        tolerance: 2
                    },
                    {
                        question: "What is a person who studies the earth's physical features called?",
                        type: 'open-ended',
                        answer: "geographer",
                        tolerance: 1
                    },
                    {
                        question: "A professional who studies maps.",
                        type: 'open-ended',
                        answer: "cartographer",
                        tolerance: 1
                    },
                    {
                        question: "Which professional designs and develops computer software?",
                        type: 'multiple-choice',
                        options: ["programmer", "web designer", "software developer", "IT specialist"],
                        answer: "software developer"
                    },
                    {
                        question: "What do you call a person who checks software for errors?",
                        type: 'open-ended',
                        answer: "software tester",
                        tolerance: 2
                    },
                    {
                        question: "A professional who manages a team or project.",
                        type: 'open-ended',
                        answer: "manager",
                        tolerance: 1
                    },
                    {
                        question: "Which professional provides administrative support in an office?",
                        type: 'multiple-choice',
                        options: ["manager", "supervisor", "assistant", "receptionist"],
                        answer: "assistant"
                    },
                    {
                        question: "What is a person who supervises others at work called?",
                        type: 'open-ended',
                        answer: "supervisor",
                        tolerance: 1
                    },
                    {
                        question: "A professional who works in a mine extracting minerals or coal.",
                        type: 'open-ended',
                        answer: "miner",
                        tolerance: 1
                    },
                    {
                        question: "Which professional cuts trees for timber?",
                        type: 'multiple-choice',
                        options: ["forester", "lumberjack", "gardener", "logger"],
                        answer: "lumberjack"
                    },
                    {
                        question: "A person whose job is to fell trees.",
                        type: 'open-ended',
                        answer: "lumberjack",
                        tolerance: 1
                    },
                    {
                        question: "What do you call a person who works with leather?",
                        type: 'open-ended',
                        answer: "leatherworker",
                        tolerance: 1
                    },
                    {
                        question: "A professional who makes things from leather.",
                        type: 'open-ended',
                        answer: "leather artisan",
                        tolerance: 2
                    },
                    {
                        question: "Which professional makes pottery?",
                        type: 'multiple-choice',
                        options: ["sculptor", "artist", "ceramist", "mason"],
                        answer: "ceramist"
                    },
                    {
                        question: "What is a person who specializes in working with glass called?",
                        type: 'open-ended',
                        answer: "glassworker",
                        tolerance: 1
                    },
                    {
                        question: "A professional who sets gemstones in jewellery.",
                        type: 'open-ended',
                        answer: "gem setter",
                        tolerance: 2
                    },
                    {
                        question: "Which professional designs and makes clothing, often by hand?",
                        type: 'multiple-choice',
                        options: ["fashion designer", "seamstress", "tailor", "dressmaker"],
                        answer: "dressmaker"
                    },
                    {
                        question: "What do you call a person who stitches things using a needle and thread?",
                        type: 'open-ended',
                        answer: "sewer",
                        tolerance: 1
                    },
                    {
                        question: "A professional who works in retail, selling goods.",
                        type: 'open-ended',
                        answer: "retail worker",
                        tolerance: 2
                    },
                    {
                        question: "Which professional serves coffee, especially in a coffee shop?",
                        type: 'multiple-choice',
                        options: ["waiter", "bartender", "barista", "cook"],
                        answer: "barista"
                    },
                    {
                        question: "A person who makes and serves coffee drinks.",
                        type: 'open-ended',
                        answer: "barista",
                        tolerance: 1
                    },
                    {
                        question: "What is a person who prepares and sells sandwiches called?",
                        type: 'open-ended',
                        answer: "sandwich artist",
                        tolerance: 2
                    },
                    {
                        question: "A professional who drives a taxi.",
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
                        question: "What do you call a person employed to drive a private car for someone else?",
                        type: 'open-ended',
                        answer: "chauffeur",
                        tolerance: 1
                    },
                    {
                        question: "A professional who cleans and maintains buildings and grounds.",
                        type: 'open-ended',
                        answer: "caretaker",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works in a laboratory conducting tests?",
                        type: 'multiple-choice',
                        options: ["scientist", "researcher", "lab technician", "assistant"],
                        answer: "lab technician"
                    },
                    {
                        question: "A person who performs tests and analysis in a laboratory.",
                        type: 'open-ended',
                        answer: "lab technician",
                        tolerance: 2
                    },
                    {
                        question: "What is a person who researches and writes history books called?",
                        type: 'open-ended',
                        answer: "historian",
                        tolerance: 1
                    },
                    {
                        question: "A professional who studies the behaviour of humans in societies.",
                        type: 'open-ended',
                        answer: "sociologist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional creates visual designs for products?",
                        type: 'multiple-choice',
                        options: ["graphic designer", "web designer", "illustrator", "product designer"],
                        answer: "product designer"
                    },
                    {
                        question: "A person who designs products to be manufactured.",
                        type: 'open-ended',
                        answer: "product designer",
                        tolerance: 2
                    },
                    {
                        question: "What do you call a person whose job is to check facts in writing or media?",
                        type: 'open-ended',
                        answer: "fact checker",
                        tolerance: 2
                    },
                    {
                        question: "A professional who writes content for advertising.",
                        type: 'open-ended',
                        answer: "copywriter",
                        tolerance: 1
                    },
                    {
                        question: "Which professional creates presentations or visual aids for meetings?",
                        type: 'multiple-choice',
                        options: ["analyst", "graphic designer", "presenter", "administrator"],
                        answer: "graphic designer"
                    },
                    {
                        question: "What is a person who performs administrative tasks in an office called?",
                        type: 'open-ended',
                        answer: "administrator",
                        tolerance: 1
                    },
                    {
                        question: "A professional who types letters and documents.",
                        type: 'open-ended',
                        answer: "typist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works in a warehouse?",
                        type: 'multiple-choice',
                        options: ["driver", "packer", "operator", "warehouse worker"],
                        answer: "warehouse worker"
                    },
                    {
                        question: "A person who works in a warehouse, handling goods.",
                        type: 'open-ended',
                        answer: "warehouse worker",
                        tolerance: 2
                    },
                    {
                        question: "What do you call a person whose job is to pack things?",
                        type: 'open-ended',
                        answer: "packer",
                        tolerance: 1
                    },
                    {
                        question: "A professional who drives heavy goods vehicles.",
                        type: 'open-ended',
                        answer: "truck driver",
                        tolerance: 2
                    },
                    {
                        question: "Which professional works with metal, cutting and shaping it?",
                        type: 'multiple-choice',
                        options: ["blacksmith", "welder", "metalworker", "engineer"],
                        answer: "metalworker"
                    },
                    {
                        question: "A person who makes or repairs things out of metal.",
                        type: 'open-ended',
                        answer: "metalworker",
                        tolerance: 1
                    },
                    {
                        question: "What is a person who makes things from pottery called?",
                        type: 'open-ended',
                        answer: "potter",
                        tolerance: 1
                    },
                    {
                        question: "A professional who creates glass objects by shaping molten glass.",
                        type: 'open-ended',
                        answer: "glassblower",
                        tolerance: 1
                    },
                    {
                        question: "Which professional designs and makes jewellery?",
                        type: 'multiple-choice',
                        options: ["artist", "craftsperson", "jeweler", "designer"],
                        answer: "jeweler"
                    },
                    {
                        question: "What do you call a person who makes or repairs musical instruments?",
                        type: 'open-ended',
                        answer: "instrument maker",
                        tolerance: 2
                    },
                    {
                        question: "A professional who tunes pianos.",
                        type: 'open-ended',
                        answer: "piano tuner",
                        tolerance: 2
                    },
                    {
                        question: "Which professional works in a theatre, managing the technical aspects?",
                        type: 'multiple-choice',
                        options: ["director", "actor", "stage manager", "technician"],
                        answer: "stage manager"
                    },
                    {
                        question: "A person responsible for the stage, lighting, and sound during a play.",
                        type: 'open-ended',
                        answer: "stage manager",
                        tolerance: 2
                    },
                    {
                        question: "What is a person whose job is to sweep streets called?",
                        type: 'open-ended',
                        answer: "street sweeper",
                        tolerance: 2
                    },
                    {
                        question: "A professional who buries the dead.",
                        type: 'open-ended',
                        answer: "gravedigger",
                        tolerance: 1
                    },
                    {
                        question: "Which professional prepares dead bodies for funeral services?",
                        type: 'multiple-choice',
                        options: ["funeral director", "embalmer", "undertaker", "mortician"],
                        answer: "embalmer"
                    },
                    {
                        question: "What do you call a person whose job is to arrange funerals?",
                        type: 'open-ended',
                        answer: "undertaker",
                        tolerance: 1
                    },
                    {
                        question: "A professional who provides grief counselling.",
                        type: 'open-ended',
                        answer: "grief counsellor",
                        tolerance: 2
                    },
                    {
                        question: "Which professional works in a monastery?",
                        type: 'multiple-choice',
                        options: ["priest", "nun", "monk", "deacon"],
                        answer: "monk"
                    },
                    {
                        question: "What is a religious minister in some Christian churches called?",
                        type: 'open-ended',
                        answer: "deacon",
                        tolerance: 1
                    },
                    {
                        question: "A professional who studies ancient inscriptions and texts.",
                        type: 'open-ended',
                        answer: "epigraphist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional studies languages?",
                        type: 'multiple-choice',
                        options: ["philologist", "historian", "linguist", "anthropologist"],
                        answer: "linguist"
                    },
                    {
                        question: "What do you call a professional who helps people recover from physical injuries through exercise?",
                        type: 'open-ended',
                        answer: "physiotherapist",
                        tolerance: 1
                    },
                    {
                        question: "A medical professional who treats disorders of the foot.",
                        type: 'open-ended',
                        answer: "podiatrist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional treats mental health conditions?",
                        type: 'multiple-choice',
                        options: ["psychologist", "sociologist", "psychiatrist", "therapist"],
                        answer: "psychiatrist"
                    },
                    {
                        question: "What is a non-medical professional who studies the mind and behaviour called?",
                        type: 'open-ended',
                        answer: "psychologist",
                        tolerance: 1
                    },
                    {
                        question: "A professional who studies the physical processes of living organisms.",
                        type: 'open-ended',
                        answer: "physiologist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional studies weather patterns and climate?",
                        type: 'multiple-choice',
                        options: ["meteorologist", "oceanographer", "climatologist", "geographer"],
                        answer: "climatologist"
                    },
                    {
                        question: "What do you call a person who studies the sea?",
                        type: 'open-ended',
                        answer: "oceanographer",
                        tolerance: 1
                    },
                    {
                        question: "A professional who studies marine life.",
                        type: 'open-ended',
                        answer: "marine biologist",
                        tolerance: 2
                    },
                    {
                        question: "Which professional studies rocks?",
                        type: 'multiple-choice',
                        options: ["geographer", "archaeologist", "geologist", "paleontologist"],
                        answer: "geologist"
                    },
                    {
                        question: "What is a person who studies minerals called?",
                        type: 'open-ended',
                        answer: "mineralogist",
                        tolerance: 1
                    },
                    {
                        question: "A professional who studies animals, especially their classification.",
                        type: 'open-ended',
                        answer: "zoologist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional studies plants?",
                        type: 'multiple-choice',
                        options: ["biologist", "zoologist", "botanist", "ethologist"],
                        answer: "botanist"
                    },
                    {
                        question: "What do you call a person whose job is to collect and identify plants?",
                        type: 'open-ended',
                        answer: "botanist",
                        tolerance: 1
                    },
                    {
                        question: "A professional who studies the natural world.",
                        type: 'open-ended',
                        answer: "naturalist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works with numbers and financial data?",
                        type: 'multiple-choice',
                        options: ["economist", "manager", "accountant", "analyst"],
                        answer: "accountant"
                    },
                    {
                        question: "What is a person who studies economics called?",
                        type: 'open-ended',
                        answer: "economist",
                        tolerance: 1
                    },
                    {
                        question: "A professional who specializes in calculating risks for financial planning.",
                        type: 'open-ended',
                        answer: "actuary",
                        tolerance: 1
                    },
                    {
                        question: "Which professional provides legal advice?",
                        type: 'multiple-choice',
                        options: ["judge", "police officer", "lawyer", "paralegal"],
                        answer: "lawyer"
                    },
                    {
                        question: "What do you call a person who assists lawyers with legal work?",
                        type: 'open-ended',
                        answer: "paralegal",
                        tolerance: 1
                    },
                    {
                        question: "A professional who works in a court, recording what is said.",
                        type: 'open-ended',
                        answer: "court reporter",
                        tolerance: 2
                    },
                    {
                        question: "Which professional teaches at a school?",
                        type: 'multiple-choice',
                        options: ["professor", "lecturer", "teacher", "tutor"],
                        answer: "teacher"
                    },
                    {
                        question: "What is a person who gives private lessons called?",
                        type: 'open-ended',
                        answer: "tutor",
                        tolerance: 1
                    },
                    {
                        question: "A professional who gives lectures, usually at a university.",
                        type: 'open-ended',
                        answer: "lecturer",
                        tolerance: 1
                    },
                    {
                        question: "Which professional performs music in public?",
                        type: 'multiple-choice',
                        options: ["composer", "conductor", "musician", "singer"],
                        answer: "musician"
                    },
                    {
                        question: "What do you call a person who composes and conducts music?",
                        type: 'open-ended',
                        answer: "maestro",
                        tolerance: 1
                    },
                    {
                        question: "A professional who writes novels.",
                        type: 'open-ended',
                        answer: "novelist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional writes and performs poetry?",
                        type: 'multiple-choice',
                        options: ["writer", "author", "poet", "lyricist"],
                        answer: "poet"
                    },
                    {
                        question: "What is a person who writes the words for songs called?",
                        type: 'open-ended',
                        answer: "lyricist",
                        tolerance: 1
                    },
                    {
                        question: "A professional who writes reviews of books, films, or music.",
                        type: 'open-ended',
                        answer: "critic",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works in the media, presenting news or shows?",
                        type: 'multiple-choice',
                        options: ["journalist", "editor", "presenter", "producer"],
                        answer: "presenter"
                    },
                    {
                        question: "What do you call a person who reports news?",
                        type: 'open-ended',
                        answer: "reporter",
                        tolerance: 1
                    },
                    {
                        question: "A professional who works on the technical side of film or television production.",
                        type: 'open-ended',
                        answer: "technician",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works with cameras on a film set?",
                        type: 'multiple-choice',
                        options: ["director", "cinematographer", "camera operator", "gaffer"],
                        answer: "camera operator"
                    },
                    {
                        question: "What is the chief lighting technician on a film set called?",
                        type: 'open-ended',
                        answer: "gaffer",
                        tolerance: 1
                    },
                    {
                        question: "A professional who is responsible for the sound on a film set.",
                        type: 'open-ended',
                        answer: "sound recordist",
                        tolerance: 2
                    },
                    {
                        question: "Which professional makes objects out of wood, especially decorative ones?",
                        type: 'multiple-choice',
                        options: ["carpenter", "joiner", "woodcarver", "cabinetmaker"],
                        answer: "woodcarver"
                    },
                    {
                        question: "A person who carves objects from wood.",
                        type: 'open-ended',
                        answer: "woodcarver",
                        tolerance: 1
                    },
                    {
                        question: "What do you call a skilled worker who joins wood together?",
                        type: 'open-ended',
                        answer: "joiner",
                        tolerance: 1
                    },
                    {
                        question: "A professional who makes or repairs roofs.",
                        type: 'open-ended',
                        answer: "roofer",
                        tolerance: 1
                    },
                    {
                        question: "Which professional lays bricks?",
                        type: 'multiple-choice',
                        options: ["builder", "mason", "bricklayer", "labourer"],
                        answer: "bricklayer"
                    },
                    {
                        question: "A person whose job is to build walls with bricks.",
                        type: 'open-ended',
                        answer: "bricklayer",
                        tolerance: 1
                    },
                    {
                        question: "What is a person who applies plaster to walls and ceilings called?",
                        type: 'open-ended',
                        answer: "plasterer",
                        tolerance: 1
                    },
                    {
                        question: "A professional who installs and repairs heating and cooling systems.",
                        type: 'open-ended',
                        answer: "HVAC technician",
                        tolerance: 2
                    },
                    {
                        question: "Which professional works on plumbing systems?",
                        type: 'multiple-choice',
                        options: ["engineer", "pipefitter", "plumber", "welder"],
                        answer: "plumber"
                    },
                    {
                        question: "What do you call a skilled worker who assembles pipes?",
                        type: 'open-ended',
                        answer: "pipefitter",
                        tolerance: 1
                    },
                    {
                        question: "A professional who paints buildings or parts of buildings.",
                        type: 'open-ended',
                        answer: "painter",
                        tolerance: 1
                    },
                    {
                        question: "Which professional installs floor coverings?",
                        type: 'multiple-choice',
                        options: ["carpenter", "tiler", "flooring installer", "builder"],
                        answer: "flooring installer"
                    },
                    {
                        question: "A person whose job is to fit floor coverings such as carpets or laminate.",
                        type: 'open-ended',
                        answer: "flooring installer",
                        tolerance: 2
                    },
                    {
                        question: "What is a person who lays tiles called?",
                        type: 'open-ended',
                        answer: "tiler",
                        tolerance: 1
                    },
                    {
                        question: "A professional who works with glass to make or repair things.",
                        type: 'open-ended',
                        answer: "glassworker",
                        tolerance: 1
                    },
                    {
                        question: "Which professional operates a crane?",
                        type: 'multiple-choice',
                        options: ["builder", "engineer", "operator", "crane operator"],
                        answer: "crane operator"
                    },
                    {
                        question: "A person whose job is to operate a crane.",
                        type: 'open-ended',
                        answer: "crane operator",
                        tolerance: 2
                    },
                    {
                        question: "What do you call a person whose job is to drive a forklift?",
                        type: 'open-ended',
                        answer: "forklift operator",
                        tolerance: 2
                    },
                    {
                        question: "A professional who cleans and polishes cars professionally.",
                        type: 'open-ended',
                        answer: "car detailer",
                        tolerance: 2
                    },
                    {
                        question: "Which professional cleans buildings or spaces?",
                        type: 'multiple-choice',
                        options: ["caretaker", "janitor", "cleaner", "housekeeper"],
                        answer: "cleaner"
                    },
                    {
                        question: "What is a person who cleans rooms in a hotel called?",
                        type: 'open-ended',
                        answer: "room attendant",
                        tolerance: 2
                    },
                    {
                        question: "A professional who manages a large house and its staff.",
                        type: 'open-ended',
                        answer: "butler",
                        tolerance: 1
                    },
                    {
                        question: "Which professional cooks and serves food in a private home?",
                        type: 'multiple-choice',
                        options: ["chef", "cook", "private chef", "housekeeper"],
                        answer: "private chef"
                    },
                    {
                        question: "A professional cook employed by a private family.",
                        type: 'open-ended',
                        answer: "private chef",
                        tolerance: 2
                    },
                    {
                        question: "What do you call a person whose job is to take care of a house and garden while the owners are away?",
                        type: 'open-ended',
                        answer: "housesitter",
                        tolerance: 1
                    },
                    {
                        question: "A professional who looks after pets while their owners are away.",
                        type: 'open-ended',
                        answer: "pet sitter",
                        tolerance: 2
                    },
                    {
                        question: "Which professional delivers items on a bicycle or motorbike?",
                        type: 'multiple-choice',
                        options: ["postman", "delivery driver", "courier", "messenger"],
                        answer: "courier"
                    },
                    {
                        question: "What is a person who delivers messages called?",
                        type: 'open-ended',
                        answer: "messenger",
                        tolerance: 1
                    },
                    {
                        question: "A professional who works in a post office.",
                        type: 'open-ended',
                        answer: "postal worker",
                        tolerance: 2
                    },
                    {
                        question: "Which professional works for the government?",
                        type: 'multiple-choice',
                        options: ["lawyer", "judge", "civil servant", "politician"],
                        answer: "civil servant"
                    },
                    {
                        question: "What do you call a person who holds political office?",
                        type: 'open-ended',
                        answer: "politician",
                        tolerance: 1
                    },
                    {
                        question: "A professional who makes laws.",
                        type: 'open-ended',
                        answer: "legislator",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works to help people in need?",
                        type: 'multiple-choice',
                        options: ["counsellor", "therapist", "social worker", "psychologist"],
                        answer: "social worker"
                    },
                    {
                        question: "A professional who helps people deal with personal or social problems.",
                        type: 'open-ended',
                        answer: "social worker",
                        tolerance: 2
                    },
                    {
                        question: "What is a person who helps people find jobs called?",
                        type: 'open-ended',
                        answer: "recruiter",
                        tolerance: 1
                    },
                    {
                        question: "A professional who conducts interviews to hire people.",
                        type: 'open-ended',
                        answer: "interviewer",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works in human resources?",
                        type: 'multiple-choice',
                        options: ["manager", "administrator", "HR specialist", "recruiter"],
                        answer: "HR specialist"
                    },
                    {
                        question: "A person who specializes in managing employees for a company.",
                        type: 'open-ended',
                        answer: "HR specialist",
                        tolerance: 2
                    },
                    {
                        question: "What do you call a professional who provides advice and support to business owners?",
                        type: 'open-ended',
                        answer: "business consultant",
                        tolerance: 2
                    },
                    {
                        question: "A professional who analyzes business data.",
                        type: 'open-ended',
                        answer: "business analyst",
                        tolerance: 2
                    },
                    {
                        question: "Which professional designs and builds the layout of websites?",
                        type: 'multiple-choice',
                        options: ["developer", "programmer", "web designer", "UX designer"],
                        answer: "web designer"
                    },
                    {
                        question: "What is a person who creates visual elements for websites or apps called?",
                        type: 'open-ended',
                        answer: "UI designer",
                        tolerance: 2
                    },
                    {
                        question: "A professional who writes technical documentation.",
                        type: 'open-ended',
                        answer: "technical writer",
                        tolerance: 2
                    },
                    {
                        question: "Which professional writes scripts for plays?",
                        type: 'multiple-choice',
                        options: ["author", "novelist", "screenwriter", "playwright"],
                        answer: "playwright"
                    },
                    {
                        question: "What do you call a person who writes lyrics for songs?",
                        type: 'open-ended',
                        answer: "lyricist",
                        tolerance: 1
                    },
                    {
                        question: "A professional who composes music.",
                        type: 'open-ended',
                        answer: "composer",
                        tolerance: 1
                    },
                    {
                        question: "Which professional performs music in front of an audience?",
                        type: 'multiple-choice',
                        options: ["composer", "conductor", "musician", "singer"],
                        answer: "musician"
                    },
                    {
                        question: "What is a person who sings professionally called?",
                        type: 'open-ended',
                        answer: "singer",
                        tolerance: 1
                    },
                    {
                        question: "A professional who dances, often in a theatre or film.",
                        type: 'open-ended',
                        answer: "dancer",
                        tolerance: 1
                    },
                    {
                        question: "Which professional leads a dance company?",
                        type: 'multiple-choice',
                        options: ["dancer", "choreographer", "director", "manager"],
                        answer: "choreographer"
                    },
                    {
                        question: "A person who creates and arranges dances.",
                        type: 'open-ended',
                        answer: "choreographer",
                        tolerance: 1
                    },
                    {
                        question: "What do you call a person who works in the theatre, managing the stage?",
                        type: 'open-ended',
                        answer: "stage manager",
                        tolerance: 2
                    },
                    {
                        question: "A professional who designs the lighting for a play or film.",
                        type: 'open-ended',
                        answer: "lighting designer",
                        tolerance: 2
                    },
                    {
                        question: "Which professional creates special effects for films?",
                        type: 'multiple-choice',
                        options: ["editor", "technician", "special effects artist", "cinematographer"],
                        answer: "special effects artist"
                    },
                    {
                        question: "A person who creates visual or sound effects for films or television.",
                        type: 'open-ended',
                        answer: "special effects artist",
                        tolerance: 3
                    },
                    {
                        question: "Which professional manages a museum or gallery?",
                        type: 'multiple-choice',
                        options: ["artist", "curator", "archivist", "librarian"],
                        answer: "curator"
                    },
                    {
                        question: "What do you call a person whose job is to restore old paintings or objects?",
                        type: 'open-ended',
                        answer: "restorer",
                        tolerance: 1
                    },
                    {
                        question: "A professional who makes copies of paintings or artworks.",
                        type: 'open-ended',
                        answer: "copyist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional designs and makes jewellery?",
                        type: 'multiple-choice',
                        options: ["artist", "craftsperson", "jeweller", "designer"],
                        answer: "jeweller"
                    },
                    {
                        question: "What is a person who works with precious metals called?",
                        type: 'open-ended',
                        answer: "goldsmith",
                        tolerance: 1
                    },
                    {
                        question: "A professional who sets precious stones in jewellery.",
                        type: 'open-ended',
                        answer: "gem setter",
                        tolerance: 2
                    },
                    {
                        question: "Which professional makes clothes for women?",
                        type: 'multiple-choice',
                        options: ["tailor", "seamstress", "dressmaker", "fashion designer"],
                        answer: "dressmaker"
                    },
                    {
                        question: "What do you call a person who designs fashion collections?",
                        type: 'open-ended',
                        answer: "fashion designer",
                        tolerance: 2
                    },
                    {
                        question: "A professional who creates patterns for clothing.",
                        type: 'open-ended',
                        answer: "pattern maker",
                        tolerance: 2
                    },
                    {
                        question: "Which professional works in a kitchen, often leading a specific section?",
                        type: 'multiple-choice',
                        options: ["cook", "waiter", "sous chef", "kitchen porter"],
                        answer: "sous chef"
                    },
                    {
                        question: "The second in command in a professional kitchen.",
                        type: 'open-ended',
                        answer: "sous chef",
                        tolerance: 2
                    },
                    {
                        question: "What is a cook who specializes in preparing sauces called?",
                        type: 'open-ended',
                        answer: "saucier",
                        tolerance: 1
                    },
                    {
                        question: "A professional who specializes in roasting meats.",
                        type: 'open-ended',
                        answer: "rotisseur",
                        tolerance: 1
                    },
                    {
                        question: "Which professional delivers food and drinks to tables?",
                        type: 'multiple-choice',
                        options: ["chef", "bartender", "waiter", "host"],
                        answer: "waiter"
                    },
                    {
                        question: "What do you call a person who welcomes guests and shows them to their tables in a restaurant?",
                        type: 'open-ended',
                        answer: "host",
                        tolerance: 1
                    },
                    {
                        question: "A professional who serves wine in a restaurant.",
                        type: 'open-ended',
                        answer: "sommelier",
                        tolerance: 1
                    },
                    {
                        question: "Which professional works at a hotel front desk?",
                        type: 'multiple-choice',
                        options: ["concierge", "porter", "receptionist", "manager"],
                        answer: "receptionist"
                    },
                    {
                        question: "What is a person who helps hotel guests with information and services called?",
                        type: 'open-ended',
                        answer: "concierge",
                        tolerance: 1
                    },
                    {
                        question: "A professional who carries luggage at a hotel.",
                        type: 'open-ended',
                        answer: "bellhop",
                        tolerance: 1
                    },
                    {
                        question: "Which professional specializes in treating skin problems?",
                        type: 'multiple-choice',
                        options: ["psychiatrist", "ophthalmologist", "dermatologist", "neurologist"],
                        answer: "dermatologist"
                    },
                    {
                        question: "A medical doctor who specializes in skin diseases.",
                        type: 'open-ended',
                        answer: "dermatologist",
                        tolerance: 1
                    },
                    {
                        question: "What do you call a professional who specializes in diagnosing diseases using laboratory tests?",
                        type: 'open-ended',
                        answer: "pathologist",
                        tolerance: 1
                    },
                    {
                        question: "A medical doctor who specializes in the study of diseases.",
                        type: 'open-ended',
                        answer: "pathologist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional specializes in conditions related to the heart?",
                        type: 'multiple-choice',
                        options: ["neurologist", "cardiologist", "pulmonologist", "nephrologist"],
                        answer: "cardiologist"
                    },
                    {
                        question: "A medical doctor specializing in the heart.",
                        type: 'open-ended',
                        answer: "cardiologist",
                        tolerance: 1
                    },
                    {
                        question: "What is a professional who specializes in lung diseases called?",
                        type: 'open-ended',
                        answer: "pulmonologist",
                        tolerance: 1
                    },
                    {
                        question: "A medical doctor specializing in kidney diseases.",
                        type: 'open-ended',
                        answer: "nephrologist",
                        tolerance: 1
                    },
                    {
                        question: "Which professional helps patients breathe better?",
                        type: 'multiple-choice',
                        options: ["cardiologist", "pulmonologist", "respiratory therapist", "anesthesiologist"],
                        answer: "respiratory therapist"
                    },
                    {
                        question: "A professional who treats patients with breathing problems.",
                        type: 'open-ended',
                        answer: "respiratory therapist",
                        tolerance: 2
                    },
                    {
                        question: "What do you call a professional who administers anesthesia?",
                        type: 'open-ended',
                        answer: "anesthesiologist",
                        tolerance: 2
                    },
                    {
                        question: "A medical doctor specializing in sleep disorders.",
                        type: 'open-ended',
                        answer: "sleep specialist",
                        tolerance: 2
                    },
                    {
                        question: "Which professional helps people manage pain?",
                        type: 'multiple-choice',
                        options: ["surgeon", "anesthesiologist", "pain specialist", "pharmacist"],
                        answer: "pain specialist"
                    },
                    {
                        question: "A medical doctor who specializes in treating and managing pain.",
                        type: 'open-ended',
                        answer: "pain specialist",
                        tolerance: 2
                    },
                    {
                        question: "What is a professional who helps patients with their diet and nutrition?",
                        type: 'open-ended',
                        answer: "dietitian",
                        tolerance: 1
                    },
                    {
                        question: "A professional who provides dietary advice.",
                        type: 'open-ended',
                        answer: "nutritionist",
                        tolerance: 1
                    }

    {
                        question: "What do you call a person who writes poems?",
                        image: 'space-2653754_1280.jpg',
                        type: 'open-ended',
                        answer: "poet",
                        tolerance: 1
                    },
                    {
                        question: "The person who cuts and joins parts of a film together is the...",
                        image: 'space-2653754_1280.jpg',
                        type: 'open-ended',
                        answer: "editor",
                        tolerance: 2
                    },
                    {
                        question: "What is a musician who plays the saxophone called?",
                        image: 'space-2653754_1280.jpg',
                        type: 'open-ended',
                        answer: "saxophonist",
                        tolerance: 3
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