import { QuizService } from "../services/quizservice";
import { Request, Response } from "express";
const jwt = require("jsonwebtoken");

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

exports.getQuiz = async (req: Request, res: Response) => {
    const quizService = new QuizService();

    //console.log(req.query.id);

    const quiz = await quizService.getQuiz(req.query.id);
    if (!quiz) {
        res.status(400).json({ message: 'That quiz does not exist' });
        return;
    }
    //send the req.body back
    res.status(200).json(quiz);
}