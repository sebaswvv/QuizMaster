import express from 'express';
const router = express.Router();
const QuizController = require('../controllers/quizcontroller');

router
    .route('/')
    .get(QuizController.getQuiz)
    .post(QuizController.addQuiz);
    



module.exports = router;