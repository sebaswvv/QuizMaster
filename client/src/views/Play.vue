<script setup lang="ts">
import router from '../router';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/useLogin';
import { onMounted } from 'vue';
import Question from '../components/Question.vue';

const loginStore = useLoginStore();

// get params from the url
const { id } = router.currentRoute.value.params;

const quizName = ref('');
const questions = ref([]);
const started = ref(false);
const ended = ref(false);
const currentQuestion = ref(null);
const round = ref(0);


function nextQuestion() {
    // next round
    round.value++
    // if round is equal to the amount of questions, the game is finished
    if (round.value === questions.value.length) {
        // game is finished
        started.value = false;
        round.value = 0;
        console.log('finished');
        ended.value = true;
    } else {
        // load the next question
        currentQuestion.value = questions.value[round.value];
    }
}

function startGame() {
    // load the question.index = round as component
    currentQuestion.value = questions.value[round.value];

    // start the game to show the component
    started.value = true;
}

onMounted(async () => {
    // get the quiz with that id as query param and pass the bearer token from the login store if it exists
    try {
        const response = await axios.get(`http://localhost:3000/api/quizzes`, {
            params: {
                id,
            },
            headers: {
                Authorization: `Bearer ${loginStore.token}`,
            },
        });
        const quiz = response.data;
        // set questions
        questions.value = quiz.questions;

        // set quizName
        quizName.value = quiz.name;
    } catch (error: any) {
        // check if the error is a 401 unauthorized
        if (error.response.status === 401) {
            // redirect to login
            router.push('/');
        }
    }
});
</script>

<template>
    <div class="center">
        <h1 v-if="!started && !ended">Maak je klaar voor de:</h1>
        <h2 class="text-center">{{ quizName }}</h2>
        <button v-if="!started && !ended" class="button" @click="startGame">SPEEL</button>
        <Question v-if="started" :question="currentQuestion" :round="round" :key="round" @nextQuestion="nextQuestion" />
        <h2 v-if="ended" class="text-center">Dat was hem, bedankt voor het spelen</h2>
        <button v-if="ended" class="button" @click="$router.push('/')">Terug naar home</button>
    </div>
</template>

<style scoped>
.center {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10vh;
    height: 100vh;
    background-color: #F4F1DE;
}

h2 {
    font-size: 4rem;
    font-family: 'Fredoka One', cursive;
    /* margin-bottom: 2rem; */
    color: #000000;
}

.button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Boogaloo', cursive;
    color: white;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border-radius: 2rem;
    background-color: #0D5D56;
}
</style>