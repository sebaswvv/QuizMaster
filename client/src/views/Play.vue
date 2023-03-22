<script setup lang="ts">
import router from '../router';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/useLogin';
import { onMounted } from 'vue';
import Question from '../components/Question.vue';
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");
const loginStore = useLoginStore();

const { id } = router.currentRoute.value.params;

const quizName = ref('');
const questions = ref(<any>[]);
const started = ref(false);
const ended = ref(false);
const currentQuestion = ref(<any>null);
const round = ref(0);
const roomId = ref('');
const players = ref(<any>[]);


function timeIsUp(answer: string) {
    // to send the correct answer to the players
    socket.emit('newAnswer', { roomId: roomId.value, answer: answer });
}


function nextQuestion() {
    //socket.emit('newAnswer', { roomId: roomId.value, answer: currentQuestion.value.correctAnswer });
    // emit the next question
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
        socket.emit('newQuestion', { roomId: roomId.value, question: currentQuestion.value });
    }
}

function startGame() {
    // notify the players that the game has started
    socket.emit('start', { roomId: roomId.value, quizName: quizName.value });


    // emit the question to the players
    currentQuestion.value = questions.value[round.value];
    socket.emit('newQuestion', { roomId: roomId.value, question: currentQuestion.value });

    // start the game to show the component
    started.value = true;
}

onMounted(async () => {
    // get the quiz with that id as query param and pass the bearer token from the login store if it exists
    try {
        const response = await axios.get(`/api/quizzes/${id}`, {
            headers: {
                Authorization: `Bearer ${loginStore.token}`,
            },
        });
        const quiz = response.data;
        questions.value = quiz.questions;
        quizName.value = quiz.name;

        generateRoomId();
        createRoom();
        listenToEmits();
    } catch (error: any) {
        // check if the error is a 401 unauthorized
        if (error.response.status === 401) {
            // redirect to login
            router.push('/');
        }
    }
});

function listenToEmits() {
    socket.on("joined", (data: any) => {
        players.value.push(data);
    });

    socket.on("answer", (data: any) => {
        console.log(data);
    });
}

function createRoom() {
    // creae object with room id and username master
    const data = {
        roomId: roomId.value,
        username: "master"
    }
    socket.emit("join", data);
}

function generateRoomId() {
    const randomNumbers = [];
    const randomLetters = [];
    for (let i = 0; i < 4; i++) {
        randomNumbers.push(Math.floor(Math.random() * 10));
    }
    for (let i = 0; i < 2; i++) {
        randomLetters.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
    }
    roomId.value = randomNumbers.join('') + randomLetters.join('');
}
</script>

<template>
    <!-- starting.. -->
    <div class="center" v-if="!started && !ended">
        <h1>Maak je klaar voor de:</h1>
        <h2 class="mb-5 text-center">{{ quizName }}</h2>
        <h3>Ga naar localhost/participate en voer deze code in om mee te doen:</h3>
        <h2>{{ roomId }}</h2>
        <h1>Deelnemers:</h1>
        <u class="list">
            <li v-for="player in players" :key="player">{{ player }}</li>
        </u>
        <button class="button" @click="startGame">SPEEL</button>
    </div>
    <!-- starting.. -->

    <div class="center">
        <Question v-if="started" :question="currentQuestion" :round="round" :key="round" @nextQuestion="nextQuestion"
            @timeIsUp="timeIsUp" />
    </div>

    <div class="center" v-if="ended">
        <h2 class="text-center">Dat was hem, bedankt voor het spelen</h2>
        <button class="button" @click="$router.push('/')">Terug naar home</button>
    </div>
</template>

<style scoped>
.list {
    list-style-type: none;
    text-decoration: none;
    padding: 0;
    margin: 0;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Boogaloo', cursive;
    font-size: 5rem;
    color: #000000;
}

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