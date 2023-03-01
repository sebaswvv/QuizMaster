import { Repository } from './repository';
import { Quiz } from "../models/quiz";
class QuizRepository extends Repository {    
    constructor() {
        super();
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
    
            // get questions
            const questions = await this.knex('questions').where('quiz_id', id);
    
            // foreach question get options
            for (const question of questions) {
                const options = await this.knex('options').where('question_id', question.id);
                 
                for (const option of options) {
                    // set Buffer to boolean using Buffer api
                    console.log(option.is_correct);                 
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
}

export { QuizRepository };