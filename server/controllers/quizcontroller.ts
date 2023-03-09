import { QuizService } from "../services/quizservice";
import { Request, Response } from "express";
const jwt = require("jsonwebtoken");

const quizService = new QuizService();

function verifyOwnerOfQuiz(req: Request) {
    // verify token and return the user id
    if (!req.headers.authorization) {
        return '';
    }
    const token = req.headers.authorization!.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        return decoded.userId;
    }
    catch (error) {
        return '';
    }    
}

exports.editQuiz = async (req: Request, res: Response) => {
    // check if the user is the owner of the quiz
    const userId = verifyOwnerOfQuiz(req);
    if (!userId) {
        res.status(401).json({ message: 'Invalid token' });
        return;
    }
    // get the quiz from the request body
    const quiz = req.body;

    const updatedQuiz = await quizService.editQuiz(quiz);
    if (!updatedQuiz) {
        res.status(400).json({ message: 'Error updating quiz' });
        return;
    }
    // send the req.body back and a message that the quiz was updated
    res.status(200).json({
        message: 'Quiz updated',
        quiz: updatedQuiz
    });    
    
    // check if there is a quiz with the id from the param
    // const quizId = req.query.id;
    // console.log(quizId);
    // const quizFromDb = await quizService.getQuiz(quizId);
    // if (!quizFromDb) {
    //     res.status(400).json({ message: 'Quiz not found' });
    //     return;
    // }
    
    // verify that there is a quiz with the id from the param and that the user is the owner
    // if (quizFromDb.userId !== userId) {
    //     res.status(401).json({ message: 'Invalid token' });
    //     return;
    // }

    // check if the quiz has a name, user_id, public
    // if (!(quiz.name && quiz.user_id && quiz.question) && quiz.public === undefined) {
    //     res.status(400).json({ message: 'Invalid quiz' });
    //     return;
    // }
    // // foreach question check if there is a text, quiz_id, time_to_answer
    // quiz.question.forEach((question: any) => {
    //     if (!(question.text && question.quiz_id && question.time_to_answer)) {
    //         res.status(400).json({ message: 'Invalid quiz' });
    //         return;
    //     }
    //     // foreach option check if there is a text, question_id, is_correct === undefined
    //     question.option.forEach((option: any) => {
    //         if (!(option.text && option.question_id && option.is_correct === undefined)) {
    //             res.status(400).json({ message: 'Invalid quiz' });
    //             return;
    //         }
    //     });
    // });

    // send to service
    // return the quiz json
}

exports.searchQuizzes = async (req: Request, res: Response) => {
    // TODO add pagination
    const quizService = new QuizService();  
    const quizzes = await quizService.searchQuizzes(req.query.search);
    if (!quizzes) {
        res.status(400).json({ message: 'Error searching quizzes' });
        return;
    }
    // send the req.body back
    res.status(200).json(quizzes);
}

exports.addQuiz = async (req: Request, res: Response) => {
    // get Bearer token from header
    if (!req.headers.authorization) {
        res.status(401).json({ message: 'Invalid token' });
        return;
    }
    const token = req.headers.authorization!.split(' ')[1];

    // verify token
    try {
        // only verify the token, don't decode it
        jwt.verify(token, process.env.JWT_KEY);  
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
        return;
    }

    const quizService = new QuizService();

    const quiz = await quizService.addQuiz(req.body);
    if (!quiz) {
        res.status(400).json({ message: 'Error adding quiz' });
        return;
    }
    // send the req.body back
    res.status(200).json(quiz);
}



exports.getAllQuizzesFromUser = async (req: Request, res: Response) => {
    const userId = verifyOwnerOfQuiz(req);
    if (!userId) {
        res.status(401).json({ message: 'Invalid token' });
        return;
    }

    // get all quizzes from user
    const quizService = new QuizService();
    const quizzes = await quizService.getAllQuizzesFromUser(userId);
    if (!quizzes || quizzes.length === 0) {
        res.status(400).json({ message: 'Error getting quizzes' });
        return;
    }
    // send the req.body back
    res.status(200).json(quizzes);
}

exports.getQuiz = async (req: Request, res: Response) => {
    const quizService = new QuizService();

    const quiz = await quizService.getQuiz(req.query.id);
    if (!quiz) {
        res.status(400).json({ message: 'That quiz does not exist' });
        return;
    }

    // if the quiz is not public, check if the user is the owner of the quiz
    if (!quiz.public) {
        // verify token
        const userId = verifyOwnerOfQuiz(req);
        // check if the user is the owner of the quiz
        if (userId !== quiz.user_id) {
            res.status(401).json({ message: 'Invalid token' });
            return;
        }
    }
    //send the req.body back
    res.status(200).json(quiz);
}