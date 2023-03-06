import express from 'express';
const router = express.Router();
const QuizController = require('../controllers/quizcontroller');

router
    .route('/')
    .get(QuizController.getQuiz)
    .post(QuizController.addQuiz);

// get all quizes for a user by user id
router
    .route('/user')
    .get(QuizController.getAllQuizzesFromUser);
    
module.exports = router;