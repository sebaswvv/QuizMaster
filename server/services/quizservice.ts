import { QuizRepository } from "../repositories/quizrepository";
import { Quiz } from "../models/quiz";


class QuizService {
    private quizRepository: QuizRepository;

    constructor() {
        this.quizRepository = new QuizRepository();
    }

    async addQuiz(rawQuiz: any) {
        // check if all required fields are present
        if (!rawQuiz.name || !rawQuiz.userId || !rawQuiz.isPublic || !rawQuiz.questions) {
            return false;
        }

        const quiz = new Quiz(
            rawQuiz.name,
            rawQuiz.userId,
            rawQuiz.isPublic,
            rawQuiz.questions,   
            undefined
        );

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