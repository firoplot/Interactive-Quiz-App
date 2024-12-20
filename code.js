
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  { question: 'What is the capital of France?', answer: 'Paris' },
  { question: 'What is 5 + 3?', answer: '8' },
  { question: 'What is the color of the sky on a clear day?', answer: 'Blue' },
];

let score = 0;
let currentQuestion = 0;

function askQuestion() {
  if (currentQuestion < questions.length) {
    rl.question(questions[currentQuestion].question + ' ', (userAnswer) => {
      if (userAnswer.trim().toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
        console.log('Correct!');
        score++;
      } else {
        console.log('Wrong! The correct answer is:', questions[currentQuestion].answer);
      }
      currentQuestion++;
      askQuestion();
    });
  } else {
    console.log(`Quiz finished! Your score is ${score}/${questions.length}.`);
    rl.close();
  }
}

console.log('Welcome to the Quiz App! Answer the following questions:');
askQuestion();
