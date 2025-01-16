// This my class represents a single question in the quiz.
class Question {
    constructor(question, correctAnswer) {
        this.question = question;
        this.correctAnswer = correctAnswer;
    }
    // This my method checks if the provided answer is correct.
    isCorrect(answer) {
        return answer.toLowerCase() === this.correctAnswer.toLowerCase();
    }
}
// This class is like the "manager" of the quiz, handling multiple questions and the score.
class Quiz {
    constructor() {
        this.questions = [];  
        this.score = 0;       
    }
    addQuestion(question) {
        this.questions.push(question);
    }
    takeQuiz(answers) {
        answers.forEach((answer, index) => {
            if (this.questions[index].isCorrect(answer)) {
                this.score++;
            }
        });
    }
    getScore() {
        return 'Your score is ' + this.score + '/' + this.questions.length + '.';
    }
    displayQuestions() {
        return this.questions.map(q => q.question).join(', ');
    }
}
const quiz = new Quiz();
quiz.addQuestion(new Question("What is 2 + 2?", "4"));
quiz.addQuestion(new Question("Capital of France?", "Paris"));
quiz.takeQuiz(["4", "paris"]);
console.log(quiz.getScore());