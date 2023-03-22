import { QuizRepository } from "../repositories/quizrepository";
import { Quiz } from "../models/quiz";

// for image compression
import sharp from 'sharp';

class QuizService {
    private quizRepository: QuizRepository;

    constructor() {
        this.quizRepository = new QuizRepository();
    }

    async searchQuizzes(search: any) {
        try {
            const quizzes = await this.quizRepository.searchQuizzes(search);
            return quizzes;
        } catch (error) {
            return false;
        }   
    }

    verifyQuiz(quiz: Quiz) {
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
        return true;       
    }

    async editQuiz(rawQuiz: any, quizId: any) {
        // check if all required fields are present
        if (!rawQuiz.name || !rawQuiz.userId || rawQuiz.public === undefined || !rawQuiz.questions) {
            return false;
        }

        // create a new quiz
        const quiz = new Quiz(
            rawQuiz.name,
            rawQuiz.userId,
            rawQuiz.public,
            rawQuiz.questions,
            quizId
        );

        // foreach question, compress image
        // for (let i = 0; i < quiz.questions.length; i++) {
        //     const question = quiz.questions[i];
        //     if (question.image) {
        //       let base64Data = question.image.replace(/^data:image\/jpeg;base64,/, '');
        //       // or png
        //       base64Data = question.image.replace(/^data:image\/png;base64,/, '');
        //       const buffer = Buffer.from(base64Data, 'base64');
        //       // log the size of the image
        //       console.log(buffer.length);
        //       const compressedImageBuffer = await sharp(buffer)
        //         .resize({ width: 500 })
        //         .jpeg({ quality: 80 })
        //         .toBuffer();
          
        //       const mimeType = 'image/jpeg';
        //       const base64EncodedImage = `data:${mimeType};base64,${compressedImageBuffer.toString('base64')}`;
          
        //       question.image = base64EncodedImage;

        //       // log the size of the compressed image
        //         console.log(compressedImageBuffer.length);
        //     }
        // }

        if (!this.verifyQuiz(quiz)) {
            return false;
        }

        try {
            if (!await this.quizRepository.editQuiz(quiz)) {
                return false;                
            }
            return quiz; 
        } catch (error) {
            return false;
        }
    }

    async deleteQuiz(id: any) {
        try {
            await this.quizRepository.deleteQuiz(id);
            return true;
        } catch (error) {
            return false;
        }
    }


    async addQuiz(rawQuiz: any) {
        // check if all required fields are present
        if (!rawQuiz.name || !rawQuiz.userId || rawQuiz.public === undefined || !rawQuiz.questions) {
            return false;
        }      

        // create a new quiz
        const quiz = new Quiz(
            rawQuiz.name,
            rawQuiz.userId,
            rawQuiz.public,
            rawQuiz.questions,   
            undefined
        );        

        // // foreach question, compress image
        // for (let i = 0; i < quiz.questions.length; i++) {
        //     const question = quiz.questions[i];
        //     console.log(question.image);
        //     if (question.image) {
        //       const compressedImageBuffer = await sharp(question.image.buffer)
        //         .resize({ width: 500 })
        //         .jpeg({ quality: 80 })
        //         .toBuffer();
          
        //       question.image = {
        //         buffer: compressedImageBuffer,
        //         mimetype: 'image/jpeg'
        //       };
        //     }
        //   }

        if (!this.verifyQuiz(quiz)) {
            return false;
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

    async getAllQuizzesFromUser(userId: any) {
        try {
            const quizzes = await this.quizRepository.getAllQuizzesFromUser(userId);
            return quizzes;
        } catch (error) {
            return false;
        }
    }      
}

export { QuizService };