import express from 'express';
import { Request, Response } from "express";
const router = express.Router();
const QuizController = require('../controllers/quizcontroller');


function routeGet (req: Request, res: Response) {
    // check if there is a search query
    if (req.query.search) {
        QuizController.searchQuizzes(req, res);
    }
    // if there is an id in the url
    else if (req.params.id) {
        QuizController.getQuiz(req, res);
    } else {
        res.status(400).json({
            message: 'Please provide a search query or an id'
        }); 
    }
}

// get all quizes for a user by user id
router
    .route('/user')
    .get(QuizController.getAllQuizzesFromUser);

router
    .route('/:id?')
    .get(routeGet)
    .post(QuizController.addQuiz)
    .put(QuizController.editQuiz)
    .delete(QuizController.deleteQuiz);    
    
module.exports = router;