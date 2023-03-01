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
          userId: useLoginStore().getId,
          questions: [],
        },
      }),
    getters: {
        getQuiz: (state) => state.quiz,
    },
    actions: {
        async publishQuiz() {
            // publish the quiz
            const quizAsJson = JSON.parse(JSON.stringify(this.quiz));

            const response = await axios.post('http://localhost:3000/api/quizzes', quizAsJson);
            console.log(response);
        }
    }    
})

