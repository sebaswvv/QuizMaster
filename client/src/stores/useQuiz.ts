import {defineStore} from 'pinia'
import {useLoginStore} from './useLogin'
import axios from "axios";

interface Quiz {
    id: number;
    name: string;
    userId: number;
    public: boolean;
    questions: Array<any>;
}

export const useQuizStore = defineStore({
    id: 'quiz',
    state: (): { quiz: Quiz } => ({
        quiz: {
          id: 0,
          name: '',
          public: false,
          userId: 0,
          questions: [],
        },
      }),
    getters: {
        getQuiz: (state) => state.quiz,
    },
    actions: {
        togglePublic() {
            this.quiz.public = !this.quiz.public;
        },
        setUserId() {
            this.quiz.userId = useLoginStore().getId;
        },
        async updateQuiz() {
            const config = {
                headers: { Authorization: `Bearer ${useLoginStore().getToken}` }
            };

            try {
                await axios.put(
                    `/api/quizzes/${this.quiz.id}`,
                    this.quiz,
                    config
                );      
            } catch (error) {
                console.log(error);
            }
        },
        updateImage(questionId: number, image: string) {
            const question = this.quiz.questions.find(q => q.id === questionId);
            question.image = image;
        },
        setQuiz(quiz: Quiz) {
            this.quiz = quiz;
        },
        async publishQuiz() {
            // publish the quiz
            const quizAsJson = JSON.parse(JSON.stringify(this.quiz));

            // get Bearer token from login store and add it to the header
            const config = {
                headers: { Authorization: `Bearer ${useLoginStore().getToken}` }
            };

            // send the quiz to the backend
            try {
                await axios.post(
                    '/api/quizzes',
                    quizAsJson,
                    config
                )
                return true;
            } catch (error) {
                return false;
            }            
        },
        resetQuiz() {
            this.quiz = {
                id: 0,
                name: '',
                public: false,
                userId: this.quiz.userId,
                questions: [],
            }
        }
    }    
})

