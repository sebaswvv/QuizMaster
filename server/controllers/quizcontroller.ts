import { QuizService } from "../services/quizservice";
import { Request, Response } from "express";
import { Quiz } from "../models/quiz";
import { Question } from "../models/question";
import { Option } from "../models/option";

exports.addQuiz = async (req: Request, res: Response) => {
    const quizService = new QuizService();

    // create a template quiz
    const quiz = new Quiz(0, "Quiz 1", 1, true, [
        new Question("Question 1", "", 10, [
            new Option("Option 1", true),
            new Option("Option 2", false),
            new Option("Option 3", false),
            new Option("Option 4", false)
        ]),
        new Question("Question 2", "", 10, [
            new Option("Option 1", true),
            new Option("Option 2", false),
            new Option("Option 3", false),
            new Option("Option 4", false)
        ]),
        new Question("Question 3", "", 10, [
            new Option("Option 1", true),
            new Option("Option 2", false),
            new Option("Option 3", false),
            new Option("Option 4", false)
        ]),
    ]); 

    // send this quiz as json to the users
    res.status(200).json(quiz);
}