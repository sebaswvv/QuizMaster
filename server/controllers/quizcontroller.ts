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

    // check if there is a quiz with the id from the param
    const quizFromDb = await quizService.getQuiz(req.params.id);
    const quizId = req.params.id;
    if (!quizFromDb) {
        res.status(400).json({ message: 'Quiz not found' });
        return;
    }
    //verify that there is a quiz with the id from the param and that the user is the owner
    if (quizFromDb.userId !== userId) {
        res.status(401).json({ message: 'Unautherized' });
        return;
    }
    const updatedQuiz = await quizService.editQuiz(req.body, quizId);
    if (!updatedQuiz) {
        res.status(400).json({ message: 'Error updating quiz' });
        return;
    }
    // send the req.body back and a message that the quiz was updated
    res.status(200).json({
        message: 'Quiz updated',
        quiz: updatedQuiz
    });      
}

exports.searchQuizzes = async (req: Request, res: Response) => {
    // TODO add pagination
    const quizzes = await quizService.searchQuizzes(req.query.search);
    if (!quizzes) {
        res.status(400).json({ message: 'Error searching quizzes' });
        return;
    }
    // send the req.body back
    res.status(200).json(quizzes);
}

exports.deleteQuiz = async (req: Request, res: Response) => {
    // check if the user is the owner of the quiz
    const userId = verifyOwnerOfQuiz(req);
    if (!userId) {
        res.status(401).json({ message: 'Invalid token' });
        return;
    }

    // check if there is a quiz with the id from the param
    const quizFromDb = await quizService.getQuiz(req.params.id);
    if (!quizFromDb) {
        res.status(400).json({ message: 'Quiz not found' });
        return;
    }
    //verify that there is a quiz with the id from the param and that the user is the owner
    if (quizFromDb.userId !== userId) {
        res.status(401).json({ message: 'Unautherized' });
        return;
    }

    
    const deletedQuiz = await quizService.deleteQuiz(req.params.id);
    if (!deletedQuiz) {
        res.status(400).json({ message: 'Error deleting quiz' });
        return;
    }
    // send the req.body back and a message that the quiz was updated
    res.status(200).json({
        message: 'Quiz deleted',
    });
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

    const quiz = await quizService.getQuiz(req.params.id);
    if (!quiz) {
        res.status(400).json({ message: 'That quiz does not exist' });
        return;
    }

    // if the quiz is not public, check if the user is the owner of the quiz
    if (!quiz.public) {
        // verify token
        const userId = verifyOwnerOfQuiz(req);
        // check if the user is the owner of the quiz
        if (userId !== quiz.userId) {
            res.status(401).json({ message: 'Invalid token' });
            return;
        }
    }
    //send the req.body back
    res.status(200).json(quiz);
}