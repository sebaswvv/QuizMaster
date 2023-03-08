import { QuizService } from "../services/quizservice";
import { Request, Response } from "express";
const jwt = require("jsonwebtoken");

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
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        // TODO check if the token is not expired      
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
    // decode JWT
    if (!req.headers.authorization) {
        res.status(401).json({ message: 'Invalid token' });
        return;
    }
    const token = req.headers.authorization!.split(' ')[1];

    let userId = '';
    // verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        userId = decoded.userId;
        // TODO check if the token is not expired      
    } catch (error) {
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

    //console.log(req.query.id);

    const quiz = await quizService.getQuiz(req.query.id);
    if (!quiz) {
        res.status(400).json({ message: 'That quiz does not exist' });
        return;
    }

    // check if the quiz is public or not
    if (!quiz.public) {
        // check if the user is logged in
        if (!req.headers.authorization) {
            res.status(401).json({ message: 'Invalid token' });
            return;
        }
        const token = req.headers.authorization!.split(' ')[1];
        
        // verify token
        try {
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            // check if the user is the owner of the quiz
            if (decoded.userId !== quiz.user_id) {
                res.status(401).json({ message: 'Invalid token' });
                return;
            }
        } catch (error) {
            res.status(401).json({ message: 'Invalid token' });
            return;
        }
    }
    //send the req.body back
    res.status(200).json(quiz);
}