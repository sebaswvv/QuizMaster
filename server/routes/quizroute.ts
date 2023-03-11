import express from 'express';
import { Request, Response } from "express";
const router = express.Router();
const QuizController = require('../controllers/quizcontroller');


function routeGet (req: Request, res: Response) {
    // check if there is a search query
    if (req.query.search) {
        QuizController.searchQuizzes(req, res);
    }
    else {
        QuizController.getQuiz(req, res);
    }
}

router
    .route('/:id?')
    .get(routeGet)
    .post(QuizController.addQuiz)
    .put(QuizController.editQuiz)
    .delete(QuizController.deleteQuiz);    

// get all quizes for a user by user id
router
    .route('/user')
    .get(QuizController.getAllQuizzesFromUser);
    
module.exports = router;