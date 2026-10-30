// SIMPLE QUIZ GAME
// This JavaScript file is the beginner-friendly version of the Java project.

// EASY QUESTIONS
const easyQuestions = [
    {
        question: "1. What is 2 + 2?",
        choices: ["A. 3", "B. 4", "C. 5", "D. 6"],
        answer: "B"
    },
    {
        question: "2. Which color is in the middle of a rainbow?",
        choices: ["A. Blue", "B. Green", "C. Yellow", "D. Red"],
        answer: "B"
    },
    {
        question: "3. How many sides does a triangle have?",
        choices: ["A. Two", "B. Three", "C. Four", "D. Five"],
        answer: "B"
    },
    {
        question: "4. What do bees make?",
        choices: ["A. Syrup", "B. Jam", "C. Honey", "D. Cotton"],
        answer: "C"
    },
    {
        question: "5. The sun is a:",
        choices: ["A. Planet", "B. Moon", "C. Star", "D. Rock"],
        answer: "C"
    },
    {
        question: "6. Which animal says 'Moo'?",
        choices: ["A. Pig", "B. Sheep", "C. Cow", "D. Horse"],
        answer: "C"
    },
    {
        question: "7. Which finger is the longest?",
        choices: ["A. Thumb", "B. Index", "C. Middle", "D. Pinky"],
        answer: "C"
    },
    {
        question: "8. What is the opposite of 'hot'?",
        choices: ["A. Warm", "B. Cold", "C. Cool", "D. Dry"],
        answer: "B"
    },
    {
        question: "9. The capital of France is?",
        choices: ["A. Berlin", "B. Rome", "C. London", "D. Paris"],
        answer: "D"
    },
    {
        question: "10. Which season comes after spring?",
        choices: ["A. Summer", "B. Winter", "C. Fall", "D. Rainy"],
        answer: "A"
    }
];

// MEDIUM QUESTIONS
const mediumQuestions = [
    {
        question: "1. What is the square root of 64?",
        choices: ["A. 6", "B. 7", "C. 8", "D. 9"],
        answer: "C"
    },
    {
        question: "2. Who wrote 'Romeo and Juliet'?",
        choices: ["A. Dickens", "B. Twain", "C. Shakespeare", "D. Austen"],
        answer: "C"
    },
    {
        question: "3. What is the largest organ in the human body?",
        choices: ["A. Heart", "B. Brain", "C. Liver", "D. Skin"],
        answer: "D"
    },
    {
        question: "4. Which element has the symbol 'Fe'?",
        choices: ["A. Fluorine", "B. Iron", "C. Gold", "D. Silver"],
        answer: "B"
    },
    {
        question: "5. In what year did World War II end?",
        choices: ["A. 1942", "B. 1945", "C. 1950", "D. 1939"],
        answer: "B"
    },
    {
        question: "6. Which unit measures electric current?",
        choices: ["A. Volt", "B. Watt", "C. Ampere", "D. Ohm"],
        answer: "C"
    },
    {
        question: "7. What type of energy comes from the sun?",
        choices: ["A. Wind", "B. Solar", "C. Nuclear", "D. Geothermal"],
        answer: "B"
    },
    {
        question: "8. What is the chemical formula for water?",
        choices: ["A. CO2", "B. O2", "C. H2O", "D. NaCl"],
        answer: "C"
    },
    {
        question: "9. Which country gifted the Statue of Liberty to the US?",
        choices: ["A. Spain", "B. Germany", "C. France", "D. UK"],
        answer: "C"
    },
    {
        question: "10. What is a baby kangaroo called?",
        choices: ["A. Cub", "B. Fawn", "C. Joey", "D. Kit"],
        answer: "C"
    }
];

