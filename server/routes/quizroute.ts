import express from 'express';
const router = express.Router();
const QuizController = require('../controllers/quizcontroller');

router
    .route('/')
    .post(QuizController.addQuiz);



module.exports = router;