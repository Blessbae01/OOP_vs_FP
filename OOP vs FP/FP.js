// This my function creates a question object.
const createQuestion = (question, correctAnswer) => ({
    question,               
    correctAnswer,          
    isCorrect: (answer) => answer.toLowerCase() === correctAnswer.toLowerCase(),
});
// This other function sets up the quiz with an array of questions and handles the score.
const createQuiz = () => {
    let questions = [];    
    let score = 0;         
    return {
        addQuestion: (question) => {
            questions.push(question);
        },
        takeQuiz: (answers) => {
            score = questions.reduce((total, question, index) => {
                return total + (question.isCorrect(answers[index]) ? 1 : 0);
            }, 0);
        },
        getScore: () => {
            return 'Your score is ' + score + '/' + questions.length + '.';
        },
        displayQuestions: () => {
            return questions.map(q => q.question).join(', ');
        },
    };
};
const quiz = createQuiz();
quiz.addQuestion(createQuestion("What is 2 + 2?", "4"));
quiz.addQuestion(createQuestion("Capital of France?", "Paris"));
quiz.takeQuiz(["4", "paris"]);
console.log(quiz.getScore());