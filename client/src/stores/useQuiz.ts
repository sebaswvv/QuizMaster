import {defineStore} from 'pinia'
import {useLoginStore} from './useLogin'
import axios from "axios";

interface Quiz {
    id: number;
    name: string;
    userId: number;
    isPublic: boolean;
    questions: Array<any>; // define the type of the questions array
}

export const useQuizStore = defineStore({
    id: 'quiz',
    state: (): { quiz: Quiz } => ({
        quiz: {
          id: 0,
          name: '',
          isPublic: false,
          userId: 0,
          questions: [],
        },
      }),
    getters: {
        getQuiz: (state) => state.quiz,
    },
    actions: {
        setUserId() {
            this.quiz.userId = useLoginStore().getId;
        },
        async publishQuiz() {
            // publish the quiz
            const quizAsJson = JSON.parse(JSON.stringify(this.quiz));

            // get Bearer token from login store and add it to the header
            const token = useLoginStore().getToken;
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            // send the quiz to the backend
            const response = await axios.post(
                'http://localhost:3000/api/quizzes',
                quizAsJson,
                config
            )
            console.log(response);
        },

        resetQuiz() {
            this.quiz = {
                id: 0,
                name: '',
                isPublic: false,
                userId: 0,
                questions: [],
            }
        }
    }    
})
