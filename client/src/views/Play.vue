<template>
    <div :class="{ header: !small, 'header-small': small }"
        class="d-flex flex-column justify-content-center align-items-center">
        <home-icon />
        <account-icon />
        <h2 class="text-center">Wat wil je doen?</h2>
        <div class="d-flex flex-row justify-content-center">
            <button class="button mx-2" @click="handleParticipate">Deelnemen aan een quiz</button>
            <button class="button mx-2" @click="handlePlayOwnQuiz">Speel een eigen quiz</button>
            <button class="button mx-2" @click="handleSearchQuiz">Zoek een openbare quiz om te spelen</button>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3 class="text-center mt-5">Search for a quiz:</h3>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search for a quiz" aria-label="Search for a quiz"
                        aria-describedby="button-addon2">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <h1 class="text-center">{{ quizName }}</h1>
        <button v-if="!started && !ended" class="button" @click="startGame">SPEEL</button>
        <Question v-if="started" :question="currentQuestion" :round="round" :key="round" @nextQuestion="nextQuestion" />
        <h2 v-if="ended" class="text-center">Dat was hem, bedankt voor het spelen</h2>
        <button v-if="ended" class="button" @click="$router.push('/')">Terug naar home</button> -->
</template>

<script setup lang="ts">
import HomeIcon from "../components/HomeIcon.vue";
import AccountIcon from "../components/AccountIcon.vue";
import Question from "../components/Question.vue";
import router from '../router';
import { ref, onMounted } from 'vue';
import axios from "axios";

import { useLoginStore } from "../stores/useLogin";

const loginStore = useLoginStore();

const small = ref(false);

function handleParticipate() {
    small.value = true;
}

function handlePlayOwnQuiz() {
    // set user to account to see and play their own quizzes
    // check if user is logged in
    if (!loginStore.isLoggedIn) {
        // if not logged in, redirect to login page
        router.push('/login');
    } else {
        // if logged in, redirect to account page
        router.push('/account');
    }
}

function handleSearchQuiz() {
    small.value = true;
}





// FOR PLAYING A QUIZ ON SCREEN
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
    // do get request to get the quiz to http://localhost:3000/api/quizzes
    // with id 1 in qeury params
    const response = await axios.get('http://localhost:3000/api/quizzes', {
        params: {
            id: 3
        }
    });
    const data = response.data;

    // set questions
    questions.value = data.questions;

    // set quizName
    quizName.value = data.name;

});
</script>

<style scoped>
.header-small {
    height: 50vh;
    padding-top: 5vh;
    padding-bottom: 5vh;
    background-color: #F4F1DE;
}

.header {
    height: 100vh;
    padding-top: 10vh;
    padding-bottom: 10vh;
    background-color: #F4F1DE;
}

h2 {
    font-size: 4rem;
    font-family: 'Fredoka One', cursive;
    margin-bottom: 2rem;
    color: #000000;
}

.button {
    font-family: 'Boogaloo', cursive;
    color: white;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border-radius: 2rem;
    background-color: #0D5D56;
}
</style>

