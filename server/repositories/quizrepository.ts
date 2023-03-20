import { Repository } from './repository';
import { Quiz } from "../models/quiz";
class QuizRepository extends Repository {    
    constructor() {
        super();
    }

    async deleteQuiz(id: any) {
        try {
            // start transaction
            await this.knex.transaction(async (trx: any) => {
                await this.knex.raw('SET FOREIGN_KEY_CHECKS = 0');

                await this.knex('options').where('questionId', id).del();

                await this.knex('questions').where('quizId', id).del();

                await this.knex('quizzes').where('id', id).del();

                await this.knex.raw('SET FOREIGN_KEY_CHECKS = 1');

                await trx.commit();
            });
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async searchQuizzes(search: any) {
        try {
            // also add the username to each quiz
            const quizzes = await this.knex('quizzes')
                .select('quizzes.id', 'quizzes.name', 'users.username')
                .where('quizzes.public', true)
                .andWhere('quizzes.name', 'like', `%${search}%`)
                .join('users', 'quizzes.userId', '=', 'users.id');
            return quizzes;
        } catch (error) {
            console.log(error);
        }        
    }

    async editQuiz(quiz: Quiz) {
        try {
            // start transaction
            await this.knex.transaction(async (trx: any) => {
                // update quiz name, isPublic
                await this.knex('quizzes').where('id', quiz.id).update({
                    name: quiz.name,
                    public: quiz.isPublic
                });

                // ingnore foreign key checks
                await this.knex.raw('SET FOREIGN_KEY_CHECKS = 0');

                // delete all questions and options for the quiz
                await this.knex('options').where('questionId', quiz.id).del();
                await this.knex('questions').where('quizId', quiz.id).del();

                // enable foreign key checks
                await this.knex.raw('SET FOREIGN_KEY_CHECKS = 1');

                // loop through questions and insert each question and options
                for (const question of quiz.questions) {
                    // const timeToAnswer = moment.utc(question.timeToAnswer * 1000).format('HH:mm:ss');
                    // insert question into questions table
                    await this.knex('questions').insert({
                        text: question.text,
                        quizId: quiz.id,
                        image: question.image,
                        timeToAnswer: question.timeToAnswer
                    });

                    // get the questionId of the inserted question
                    const questionId = await this.knex('questions').max('id as id').first();

                    // insert options for the current question
                    for (const option of question.options) {
                        await this.knex('options').insert({
                            text: option.text,
                            isCorrect: option.isCorrect,
                            questionId: questionId.id
                        });
                    }
                }
                // commit transaction
                await trx.commit();
        });


            // return true if everything went well
            return true;
        } catch (error) {
            console.log(error);
        }
    }         

    async addQuiz(quiz: Quiz) {
        try{
            // insert into quizzes name, userId, isPublic
            await this.knex('quizzes').insert({
                name: quiz.name,
                userId: quiz.userId,
                public: quiz.isPublic
            });
        
            // get quizId
            const quizId = await this.knex('quizzes').max('id as id').first();
            
            // loop through questions and insert each question and options
            for (const question of quiz.questions) {
                // insert question into questions table
                await this.knex('questions').insert({
                    text: question.text,
                    quizId: quizId.id,
                    image: question.image,
                    timeToAnswer: question.timeToAnswer
                });
        
                // get the questionId of the inserted question
                const questionId = await this.knex('questions').max('id as id').first();
        
                // insert options for the current question
                for (const option of question.options) {
                    await this.knex('options').insert({
                        text: option.text,
                        isCorrect: option.isCorrect,
                        questionId: questionId.id
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
            const questions = await this.knex('questions').where('quizId', id);

            // for each question parse the image to string
            for (const question of questions) {
                if (question.image) {
                    // to base64
                    question.image = question.image.toString('base64');
                }
            }
            
            // foreach question get options
            for (const question of questions) {
                const options = await this.knex('options').where('questionId', question.id);
                 
                for (const option of options) {
                    // parse Buffer to boolean
                    const isCorrect = !!option.isCorrect.readInt8(0);
                    option.isCorrect = isCorrect;
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
        const quizIds = await this.knex('quizzes').where('userId', userId).select('id');
        const quizzes = [];
        for (const quizId of quizIds) {
            const quiz = await this.getQuiz(quizId.id);
            quizzes.push(quiz);
        }
        return quizzes;
    }
}

export { QuizRepository };