// HARD QUESTIONS
const hardQuestions = [
    {
        question: "1. What is the chemical symbol for Gold?",
        choices: ["A. Ag", "B. Au", "C. Fe", "D. Hg"],
        answer: "B"
    },
    {
        question: "2. In which year did the Western Roman Empire fall?",
        choices: ["A. 395 AD", "B. 476 AD", "C. 565 AD", "D. 1453 AD"],
        answer: "B"
    },
    {
        question: "3. Who developed the theory of relativity?",
        choices: ["A. Newton", "B. Einstein", "C. Bohr", "D. Galileo"],
        answer: "B"
    },
    {
        question: "4. What is the speed of light in a vacuum (approx.)?",
        choices: ["A. 100,000 km/s", "B. 300,000 km/s", "C. 500,000 km/s", "D. 1,000,000 km/s"],
        answer: "B"
    },
    {
        question: "5. The smallest country in the world is?",
        choices: ["A. Monaco", "B. Nauru", "C. Vatican City", "D. San Marino"],
        answer: "C"
    },
    {
        question: "6. What does the acronym 'HTML' stand for?",
        choices: ["A. Markup Language", "B. Hypertext Markup Language", "C. Text Markup Language", "D. Link Markup Language"],
        answer: "B"
    },
    {
        question: "7. Who was the first person to walk on the moon?",
        choices: ["A. Buzz Aldrin", "B. Neil Armstrong", "C. Michael Collins", "D. Yuri Gagarin"],
        answer: "B"
    },
    {
        question: "8. What is the largest ocean on Earth?",
        choices: ["A. Atlantic", "B. Indian", "C. Arctic", "D. Pacific"],
        answer: "D"
    },
    {
        question: "9. What is the primary gas found in the air we breathe?",
        choices: ["A. Oxygen", "B. Carbon Dioxide", "C. Nitrogen", "D. Hydrogen"],
        answer: "C"
    },
    {
        question: "10. What is the study of mushrooms called?",
        choices: ["A. Biology", "B. Botany", "C. Mycology", "D. Zoology"],
        answer: "C"
    }
];

// These variables keep track of the quiz.
let questions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

// Start the quiz after the user picks a difficulty.
function startQuiz() {
    const difficulty = document.getElementById("difficulty").value;

    // Choose the question list based on the difficulty.
    if (difficulty === "E") {
        questions = easyQuestions;
    } else if (difficulty === "M") {
        questions = mediumQuestions;
    } else if (difficulty === "H") {
        questions = hardQuestions;
    }

    // Make a copy and shuffle it so questions appear in a random order.
    questions = [...questions];
    questions.sort(() => Math.random() - 0.5);

    currentQuestion = 0;
    score = 0;

    document.getElementById("start-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";

    showQuestion();
}

// Display the current question and its answer choices.
function showQuestion() {
    const questionData = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        "Question " + (currentQuestion + 1) + " out of 10";

    document.getElementById("question").textContent = questionData.question;

    const choicesArea = document.getElementById("choices");
    choicesArea.innerHTML = "";

    selectedAnswer = "";

    // Create one radio button for each answer choice.
    for (let i = 0; i < questionData.choices.length; i++) {
        const choice = questionData.choices[i];
        const letter = choice.charAt(0);

        const label = document.createElement("label");
        label.className = "choice";

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = letter;

        radio.addEventListener("change", function() {
            selectedAnswer = radio.value;
        });

        label.appendChild(radio);
        label.appendChild(document.createTextNode(" " + choice));
        choicesArea.appendChild(label);
    }

    document.getElementById("message").textContent = "";
    document.getElementById("submit-button").disabled = false;
}

// Check the answer the user selected.
function checkAnswer() {
    if (selectedAnswer === "") {
        document.getElementById("message").textContent =
            "Please select an answer first.";
        return;
    }

    const correctAnswer = questions[currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {
        document.getElementById("message").textContent = "Correct!";
        score++;
    } else {
        document.getElementById("message").textContent =
            "Wrong! The correct answer was: " + correctAnswer;
    }

    document.getElementById("submit-button").disabled = true;

    // Wait a moment, then show the next question or the final score.
    setTimeout(function() {
        currentQuestion++;

        if (currentQuestion < 10) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

// Show the final score after all 10 questions.
function showResults() {
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    document.getElementById("final-score").textContent =
        "Your final score is: " + score + " out of 10.";
}

// Return to the difficulty selection screen.
function restartQuiz() {
    document.getElementById("result-screen").style.display = "none";
    document.getElementById("start-screen").style.display = "block";
}
