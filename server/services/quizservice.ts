import { QuizRepository } from "../repositories/quizrepository";


class QuizService {
    private quizRepository: QuizRepository;

    constructor() {
        this.quizRepository = new QuizRepository();
    }

    async addQuiz() {
        
    }

}

export { QuizService };