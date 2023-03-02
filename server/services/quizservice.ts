import { QuizRepository } from "../repositories/quizrepository";
import { Quiz } from "../models/quiz";


class QuizService {
    private quizRepository: QuizRepository;

    constructor() {
        this.quizRepository = new QuizRepository();
    }

    async addQuiz(rawQuiz: any) {
        // check if all required fields are present
        if (!rawQuiz.name || !rawQuiz.userId || rawQuiz.isPublic === undefined || !rawQuiz.questions) {
            return false;
        }      

        const quiz = new Quiz(
            rawQuiz.name,
            rawQuiz.userId,
            rawQuiz.isPublic,
            rawQuiz.questions,   
            undefined
        );        

        // check if every question has text, image, time to answer and options
        for (let i = 0; i < quiz.questions.length; i++) {
            const question = quiz.questions[i];
            // check if each option has text and isCorrect !== undefined
            for (let j = 0; j < question.options.length; j++) {
                const option = question.options[j];
                if (!option.text || option.isCorrect === undefined) {
                    return false;
                }
            }            

            if (!question.text || question.image === undefined || question.timeToAnswer === undefined || !question.options) {
                return false;
            }
        }

        try {
            await this.quizRepository.addQuiz(quiz);
        } catch (error) {
            return false;
        }

        return quiz;        
    }

    async getQuiz(id: any) {
        try {
            // check if quiz exists
            const quizExists = await this.quizRepository.quizExists(id);
            if (!quizExists) {
                return false;
            }
            const quiz = await this.quizRepository.getQuiz(id);
            return quiz;
        } catch (error) {            
            return false;
        }
    }

}

export { QuizService };