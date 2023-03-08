import { Repository } from './repository';
import { Quiz } from "../models/quiz";
class QuizRepository extends Repository {    
    constructor() {
        super();
    }

    async searchQuizzes(search: any) {
        try {
            // search only public quizzes with name like search
            const quizzes = await this.knex('quizzes')
            .select('quizzes.id', 'quizzes.name')
            .where('quizzes.public', true)
            .andWhere('quizzes.name', 'like', `%${search}%`);
            return quizzes;
        } catch (error) {
            console.log(error);
        }        
    }

    async addQuiz(quiz: Quiz) {
        try{
            // insert into quizzes name, userId, isPublic
        await this.knex('quizzes').insert({
            name: quiz.name,
            user_id: quiz.userId,
            public: quiz.isPublic
        });
    
        // get quizId
        const quizId = await this.knex('quizzes').max('id as id').first();
        
        // loop through questions and insert each question and options
        for (const question of quiz.questions) {
            // insert question into questions table
            await this.knex('questions').insert({
                text: question.text,
                quiz_id: quizId.id,
                image: question.image,
                time_to_answer: question.timeToAnswer
            });
    
            // get the questionId of the inserted question
            const questionId = await this.knex('questions').max('id as id').first();
    
            // insert options for the current question
            for (const option of question.options) {
                await this.knex('options').insert({
                    text: option.text,
                    is_correct: option.isCorrect,
                    question_id: questionId.id
                });
            }
        }
        } catch (error) {
            console.log(error);
        }        
    }     

    async quizExists(id: number) {
        try {
            const quiz = await this.knex('quizzes').where('id', id).first();
            if (quiz) {
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
        }
    }

    
    async getQuiz(id: number) {
        try {
            // get quiz
            const quiz = await this.knex('quizzes').where('id', id).first();
            
            // parse quiz.public to boolean
            const isPublic = !!quiz.public.readInt8(0);
            quiz.public = isPublic;

            // get questions
            const questions = await this.knex('questions').where('quiz_id', id);

            // for each question parse the image to string
            for (const question of questions) {
                if (question.image) {
                    // to base64
                    question.image = question.image.toString('base64');
                }
            }
            
            // foreach question get options
            for (const question of questions) {
                const options = await this.knex('options').where('question_id', question.id);
                 
                for (const option of options) {
                    // parse Buffer to boolean
                    const isCorrect = !!option.is_correct.readInt8(0);
                    option.is_correct = isCorrect;
                }
                question.options = options;
            }
            // add questions to quiz
            quiz.questions = questions;
    
            return quiz;
        } catch (error) {
            console.log(error);
        }
    }

    async getAllQuizzesFromUser(userId: number) {
        // get all quiz ids from user
        const quizIds = await this.knex('quizzes').where('user_id', userId).select('id');
        const quizzes = [];
        for (const quizId of quizIds) {
            const quiz = await this.getQuiz(quizId.id);
            quizzes.push(quiz);
        }
        return quizzes;
    }
}

export { QuizRepository };