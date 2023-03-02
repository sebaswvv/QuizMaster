<template>
    <div class="container-fluid">
        <!-- <TimerSlider :timeInSeconds="timeInSeconds" /> -->
    </div>
    <div class="container">
        <Navbar />
        <h1 class="text-center">{{ quizName }}</h1>
        <button class="button" @click="playGame">SPEEL</button>
    </div>
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import TimerSlider from '../components/TimerSlider.vue';
import { ref, onMounted } from 'vue';
import axios from "axios";

const quizName = ref('');
const questions = ref([]);
const round = ref(0);

function playGame() {
    // load the question.index = round as component
    // after the question is finished, a button should appear to load the next question
    // round++
    // if round is equal to the amount of questions, the game is finished
}

onMounted(async () => {
    // do get request to get the quiz to http://localhost:3000/api/quizzes
    // with id 1 in qeury params
    const response = await axios.get('http://localhost:3000/api/quizzes', {
        params: {
            id: 1
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
  
