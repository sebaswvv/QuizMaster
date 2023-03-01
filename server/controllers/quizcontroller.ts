import { QuizService } from "../services/quizservice";
import { Request, Response } from "express";

exports.addQuiz = async (req: Request, res: Response) => {
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
        res.status(400).json({ message: 'Error getting quiz' });
        return;
    }
    //send the req.body back
    res.status(200).json(quiz);
}