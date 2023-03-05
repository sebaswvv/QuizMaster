<template>
    <div class="container-fluid">
        <!-- <TimerSlider :timeInSeconds="timeInSeconds" /> -->
    </div>
    <div class="container">
        <Navbar />
        <button class="button">Speel een eigen spel</button>
        <button class="button">Speel een openbaar spel</button>
        <!-- <h1 class="text-center">{{ quizName }}</h1>
        <button v-if="!started && !ended" class="button" @click="startGame">SPEEL</button>
        <Question v-if="started" :question="currentQuestion" :round="round" :key="round" @nextQuestion="nextQuestion" />
        <h2 v-if="ended" class="text-center">Dat was hem, bedankt voor het spelen</h2>
        <button v-if="ended" class="button" @click="$router.push('/')">Terug naar home</button> -->
    </div>
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Question from "../components/Question.vue";
import { ref, onMounted } from 'vue';
import axios from "axios";

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
h1 {
    font-family: 'Fredoka One', cursive;
}

.button {
    font-family: 'Boogaloo', cursive;
    color: white;
    font-size: 25px;
    padding: 2vh;
    border-radius: 2rem;
    background-color: #0D5D56;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3vh;
}
</style>

